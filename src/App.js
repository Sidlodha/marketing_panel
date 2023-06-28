import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisitingCard1 from './VisitingCard/1.js';
import ProductTemplate from './ProductTemplate/card'
import Home from './home'




function App() {

  return (

      <BrowserRouter>
        <Routes>
        <Route path="/visiting-card" element={<VisitingCard1 />} />
        <Route path="/product-template" element={<ProductTemplate />} />
          <Route path="/" element={<Home />}>
            
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
