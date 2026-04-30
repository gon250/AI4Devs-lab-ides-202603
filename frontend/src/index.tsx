import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import MainApp from './App';
import collectWebVitals from './reportWebVitals';

// Punto de entrada de la aplicación
const rootNode = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

rootNode.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// Para medir rendimiento, pasa console.log u otro handler: collectWebVitals(console.log)
collectWebVitals();
