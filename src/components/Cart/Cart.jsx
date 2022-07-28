import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../CartContext';
import Checkout from '../Checkout/Checkout';
import './Cart.css';

export default function Cart() {
    const { cart, clear, removeItem, totalPrice } = useContext(myContext)

    // Return temprano, si no hay productos agregados a carrito muestra el siguiente mensaje:
    if(cart.length === 0){
      return (
      <>
        <div>No hay productos en el carrito.</div>
        <Link to={"/"}>Ir a Main page para agregar productos</Link>
      </>)
    }
    // Desglose de carrito
  return (
    <>
    {/* <Link to={"/checkout"}><button className="buttonForm">Llenar formulario para completar pedido.</button></Link> */}
    {/* <button onClick={() => clear()} className="buttonCart">Vaciar carrito</button> */}
    {/* <div className="totalPriceStyleText">Monto total: ${totalPrice()}</div> */}
    <div className="boxCart">
        <div className="container-fluid">
                <p className="columnBookCover">Portada</p>
                <p className="columnAuthor">Autor</p>
                <p className="columnTitle">Título</p>
                <p className="columnQuantity">Cantidad</p>
                <p className="columnPriceItemsCart">Monto</p>
        </div>
        <div >
            {cart.map((producto) => (
                <div key={producto.item.id} className="formatCart">
                  <p className="bookCoverCart"><img src={producto.item.pictureUrl} className="bookCoverCart" alt="" /></p>
                  <p className="authorCart">{producto.item.author}</p>
                  <p className="titleCart">{producto.item.title}</p>
                  <p className="quantityCart">{producto.quantity}</p>
                  <p className="priceItemsCart">${producto.item.price * producto.quantity}</p>
                  <button onClick={()=>{removeItem(producto.item.id)}} className="buttonCart">X</button>
                </div>
            ))}
        </div>
    </div>
    < Checkout />
    </>
  )
}