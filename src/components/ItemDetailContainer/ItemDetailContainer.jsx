//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState({});
    let { itemId } = useParams();

    useEffect( ()=>{
        let bookDetail = new Promise((res, rej) =>{
                setTimeout( ()=>{
                  fetch("http://localhost:3000/productoslista.json")
                  .then((response)=> response.json())
                  .then((data)=>{
                      res(data);
                  })
                }, 0)
            });

        bookDetail
            .then((resultado)=> {
                let aux = resultado.find((elemento) => elemento.id == itemId)
                setItem(aux);
            })
            .catch((error)=> {
                setError(true);
            })
            .finally(()=>{
                setLoading(false);
            })

    }, [itemId])

    return (
        <>
            {loading ? <div>Cargando libro.</div> : <ItemDetail item={item} />}
            {error && "Error al cargar listado. Por favor, recargar página."}
        </>
    )
}