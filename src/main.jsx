import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Asegurar que la extensión .jsx esté explícita
import "./styles/styles.css"; // Asegurar que los estilos se importen correctamente

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);