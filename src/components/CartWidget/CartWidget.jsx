import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import './CartWidget.css'

export default function CartWidget( { cant }) {
  return (
    <div>
        <HiOutlineShoppingCart size={50} className="carrito"/><span>{ cant }</span>
    </div>
  )
}
