//@ts-check
import React, { useContext } from 'react'
import { myContext } from '../CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


export default function ItemDetail( { item } ) {
  const { title, author, price, description, pictureUrl, stock} = item
  const { addItem } = useContext(myContext)

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
          </div>
      </div>
    </>
  )
}
