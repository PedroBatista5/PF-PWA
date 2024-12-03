import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Para aplicar estilos globais.
import Home from "./pages/mainpage"; // Página inicial.

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
