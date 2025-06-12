import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import EjemploLanding from "./components/EjemploLanding/EjemploLanding";
import EjemploMiniTienda from "./components/EjemploMiniTienda/EjemploMiniTienda";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejemplo-landing" element={<EjemploLanding />} />
        <Route path="/ejemplo-tienda" element={<EjemploMiniTienda />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);