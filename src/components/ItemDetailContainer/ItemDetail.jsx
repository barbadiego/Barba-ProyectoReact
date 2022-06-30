//@ts-check
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


export default function ItemDetail( { item } ) {
    const {title, author, price, description, pictureUrl, stock} = item

    const onAdd = (auxInitial) => {
    alert(`Se agregaron ${auxInitial} productos del libro ${title} al carrito.`);  
    }

  return (
    <>
        <div className="webStyle">
            <img src={pictureUrl} className="bookCoverDetail"/>
            <div className="authorDetail">{author}</div>
            <div className="titleDetail">{title}</div>
            <div className="priceDetail">${price}</div>
            <div className="stockDetail">Stock: {stock}</div>
            <div className="descriptionDetail">{description}</div>
            <div className="cartButton"><ItemCount stock={stock} onAdd={onAdd}/></div>
        </div>
    </>
  )
}
