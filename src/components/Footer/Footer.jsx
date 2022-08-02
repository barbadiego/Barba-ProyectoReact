//@ts-check
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css';

export default function Footer() {
  return (
    <>
        <footer className="bottomBar">
            <div className="bottomText">
                <p>Web realizada por Diego Barba.</p>
                <p>CoderHouse, Proyecto React JS, 2022</p>
                <div className="styleIcons">
                  <a href="https://www.linkedin.com/in/diego-gonzalo-barba-351231226/" target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="iconRs"/></a>
                  
                  <a href="https://github.com/barbadiego" target="_blank" rel="noreferrer">
                  <AiFillGithub className="iconRs"/></a>
                </div>
            </div>
        </footer>
    </>
  )
}
