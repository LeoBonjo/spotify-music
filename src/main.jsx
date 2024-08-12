// importing the StrictMode component from React
import { StrictMode } from 'react';
// importing the createRoot function from react-dom/client
import { createRoot } from 'react-dom/client';
// importing BrowserRouter from react-router-dom
import { BrowserRouter } from "react-router-dom";
// importing the main App component
import App from './App.jsx';
// importing the main CSS file
import './index.css';

// creating a root for App and rendering it to the DOM
// getting the element with id 'root' from HTML
createRoot(document.getElementById('root')).render(
  // wrapping App in StrictMode for highlighting potential issues
  <StrictMode>
    {/* wrapping App in BrowserRouter to enable routing */}
    <BrowserRouter>
      {/* rendering the App component */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
