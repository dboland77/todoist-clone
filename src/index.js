import React from 'react';
import {render, createRoot} from 'react-dom/client';
import {App} from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

