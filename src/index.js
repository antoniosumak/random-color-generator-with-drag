import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ColorsProvider } from './context/ColorsContext';

ReactDOM.render(
  <React.StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
