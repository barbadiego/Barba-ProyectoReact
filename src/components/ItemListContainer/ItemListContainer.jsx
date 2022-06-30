// @ts-nocheck
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
      
    let books = new Promise((res, rej) =>{
      setTimeout(() => {
        fetch("http://localhost:3000/productoslista.json")
          .then((response) => response.json())
          .then((data) =>{
            res(data);
          })
      }, 2000)
    })

    books
      .then((resultado) => {
          if (!categoryFilter){
              setProductos(resultado)
            } else {
              let booksFiltered = resultado.filter((elemento) => elemento.category === categoryFilter.toLowerCase())
              setProductos(booksFiltered)
            }
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
}, [categoryFilter])
    
  return (
    <>
      <ul className="linksCategory">
        <li><Link to={"/category/terror"}>Terror</Link></li>
        <li><Link to={"/category/fantasia"}>Fantasia</Link></li>
        <li><Link to={"/category/ficcion"}>Ficción</Link></li>
        <li><Link to={"/category/deportes"}>Deportes</Link></li>
        <li><Link to={"/category/ciencia"}>Ciencia</Link></li>
      </ul>
      <div>
        {loading && "Cargando listado de libros"}{" "}
        {error && "Error al cargar listado. Por favor, recargar página."}{" "}
        {productos && <ItemList productos={productos} />}
      </div>
    </>
  );
}