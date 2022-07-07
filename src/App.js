//@ts-check
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from './components/CartContext';

function App() {

  return (
    <CartContext>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryFilter" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

export default App;