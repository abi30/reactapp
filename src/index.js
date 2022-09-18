import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import ReactDOM from 'react-dom/client';
import './index.css';





// document.getElementById('root').append(JSON.stringify(page));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  
);


