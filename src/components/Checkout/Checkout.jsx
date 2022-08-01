import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { myContext } from '../CartContext'
import './Checkout.css'
import swal from 'sweetalert';

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
        let nameReject = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        let telReject = /^[0-9]/gm
        let emailReject = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

        if (!nameReject.test(name) || !telReject.test(tel) || !emailReject.test(email)){
          swal("Error en formulario", "Por favor, verificar si los datos fueron escritos correctamente.")
        } else {
          handleClickBuy()
        }
        // if (name.length < 3) return swal("El campo nombre se encuentra vacío o posee pocos caracteres. Por favor, completar.") 
        // if (tel.length < 8) return swal("El campo teléfono se encuentra vacío o menos de 8 dígitos. Por favor, completar.")
        // if (!email.includes('@')) return swal("El mail indicado no posee '@'. Por favor, agregar el mail en formato correcto.")
     }


     if (buyId === ""){
      return (
        <>
          <div className="styleFontCheckout">
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
