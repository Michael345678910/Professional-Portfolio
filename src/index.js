// Main entry point for React app (Create React App boilerplate)
import React from 'react';
import ReactDOM from 'react-dom/client';

// Global styles applied to <body> and <code>
import './index.css';

// Root application component
import App from './App';

// Optional: performance metrics helper
import reportWebVitals from './reportWebVitals';

// Create root React container (React 18+ API)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render application wrapped in React.StrictMode (dev-only extra checks)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance, provide a function to log results:
// Example: reportWebVitals(console.log)
// Or send results to an analytics endpoint.
reportWebVitals();