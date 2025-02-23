import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Agregar ".jsx" explícitamente
import "./styles/styles.css"; // Importar estilos correctamente

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
