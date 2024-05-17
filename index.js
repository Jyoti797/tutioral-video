import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { CookiesProvider } from 'react-cookie';
import { ContextDemo } from './mui/context-demo/context-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>


      <ContextDemo/>


    </CookiesProvider>
  </React.StrictMode>
);


reportWebVitals();
