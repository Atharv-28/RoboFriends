import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card name="test" rname="da" />
      <Card name="best" rname="da" />
      <Card name="rest" rname="da" />
      <Card name="vest" rname="da" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
