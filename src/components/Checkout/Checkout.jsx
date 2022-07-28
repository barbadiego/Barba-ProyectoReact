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


  return (
    <>
        <div className="styleFontCheckout">
          <p style={{margin: "0px"}}>Por favor, completar los datos del formulario para crear la orden:</p>
          <div className="prueba3">
            <input className="inputprueba" onChange={(e) => setName(e.target.value)} type={"text"} placeholder={"Ingresar nombre"}></input>
            <input className="inputprueba" onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingresar teléfono"}></input>
            <input className="inputprueba" onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingresar email"}></input>
            <button onClick={handleClickBuy} className="styleButtonCheckout">Confirmar pedido</button>
          </div>
          {buyId === "" ? "" : <p style={{margin: "0px", marginTop: "5px"}}>Su ID de pedido es: {buyId}</p>}
        </div>
    </>
  )
}
