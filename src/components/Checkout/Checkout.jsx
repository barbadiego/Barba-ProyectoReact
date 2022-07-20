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
        <input className="inputprueba" onChange={(e) => setName(e.target.value)} type={"text"} placeholder={"Ingresar nombre"}></input>
        <input className="inputprueba" onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingresar teléfono"}></input>
        <input className="inputprueba" onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingresar email"}></input>
        <button onClick={handleClickBuy}>Confirmar pedido</button>
        <p>ID de compra: {buyId}</p>
    </>
  )
}
