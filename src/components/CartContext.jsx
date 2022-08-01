import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const myContext = createContext();

export default function CartContext( { children } ) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // Valida si ya existe producto id en carrito.
    const isInCart = (id) => {
        return cart.some((purchase) => purchase.item.id === id)
    }

    // Añade al carrito.
    function addItem(item, quantity){
        const newItem = {item, quantity}

        if (isInCart(item.id)){          
            let product = cart.find((element) => element.item.id === item.id);
            product.quantity += quantity;

            let newCart = cart.map((element) => {
                if (product.item.id === element.item.id) return product;
                return element;
            })
            setCart(newCart)
        } else {
            if (quantity > 0){
                setCart((prevState) => [...prevState, newItem])
            }
        }
        item.stock = item.stock - quantity;
    }
    
    // Muestra precio total en cart.jsx
    function totalPrice(){
        return cart.reduce((acc, element) => acc + element.item.price * element.quantity, 0)
    }

    // Muestra cantidad total de items en carrito.
    function cartTotalProducts(){
        return cart.reduce((acc, element) => acc + element.quantity, 0)
    }

    // Remueve producto de carrito.
    function removeItem(id){
        setCart(cart.filter((element) => element.item.id !== id))
    }

    // limpia carrito.
    function clear(){
        setCart([]);
    }


  return (
    <>
        <myContext.Provider value={{ addItem, removeItem, clear, setCart, cart, totalPrice, cartTotalProducts }}>
            {children}
        </myContext.Provider>
    </>
  )
}
