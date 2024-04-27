import React from "react";
import Home from './Home';
import HelloWorld from './About';
import Contact from './Contact';
import Car from "./Car"
import Search from "./Search"
import Counter from "./Setcount";
import { Routes, Route } from 'react-router-dom';

export default function Routing() {
    return (
      <Routes>
        <Route path='/about' element={<HelloWorld />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signIn' element={<Car />} />
        <Route path='/search' element={<Search />} />
        <Route path='/setcount' element={<Counter />} />
      </Routes>
    )
  }
  
  