import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

// Code-splitting
const App = lazy(() => import("./App"));
const EjemploLanding = lazy(() => import("./components/EjemploLanding/EjemploLanding"));
const EjemploMiniTienda = lazy(() => import("./components/EjemploMiniTienda/EjemploMiniTienda"));
const EjemploTiendaFull = lazy(() => import("./components/EjemploTiendaFull/EjemploTiendaFull"));

// Scroll al inicio en cada navegación
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div style={{padding: 32}}>Cargando…</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/ejemplo-landing" element={<EjemploLanding />} />
            <Route path="/ejemplo-corporativo" element={<EjemploMiniTienda />} />
            <Route path="/ejemplo-tienda-online" element={<EjemploTiendaFull />} />
            {/* 404 opcional */}
            <Route path="*" element={<div style={{padding: 32}}>Página no encontrada</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
