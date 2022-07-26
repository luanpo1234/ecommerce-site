//import './App.css';
//import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Products from './components/Products';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';

function App() {
  
  const getImage = (imgPath) => {
    try {
        return require(`${imgPath}`).default;
    } catch (e) {
        console.log("Image not loaded");
    }
}

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Products getImage={getImage} productsTitle="Luffaschwämme"/>} />
          <Route exact path="/luffas" element={<Products getImage={getImage} productsTitle="Luffaschwämme" />} />
          <Route exact path="/luffas/:productLink" element={<ProductDetails getImage={getImage} />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
