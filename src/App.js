import React from 'react';
import Routing from "./Routing";
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Home />
    
      <Routing />
    </Router>
    
  )
}

  