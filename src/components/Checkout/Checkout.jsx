import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { myContext } from '../CartContext'

export default function Checkout() {
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [buyId, setBuyID] = useState("")

    const { cart, totPrice } = useContext(myContext)

    console.log(totPrice)
        
     function handleClickBuy(){
        const order = 
        { buyer: { name: name, tel: tel, email: email },
        items: [...cart],
        date: Date(),
        // price: totPrice,
    }
        
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection, order).then(({id}) => setBuyID(id))
     }


  return (
    <>
        <input onChange={(e) => setName(e.target.value)} type={"text"} placeholder={"Ingresar nombre"}></input>
        <input onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingresar teléfono"}></input>
        <input onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingresar email"}></input>
        <button onClick={handleClickBuy}>Completar</button>
        <p>ID de compra: {buyId}</p>
        
    </>
  )
}
