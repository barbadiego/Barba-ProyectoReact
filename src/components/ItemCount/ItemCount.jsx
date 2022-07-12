// @ts-check
import React, { useState } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';
import './Button.css'

export default function ItemCount({ stock, onAdd }) {
  const [auxInitial, setAuxInitial] = useState(1);
  const [showButton, setShowButton] = useState(true)


  function add() {
    if (auxInitial < stock) {
      setAuxInitial(auxInitial + 1);
    }
  }

  function subtract() {
    if (auxInitial > 1) {
      setAuxInitial(auxInitial - 1);
    }
  }

  return (
    <div className="cardBookw">
      {showButton ? 
      <>
        <div><p className="quantity">Cantidad: </p> <Button auxInitial={auxInitial} add={add} subtract={subtract} stock={stock} /></div>
        <div onClick={() => setShowButton(!showButton)}><button onClick={() => onAdd(auxInitial)} disabled={stock < 1 ? true : false} className="addCartButton">Agregar al carrito</button></div>
      </>
       : 
       <button className="addCartButton"><Link to={"/cart"}>Terminar compra</Link></button>
      }
    </div>
  );
}