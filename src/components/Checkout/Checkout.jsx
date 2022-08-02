import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { myContext } from '../CartContext'
import './Checkout.css'

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
        let nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        let telRegex = /^[0-9]/gm
        let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

        if ((!nameRegex.test(name) || name.length < 3) || (!telRegex.test(tel) || tel.length < 8) || !emailRegex.test(email)){
          Swal.fire({icon: 'warning',
          title: 'Error en formulario',
          text: 'Por favor, verificar si los datos fueron escritos correctamente.',
          confirmButtonText: 'Ok.'})
        } else {
          handleClickBuy()
        }
     }


     if (buyId === ""){
      return (
        <>
          <main className="styleFontCheckout">
            <p style={{margin: "0px"}}>Por favor, completar los datos del formulario para crear la orden:</p>
            <p style={{margintop: "5px"}}>Si no se completan los datos correctamente no se podrá avanzar.</p>
            <div className="styleForm">
              <label className="textCheckout" htmlFor='name'>Nombre y apellido:</label>
              <input className="styleInput" id={"name"} onChange={(e) => setName(e.target.value)} type={"text"} value={name} placeholder={"Solo letras. (Min: 3 letras)"}></input>

              <label className="textCheckout" htmlFor='tel'>Teléfono/Celular:</label>
              <input className="styleInput" id={"tel"} onChange={(e) => setTel(e.target.value)} type={"tel"} value={tel} placeholder={"Solo números. (Mín: 8 números)"}></input>

              <label className="textCheckout" htmlFor='email'>Dirección de correo:</label>
              <input className="styleInput" id={"email"} onChange={(e) => setEmail(e.target.value)} type={"email"} value={email} placeholder={"Ej: example@example.com"}></input>
              <button onClick={validateInputs} className="styleButtonCheckout">Confirmar pedido</button>
            </div>
          </main>
        </>
      )
      }

  return (
        <>
            <main>
              {buyId === "" ? "" : <div className="styleFontCheckout2"><p style={{margin: "0px", marginTop: "5px"}}>Su ID de pedido es:</p> <p>{buyId}</p></div>}
              <Link to='/' className="returnMain">Volver a página principal</Link>
            </main>
        </>
      )
}
