import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { myContext } from '../CartContext';
import './Cart.css';

export default function Cart() {
    const { cart, clear, removeItem, totalPrice } = useContext(myContext)

    // Return temprano, si no hay productos agregados a carrito muestra el siguiente mensaje:
    if(cart.length === 0){
      return (
      <>
        <main className="boxCart">
          <div className="container-fluid">
                  <p className="columnBookCover">Portada</p>
                  <p className="columnAuthor">Autor</p>
                  <p className="columnTitle">Título</p>
                  <p className="columnQuantity">Cantidad</p>
                  <p className="columnPriceItemsCart">Monto</p>
                  {/* <div><button onClick={() => clear()} className="buttonClearCart">Vaciar carrito</button></div> */}
          </div>
          <div className="styleCartWithoutItems">
            <div>No hay libros agregados en el carrito.</div>
            <Link to={"/"}>Visitar Main page para ver los productos.</Link>
          </div>
        </main>
      </>)
    }
    // Desglose de carrito
  return (
    <>
    {/* <Link to={"/checkout"}><button className="buttonForm">Llenar formulario para completar pedido.</button></Link> */}
    {/* <button onClick={() => clear()} className="buttonCart">Vaciar carrito</button> */}
    {/* <div className="totalPriceStyleText">Monto total: ${totalPrice()}</div> */}
      <main className="boxCart">
          <div className="container-fluid">
                  <p className="columnBookCover">Portada</p>
                  <p className="columnAuthor">Autor</p>
                  <p className="columnTitle">Título</p>
                  <p className="columnQuantity">Cantidad</p>
                  <p className="columnPriceItemsCart">Monto</p>
                  {/* <div><button onClick={() => clear()} className="buttonClearCart">Vaciar carrito</button></div> */}
          </div>
          <div >
              {cart.map((producto) => (
                  <div key={producto.item.id} className="formatCart">
                    <img src={producto.item.pictureUrl} className="bookCoverCart" alt=""/>
                    <p className="authorCart">{producto.item.author}</p>
                    <p className="titleCart">{producto.item.title}</p>
                    <p className="quantityCart">{producto.quantity}</p>
                    <p className="priceItemsCart">${producto.item.price * producto.quantity}</p>
                    {/* <button onClick={()=>{removeItem(producto.item.id)}} className="buttonCart"><FaTrash /></button> */}
                    <FaTrash onClick={()=>{removeItem(producto.item.id)}} className="buttonCart"/>
                  </div>
              ))}
              <div className="opruebaoo">
                <div onClick={() => clear()} className="buttonClearCart">Vaciar carrito</div>
                <div className="totalPriceStyleText">Monto total: ${totalPrice()}</div>
              </div>
              
          </div>
      </main>
      <Link to={"/checkout"} className="buttonCloseOrder">Finalizar pedido</Link>
    </>
  )
}