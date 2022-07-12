import React, { useContext }  from 'react'
import { myContext } from '../CartContext'
import { Link } from 'react-router-dom';
import './Cart.css'

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
    <button onClick={() => clear()} className="buttonCart">Vaciar carrito</button>
    <div className="totalPriceStyleText">Monto total: ${totalPrice()}</div>
    <div className="container-fluid">
      <tbody>
          <tr>
            <th className="columnBookCover">Tapa</th>
            <th className="columnAuthor">Autor</th>
            <th className="columnTitle">Título</th>
            <th className="columnQuantity">Cantidad</th>
            <th className="columnPriceItemsCart">Monto</th>
          </tr>
        </tbody>
    </div>
    <div className="formatCart">
        {cart.map((producto) => (
            <div key={producto.item.id}>
              <tbody>
                <tr>
                  <th className="bookCoverCart"><img src={producto.item.pictureUrl} className="bookCoverCart" alt="" /></th>
                  <th className="authorCart">{producto.item.author}</th>
                  <th className="titleCart">{producto.item.title}</th>
                  <th className="quantityCart">{producto.quantity}</th>
                  <th className="priceItemsCart">${producto.item.price * producto.quantity}</th>
                  <button onClick={()=>{removeItem(producto.item.id)}} className="buttonCart" style={{marginTop: "90%"}}>Quitar producto</button>
                </tr>  
              </tbody>
            </div>
        ))}
    </div>
    </>
  )
}