import React from 'react';
import  ReactDOM  from 'react-dom';
import "./vitals/cssVitals/CssVitals.css";//NÃO APAGAR!
import App from './App';
import { BrowserRouter } from 'react-router-dom';


 ReactDOM.render(  
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);

