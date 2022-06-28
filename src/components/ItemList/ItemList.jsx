//@ts-check
import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export default function ItemList( { productos }) {
  return (
    <div className="styleContainer">
        {productos.map((producto) => (
            <div key={producto.id}>
                <Item producto={producto} />
            </div>
        ))}
    </div>
  )
}
