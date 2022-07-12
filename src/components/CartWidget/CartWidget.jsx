//@ts-check
import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import './CartWidget.css'
import { myContext } from '../CartContext'

export default function CartWidget() {
  const { cartTotalProducts } = useContext(myContext)
  return (
    <div>
        {/* Se llama a function de CartContext que muestra el total de productos en carrito */}
        <HiOutlineShoppingCart size={50} className="carrito"/><span>{ cartTotalProducts() }</span>
    </div>
  )
}
