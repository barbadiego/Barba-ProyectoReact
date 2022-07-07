//@ts-check
import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { myContext } from '../CartContext'


export default function ItemDetail( { item } ) {
  const {id, title, author, price, description, pictureUrl, stock} = item
  const { addItem, removeItem, clear, cart } = useContext(myContext)

  const onAdd = (auxInitial) => {
    addItem(item, auxInitial);
  }

  return (
    <>
      <div className="webStyle">
          <img src={pictureUrl} className="bookCoverDetail" alt=""/>
          <div className="authorDetail">{author}</div>
          <div className="titleDetail">{title}</div>
          <div className="priceDetail">${price}</div>
          <div className="stockDetail">Stock: {stock}</div>
          <div className="descriptionDetail">{description}</div>

          <div className="cartButton">
            <ItemCount stock={stock} onAdd={onAdd} />
            <button onClick={() => removeItem({id})} className="addCartButton"> Quitar producto</button>
            <button onClick={() => clear()} className="addCartButton">Limpiar carrito</button>
            <button onClick={() => console.log(cart)} className="addCartButton">Show Cart</button>
          </div>
      </div>
    </>
  )
}
