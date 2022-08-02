// @ts-check
import React from 'react'
import './Button.css'

export default function Button( { auxInitial, add, subtract, stock }) {
  return (
    <div className="styleButtonsQuantity">
        <button onClick={() => subtract()} className="quantityButtom">-</button>

        <p className="quantitySelected" style={{margin: "0px 10px"}}>
          { stock < 1 ? 0 : auxInitial }
        </p>

        <button onClick={() => add()} className="quantityButtom">+</button>
    </div>
  )
}
