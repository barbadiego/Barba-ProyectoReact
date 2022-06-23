//@ts-check
// import React, { useState } from "react";
// import Button from "./Button";

// export default function ItemCount({ stock, initial, onAdd }) {
//   const [auxInitial, setAuxInitial] = useState(initial);

//   function add() {
//     if (auxInitial < stock) {
//       setAuxInitial(auxInitial + 1);
//     }
//   }

//   function subtract() {
//     if (auxInitial > initial) {
//       setAuxInitial(auxInitial - 1);
//     }
//   }

//   return (
//     <div className="cardBook">
//       <p className="titleBook">El Resplandor</p>
//       <p className="author">Stephen King</p>
//       <p className="stockBook">Stock: {stock} </p>
//       <p className="quantity">Cantidad:</p>
//       <Button auxInitial={auxInitial} add={add} subtract={subtract} stock={stock} />
//       <button onClick={() => onAdd(auxInitial)} disabled={stock < 1 ? true : false} className="addCartButton">Agregar al carrito</button>
//     </div>
//   );
// }