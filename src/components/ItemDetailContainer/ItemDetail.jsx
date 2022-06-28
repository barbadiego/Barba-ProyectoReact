import React from 'react'
import './ItemDetail.css'


export default function ItemDetail( { item } ) {
    const {title, author, price, description, pictureUrl, stock} = item

  return (
    <>
        <div className="webStyle">
            <img src={pictureUrl} className="bookCoverDetail"/>
            <div className="authorDetail">{author}</div>
            <div className="titleDetail">{title}</div>
            <div className="priceDetail">${price}</div>
            <div className="stockDetail">Stock: {stock}</div>
            <div className="descriptionDetail">{description}</div>
        </div>
    </>
  )
}
