//@ts-check
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../CartContext';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function ButtonAppBar() {
  const { cart } = useContext(myContext)

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className="topNav">
        <Toolbar className="style">
          <Typography className="formatContent" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="styleFontLogo">
              <img className="styleLogo" src="https://i.ibb.co/Sfb4wPm/bookLogo.png" alt="Logo de la web"/>
              <p className="pruebilla">Salon de lectura</p>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="prueba2">
        <div className="linkPages">
          <div>
            <Link to={"/"}>Inicio</Link>
          </div>
          <div>
            <Link to={"/"}>Productos</Link>
          </div>
          <div>
            <Link to={"/"}>Consultas</Link>
          </div>
          <div>
            <Link to={"/"}>Contacto</Link>
          </div>
          <div className="cartStyle">
            {/* If ternario, si no hay productos agregados no muestra el logo de carrito */}
            <Link to={`/cart`}><CartWidget /></Link>
          </div>
        </div>
      </div>
    </Box>
  );
}