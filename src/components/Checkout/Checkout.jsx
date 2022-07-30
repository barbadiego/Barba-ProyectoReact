import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { myContext } from '../CartContext'
import './Checkout.css'

export default function Checkout() {
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [buyId, setBuyID] = useState("")

    const { cart, totalPrice } = useContext(myContext)

        
     function handleClickBuy(){
        const order = 
        { buyer: { name: name, tel: tel, email: email },
        items: [...cart],
        date: Date(),
        price: totalPrice(),
    }
        console.log(order)
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection, order).then(({id}) => setBuyID(id))
     }

     if (buyId === ""){
      return(
        <>
                <div className="styleFontCheckout">
          <p style={{margin: "0px"}}>Por favor, completar los datos del formulario para crear la orden:</p>
          <div className="prueba3">
            <p className="textCheckout">Nombre y apellido:</p>
            <input className="inputprueba" onChange={(e) => setName(e.target.value)} type={"text"} placeholder={"Ingresar nombre"}></input>
            <p className="textCheckout">Teléfono/Celular:</p>
            <input className="inputprueba" onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingresar teléfono"}></input>
            <p className="textCheckout">Dirección de correo:</p>
            <input className="inputprueba" onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingresar email"}></input>
            <button onClick={handleClickBuy} className="styleButtonCheckout">Confirmar pedido</button>
          </div>

        </div>
        </>
      )
     }
  return (
    <>
        <div className="styleFontCheckout">
          {buyId === "" ? "" : <p style={{margin: "0px", marginTop: "5px"}}>Su ID de pedido es: {buyId}</p>}
        </div>
    </>
  )
}
