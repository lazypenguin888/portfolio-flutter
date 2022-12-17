import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);