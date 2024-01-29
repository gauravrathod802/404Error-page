import React from 'react';
import {Routes, Route } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Products from './Components/Products'; 
import Contact from './Components/Contacts';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
};

export default App;
