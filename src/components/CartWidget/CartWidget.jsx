//@ts-check
import React, { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { myContext } from '../CartContext';
import './CartWidget.css';

export default function CartWidget() {
  const { cartTotalProducts } = useContext(myContext)
  return (
    <div>
        {/* Se llama a function de CartContext que muestra el total de productos en carrito */}
        <RiShoppingCartLine size={30} className="carrito"/><span>{ cartTotalProducts() }</span>
    </div>
  )
}
