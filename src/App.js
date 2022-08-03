import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carausel from './Carausel';
import { useState, createContext } from 'react';
import Cart from './Cart';
import { Routes, Route, Router } from 'react-router-dom'; 


import Footer from './Footer';

export const cartContext = createContext();

function App() {
  const [cart, changeCart] = useState(0);
  const [prod_array, updateArray] = useState([]);
  return (
    <div className="App">
      <cartContext.Provider value={{ cart, changeCart, prod_array, updateArray }} >
        <Header />
        <Routes>
          <Route path='/' element={<Carausel />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </cartContext.Provider>

    </div>
  );
}

export default App;
