// index.js is the initial instantiation of the entire app and the app context 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContext from './context/AppContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);

reportWebVitals();