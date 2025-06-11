import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import EjemploLanding from "./EjemploLanding";
import EjemploTienda from "./EjemploTienda";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejemplo-landing" element={<EjemploLanding />} />
        <Route path="/ejemplo-tienda" element={<EjemploTienda />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);