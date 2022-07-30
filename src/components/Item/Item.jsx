//@ts-check
import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'

export default function Item( { producto } ) {
    const {title, author, stock, price, pictureUrl, id} = producto;

  return (
    <>
        <div className="cardBook">
          <p className="titleBook">{title}</p>
          <p className="author">{author}</p>
          <img src={pictureUrl} className="pictureBook" alt=""/>
          <p className="priceBook">Precio: ${price}</p>
          {/* <p className="stockBook">Stock: {stock}</p> */}
          <button disabled className="detailProduct"><Link to={`/item/${id}`} className="detailProduct1">Ver detalle</Link></button> 
        </div>
    </>
  )
}
