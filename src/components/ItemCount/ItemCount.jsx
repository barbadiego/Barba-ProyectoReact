// @ts-check
import React, { useState } from "react";
import Button from "./Button";
import './Button.css'

export default function ItemCount({ stock, onAdd }) {
  const [auxInitial, setAuxInitial] = useState(1);

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
      <p className="quantity">Cantidad:</p>
      <Button auxInitial={auxInitial} add={add} subtract={subtract} stock={stock} />
      <button onClick={() => onAdd(auxInitial)} disabled={stock < 1 ? true : false} className="addCartButton">Agregar al carrito</button>
    </div>
  );
}