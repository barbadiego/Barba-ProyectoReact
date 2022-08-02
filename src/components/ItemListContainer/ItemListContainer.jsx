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
        , 0)
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
            setTimeout(()=>{res(getDocs(collectionFilt))}, 0)
          })
        
          filteredArray.then((res)=> {
            const collectionFiltered = res.docs.map((element)=>({...element.data(), id: element.id}));
            setProductos(collectionFiltered);
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
    <main className="styleMainWeb">
      <ul className="linksCategory">
          <p>Categorías:</p>
          <li><Link to={"/category/ciencia"} className="styleLinks">Ciencia</Link></li>
          <li><Link to={"/category/deportes"} className="styleLinks">Deportes</Link></li>
          <li><Link to={"/category/fantasia"} className="styleLinks">Fantasia</Link></li>
          <li><Link to={"/category/ficcion"} className="styleLinks">Ficción</Link></li>
          <li><Link to={"/category/terror"} className="styleLinks">Terror</Link></li>
        </ul>
        <div className="styleMainBooks">
          {loading && <div className="waitingStyle">Cargando listado de libros</div>}{" "}
          {error && <div className="waitingStyle">Error al cargar listado. Por favor, recargar página.</div>}{" "}
          {productos && <ItemList productos={productos} />}
        </div>
    </main>

    </>
  );
}