import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js';
import {robots} from './robots.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='cards'>
      <Card name={robots[0].username} rname={robots[0].name} em={robots[0].email} />
      <Card name={robots[1].username} rname={robots[1].name} em={robots[1].email} />
      <Card name={robots[2].username} rname={robots[2].name} em={robots[2].email} />
      <Card name={robots[3].username} rname={robots[3].name} em={robots[3].email} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
