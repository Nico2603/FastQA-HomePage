import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Vite ya reconoce JSX sin necesidad de la extensión
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
