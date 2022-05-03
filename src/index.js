import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Smarthomes from './Smart-homes.png'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img src={Smarthomes} alt='Smart Home' />
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();