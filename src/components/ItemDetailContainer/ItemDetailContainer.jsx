//@ts-check
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState({});
    let { itemId } = useParams();

    useEffect( ()=>{
        const db = getFirestore();
        // @ts-ignore
        const detailedItem = doc(db, 'books', itemId)
        
        let bookDetail = new Promise((res, rej) =>{
                setTimeout( ()=>{res(getDoc(detailedItem))}
                , 2000)
            });

        bookDetail
            .then((res)=> {
                setItem({...res.data(), id: res.id});
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