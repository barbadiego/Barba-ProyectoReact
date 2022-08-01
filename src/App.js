//@ts-check
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart';
import CartContext from './components/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryFilter" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </CartContext>
  );
}

export default App;