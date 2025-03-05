import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import CSS files in the correct order (global first, then components, then pages)
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);