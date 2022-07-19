// @ts-nocheck
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);
  let {categoryFilter} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const completeCollection = collection(db, 'books');
    
    getDocs(completeCollection).then((res) => {
        const auxArray = res.docs.map(item=> ({ ...item.data(), id: item.id }))
        setProductos(auxArray)
    })
      
    if (!categoryFilter){
      const collectionRef = new Promise((res, rej)=>{
        setTimeout(() =>{res(getDocs(completeCollection))}
        , 2000)
      })

      collectionRef
        .then((res) =>{
          const completeArray = res.docs.map((element)=>({...element.data(), id: element.id}));
          setProductos(completeArray);
        })
        .catch((error)=>{
          setError(true);
        })
        .finally( ()=>{
          setLoading(false);
        })
    } else {
      const collectionFilt = query(completeCollection, where('category', '==', categoryFilter));
          let filteredArray = new Promise((res, rej)=>{
            setTimeout(()=>{res(getDocs(collectionFilt))}, 2000)
          })
        
          filteredArray.then((res)=> {
            const collectionFiltered = res.docs.map((element)=>({...element.data(), id: element.id}));
            setProductos(collectionFiltered);
            console.log(collectionFiltered)
          })
          .catch((error)=>{
            setError(true);
           })
           .finally( ()=>{
            setLoading(false);
           })
    }
}, [categoryFilter])
    
  return (
    <>
      <ul className="linksCategory">
        <li><Link to={"/category/terror"}>Terror</Link></li>
        <li><Link to={"/category/fantasia"}>Fantasia</Link></li>
        <li><Link to={"/category/ficcion"}>Ficción</Link></li>
        <li><Link to={"/category/deportes"}>Deportes</Link></li>
        <li><Link to={"/category/ciencia"}>Ciencia</Link></li>
        <li><Link to={"/checkout"}>checkout</Link></li>
      </ul>
      <div>
        {loading && "Cargando listado de libros"}{" "}
        {error && "Error al cargar listado. Por favor, recargar página."}{" "}
        {productos && <ItemList productos={productos} />}
      </div>
    </>
  );
}