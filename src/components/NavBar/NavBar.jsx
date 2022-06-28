//@ts-check
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

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
                    <a href="#">Inicio</a>
                  </div>
                  <div>
                    <a href="#">Productos</a>
                  </div>
                  <div>
                    <a href="#">Consultas</a>
                  </div>
                  <div>
                    <a href="#">Contacto</a>
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