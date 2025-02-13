import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18 syntax
import './index.css'; // Import Tailwind correctly
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create the root element (React 18 syntax)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
