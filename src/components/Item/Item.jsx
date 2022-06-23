//@ts-check
import React from 'react'
import './Item.css'

export default function Item( { producto }) {
    const {title, author, stock, price, pictureUrl} = producto;
  return (
    <>
        <div className="cardBook">
        <p className="titleBook">{title}</p>
        <p className="author">{author}</p>
        <img src={pictureUrl} className="pictureBook"/>
        <p className="priceBook">Precio: ${price}</p>
        <p className="stockBook">Stock: {stock}</p>
        <button disabled className="detailProduct">Ver detalles</button>
        {/* <p className="quantity">Cantidad:</p> */}
        {/* {/* <Button auxInitial={auxInitial} add={add} subtract={subtract} stock={stock} /> */}
        {/* <button onClick={() => onAdd(auxInitial)} disabled={stock < 1 ? true : false} className="addCartButton">Agregar al carrito</button> */}
        </div>
    </>
  )
}
