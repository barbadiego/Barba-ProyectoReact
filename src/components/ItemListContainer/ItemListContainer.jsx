//@ts-check
import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import shining from './portadas/resplandor.png';
import hobbit from './portadas/hobbit.jpg';
import misery from './portadas/misery.png';
import lordfly from './portadas/señorDeLasMoscas.png';
import fahrenheit from './portadas/fahrenheit.png';

export default function ItemListContainer( { msg }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [productos, setProductos] = useState([])
  let books;

    useEffect(() => {
      
        books = new Promise((res, rej) => {
          setTimeout(() => {
            if (Math.random() < 1){
              res( [
                  { id: 1, title: "El Resplandor", author: "Stephen King", price: 3700, stock: 10, pictureUrl: shining },
                  { id: 2, title: "El Hobbit", author: "J.R.R. Tolkien", price: 2700, stock: 5, pictureUrl: hobbit },
                  { id: 3, title: "Misery", author: "Stephen King", price: 3000, stock: 0, pictureUrl: misery },
                  { id: 4, title: "El señor de las moscas", author: "William Golding", price: 2800, stock: 24, pictureUrl: lordfly },
                  { id: 5, title: "Fahrenheit 451", author: "Ray Bradbury", price: 2200, stock: 11, pictureUrl: fahrenheit }
                ] )
            } else {
              rej()
            }
          }, 2000)
        })

        books
          .then((resultado) => {
            setProductos(resultado)
          })
          .catch((err) => {
            setError(true)
          })
          .finally(() => {
            setLoading(false)
          })

    }, [])
    
  return (
    <>
      <div className="styleBody">{msg}</div>
      <div>
        {loading && "Cargando listado de libros"} {error && "Error al cargar listado. Por favor, recargar página."} {productos && <ItemList productos={productos} />}
      </div>
    </>
  )
}