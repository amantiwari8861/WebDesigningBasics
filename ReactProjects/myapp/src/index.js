import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Para1 from './App'
import NavBar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Greet from './component/Greet';
import TestJSX from './component/TestJSX';
import 'bootstrap/dist/js/bootstrap.bundle'
//npm i bootstrap@5.0.2
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar/>
    <TestJSX/>
  </>
);

