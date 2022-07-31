import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
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

    function validateInputs(){
        if (name.length < 3) return alert("Nombre incorrecto") 
        if (tel.length < 8) return alert("Tel incorrecto")
        if (!email.includes('@')) return alert("Email incorrecto")
      handleClickBuy()
     }


     if (buyId === ""){
      return (
        <>
          <div className="styleFontCheckout">
            <p style={{margin: "0px"}}>Por favor, completar los datos del formulario para crear la orden:</p>
            <p style={{margin: "5px"}}>Si no se completan los datos correctamente no se podrá avanzar.</p>
            <div className="styleForm">
              <p className="textCheckout">Nombre y apellido:</p>
              <input className="styleInput" onChange={(e) => setName(e.target.value)} type={"text"} placeholder={"Ingresar nombre. (Min: 3 letras)"}></input>

              <p className="textCheckout">Teléfono/Celular:</p>
              <input className="styleInput" onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingresar teléfono. (Mín: 8 números)"}></input>

              <p className="textCheckout">Dirección de correo:</p>
              <input className="styleInput" onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingresar email. Ej: example@example.com"}></input>
              <button onClick={validateInputs} className="styleButtonCheckout">Confirmar pedido</button>
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
