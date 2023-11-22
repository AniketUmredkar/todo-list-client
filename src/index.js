import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const environment = process.env.NODE_ENV || 'local';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
