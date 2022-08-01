import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { myContext } from '../CartContext'
import './Checkout.css'
import Swal from 'sweetalert2'

export default function Checkout() {
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [buyId, setBuyID] = useState("")

    
    const { cart, totalPrice, clear } = useContext(myContext)

        
    function handleClickBuy(){
        const order = 
        { buyer: { name: name, tel: tel, email: email },
        items: [...cart],
        date: Date(),
        price: totalPrice(),
    }
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection, order).then(({id}) => setBuyID(id))
        clear();
     }

    function validateInputs(){
        let nameReject = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        let telReject = /^[0-9]/gm
        let emailReject = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        if (!nameReject.test(name) || !telReject.test(tel) || !emailReject.test(email)){
          Swal.fire({icon: 'warning',
          title: 'Error en formulario',
          text: 'Por favor, verificar si los datos fueron escritos correctamente.',
          confirmButtonText: 'Ok'})
        } else {
          handleClickBuy()
        }
     }


     if (buyId === ""){
      return (
        <>
          <main className="styleFontCheckout">
            <p style={{margin: "0px"}}>Por favor, completar los datos del formulario para crear la orden:</p>
            <p style={{margin: "5px"}}>Si no se completan los datos correctamente no se podrá avanzar.</p>
            <div className="styleForm">
              <p className="textCheckout">Nombre y apellido:</p>
              <input className="styleInput" onChange={(e) => setName(e.target.value)} type={"text"} value={name} placeholder={"Solo letras. (Min: 3 letras)"}></input>

              <p className="textCheckout">Teléfono/Celular:</p>
              <input className="styleInput" onChange={(e) => setTel(e.target.value)} type={"tel"} value={tel} placeholder={"Solo números. (Mín: 8 números)"}></input>

              <p className="textCheckout">Dirección de correo:</p>
              <input className="styleInput" onChange={(e) => setEmail(e.target.value)} type={"email"} value={email} placeholder={"Ej: example@example.com"}></input>
              <button onClick={validateInputs} className="styleButtonCheckout">Confirmar pedido</button>
            </div>
          </main>
        </>
      )
      }

  return (
        <>
            <main className="styleFontCheckout">
              {buyId === "" ? "" : <p style={{margin: "0px", marginTop: "5px"}}>Su ID de pedido es: {buyId}</p>}
            </main>
        </>
      )
}
