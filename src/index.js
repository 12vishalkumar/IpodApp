import React from 'react';

// Importing necessary modules from react and react-dom
import { StrictMode } from "react";

import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Importing main App component from App.js
import App from "./App";



// Getting root element from HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped in StrictMode component on the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





