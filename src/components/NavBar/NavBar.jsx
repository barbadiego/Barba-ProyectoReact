//@ts-check
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className="topNav">
        <Toolbar className="style">
          <Typography className="formatContent" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="styleFontLogo">
              <p>Salón</p>
              <p>de lectura</p>
            </div>
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
            </div>
            <div className="cartStyle">
              <CartWidget cant="0"/>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}