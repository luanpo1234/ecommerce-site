//import './App.css';
//import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import HomeArticles from './components/HomeArticles';
import Luffas from './components/Luffas';
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
          <Route path="/" element={<Luffas getImage={getImage} />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/luffas" element={<Luffas getImage={getImage} />} />
          <Route exact path="/luffas/:productLink" element={<ProductDetails getImage={getImage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
