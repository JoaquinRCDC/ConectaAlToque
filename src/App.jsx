const logobanner = new URL('./assets/logobanner.png', import.meta.url).href;
const EjemploLanding = new URL('./assets/EjemploLanding.png', import.meta.url).href;
const ejemplominitienda = new URL('./assets/ejemplominitienda.png', import.meta.url).href;
const EjemploTiendaFull = new URL('./assets/EjemploTiendaFull.png', import.meta.url).href;
const PortalAEPreview = new URL('./assets/portal-ae-preview.jpg', import.meta.url).href;
const urlPortalAE = "https://ayelegaleinmobiliario.cl"; 
const PRICES = { landing: 120000, corporativo: 200000, tienda: 300000 };
const USE_CHARM_PRICING = true;

const fmtCLP = (n) => n.toLocaleString('es-CL');
const baseOrCharm = (n) => (USE_CHARM_PRICING ? n - 100 : n); 
const desdeStr = (n) => `desde $${fmtCLP(baseOrCharm(n))}`;

const RENEW = { landing: 60000, corporativo: 70000, tienda: 90000 };




import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
   useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);


  return (

    
    
    <div className="font-sans text-gray-800 antialiased" data-aos="fade-up">
      {/* HERO – versión optimizada para conversión */}
    <header className="bg-gradient-to-br from-blue-700 via-indigo-700 to-sky-600 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Lado izquierdo: texto */}
        <div className="text-center md:text-left">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
      <span className="inline-block w-2 h-2 rounded-full bg-emerald-300"></span>
    {`Página Landing ${desdeStr(PRICES.landing)} · Entrega en 2–3 días`}
    </div>


          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Tu página web lista en días, no semanas.
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Diseñamos sitios modernos, rápidos y listos para vender. Tú te enfocas en tu negocio, nosotros en tu web.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-start justify-center">
            <a
              href="https://wa.me/56929240183?text=Hola!%20Estoy%20interesado%20en%20una%20página%20web%20con%20ConectAlToque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaWhatsapp className="text-2xl" />
              Cotizar por WhatsApp
            </a>
            <a
              href="#planes"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/60 hover:bg-white/10 font-semibold transition"
            >
              Ver planes
            </a>
            <a href="#portafolio" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/60 hover:bg-white/10 font-semibold transition">Ver Portafolio</a>

          </div>

          {/* Tiras de confianza */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-sm opacity-95">
            {[
              { t: "Entrega 2–3 días" },
              { t: "Soporte en Chile" },
              { t: "Sitios responsivos" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg px-3 py-2 text-center">
                {item.t}
              </div>
            ))}
          </div>
        </div>

        {/* Lado derecho: logo/visual */}
        <div className="flex items-center justify-center">
          <img
            src={logobanner}
            alt="Logo Conecta al Toque"
            className="w-full max-w-[360px] drop-shadow-2xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </header>


      {/* Problema / Solución – versión persuasiva */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">¿Por qué tu negocio necesita una web?</h2>
          <p className="text-gray-600 mt-2">Lo que suele pasar vs. cómo lo resolvemos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problemas */}
          <div className="bg-gray-50 p-7 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Lo que pasa</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "No te encuentran en Google y pierdes credibilidad.",
                "Dependes 100% de redes sociales para vender.",
                "No hay un lugar claro con toda tu información.",
                "Los clientes no saben cómo contactarte rápido.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-500 mt-1">✖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solución */}
          <div className="bg-blue-50 p-7 rounded-2xl border border-blue-200">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Cómo lo resolvemos</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Sitio optimizado y responsive con SEO básico.",
                "Botón directo a WhatsApp / formulario de contacto.",
                "Contenido enfocado en vender (servicios, ventajas, CTA).",
                "Implementaciones a medida: WebPay y catálogo si lo necesitas.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-600 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* Mini trust bar */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
              {["Rápido", "Seguro", "Escalable"].map((k, i) => (
                <div key={i} className="bg-white/80 rounded-lg px-3 py-2 text-center border border-blue-100">{k}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Lo que ofrecemos – curado */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-blue-600 font-semibold mb-2 block">Lo que ofrecemos</span>
        <h2 className="text-3xl font-bold mb-10">Todo lo que tu web necesita</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: "🎨", t: "Diseño a tu estilo", d: "Moderno, claro y adaptado a tu marca." },
            { icon: "⚡", t: "Rápida y segura", d: "Optimizada en rendimiento y con SSL." },
            { icon: "📱", t: "WhatsApp y contacto", d: "Atiende consultas sin fricción." },
            { icon: "🔍", t: "SEO básico", d: "Configurada para aparecer en búsquedas." },
            { icon: "🛒", t: "E-commerce opcional", d: "Carrito + WebPay cuando lo necesites." },
            { icon: "🔧", t: "Mantención", d: "Actualizaciones y soporte técnico." },
          ].map((it, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border hover:shadow-lg transition">
              <span className="text-3xl">{it.icon}</span>
              <h3 className="mt-3 font-bold">{it.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portafolio – Card compacta */}
    <section id="portafolio" className="py-16 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Portafolio</h2>
          <p className="text-gray-600 mt-2">Proyectos reales en producción.</p>
        </div>

        <article className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-[0_12px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,.12)] transition">
          {/* Preview */}
          <div className="relative aspect-[16/9]">
            <img
              src={PortalAEPreview}              // ← tu screenshot
              alt="Vista previa del Portal Inmobiliario A&E"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: 'center 38%' }}  // ajusta el foco si quieres
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Contenido */}
          <div className="p-6 md:p-8">
            <span className="inline-flex px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
              Proyecto destacado
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold">Portal Inmobiliario A&amp;E</h3>
            <p className="mt-2 text-gray-600">
              Plataforma para publicar propiedades con galería de fotos, filtros y contacto directo.
              Rápida, clara y fácil de administrar.
            </p>

            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {[
                "Búsqueda y filtros por tipo, precio y ubicación",
                "Ficha de propiedad con galería y detalles",
                "Formulario / WhatsApp de contacto",
                "Panel básico para cargar/editar propiedades",
                "Diseño responsive con foco en conversión"
              ].map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-600 mt-0.5">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={urlPortalAE}                             // ← URL pública del portal
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 transition"
              >
                Ver proyecto →
              </a>
              <a
                href="https://wa.me/56929240183?text=Hola!%20Quiero%20un%20portal%20inmobiliario%20como%20el%20de%20A%26E."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-5 py-3 transition"
              >
                Quiero uno similar
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {["Portal inmobiliario", "Catálogo", "WhatsApp Lead", "Responsive"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>




      {/* Ejemplos de páginas - Cards actualizadas */}
    <section className="py-16 px-4 bg-gray-50" data-aos="fade-up" id="servicios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros modelos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Revisa nuestros modelos y elige el que más te guste.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Ejemplo Landing */}
          <a href="/ejemplo-landing" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img src={EjemploLanding} alt="Preview Landing" className="w-full h-full object-cover" loading="lazy" decoding="async"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Landing Page</h3>
                <p className="text-gray-600 mb-4">Presentación profesional con llamados a la acción claros.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 hover:text-blue-800 font-medium">Ver ejemplo →</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Más popular</span>
                </div>
              </div>
            </div>
          </a>

          {/* Ejemplo Corporativo */}
          <a href="/ejemplo-corporativo" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img src={ejemplominitienda} alt="Preview Corporativo" className="w-full h-full object-cover" loading="lazy" decoding="async"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Sitio Corporativo</h3>
                <p className="text-gray-600 mb-4">Hasta 5 secciones, formulario avanzado e integración con redes.</p>
                <span className="text-indigo-600 hover:text-indigo-800 font-medium">Ver ejemplo →</span>
              </div>
            </div>
          </a>

          {/* Ejemplo Tienda Online */}
          <a href="/ejemplo-tienda-online" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img src={EjemploTiendaFull} alt="Preview Tienda Online" className="w-full h-full object-cover"loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Tienda Online</h3>
                <p className="text-gray-600 mb-4">Catálogo dinámico, carrito + WebPay y gestión básica de inventario.</p>
                <span className="text-purple-600 hover:text-purple-800 font-medium">Ver ejemplo →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>


      
      {/* Planes para emprendedores – Año 1 incluido */}
    <section id="planes" className="py-20 px-4 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Planes para emprendedores
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Empieza simple y escala cuando tu negocio lo necesite.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Landing */}
          <div className="group relative flex flex-col rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.06)] ring-1 ring-gray-200 hover:shadow-[0_16px_40px_rgba(0,0,0,.10)] transition-all duration-300">
            {/* Header */}
            <div className="rounded-t-2xl p-8 text-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
              <h3 className="text-xl font-bold text-blue-900">Landing Page</h3>
              <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-blue-700 text-4xl md:text-5xl font-extrabold">
                {desdeStr(PRICES.landing)}
              </span>
            </div>


              {/* Año 1 incluido */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-200">
                  ✅ Primer año de mantención incluido
                </span>
              </div>
              <div className="inline-flex mt-3 px-3 py-1 rounded-full bg-white/70 text-gray-800 text-sm font-medium shadow-sm">
                Renovación desde <span className="ml-1 font-bold">$60.000/año</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex-1">
              <ul className="space-y-3 text-gray-700">
                {[
                  "1 página con secciones (inicio, servicios, contacto)",
                  "Diseño responsive y personalizado",
                  "Botón de contacto (WhatsApp o email)",
                  "SEO básico",
                  "⚡ Entrega rápida (2–3 días)"
                ].map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-blue-500">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-8 pt-0">
              <a
      href={`https://wa.me/56929240183?text=${encodeURIComponent("Hola! Quiero cotizar la Landing Page de Conecta al Toque.")}`}
      target="_blank" rel="noopener noreferrer"
      className="block w-full text-center rounded-xl bg-blue-600 py-3 font-bold text-white shadow hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all"
    >
      Cotizar Landing
    </a>

            </div>
          </div>

          {/* Corporativo (Recomendado) */}
          <div className="group relative flex flex-col rounded-2xl bg-white shadow-[0_12px_36px_rgba(76,72,255,.15)] ring-2 ring-indigo-400 hover:shadow-[0_18px_48px_rgba(76,72,255,.22)] transition-all duration-300 md:-translate-y-1.5">
            <div className="absolute -top-3 right-6 rounded-full bg-indigo-600 text-white text-[11px] font-extrabold px-3 py-1 tracking-wide shadow">
              RECOMENDADO
            </div>

            {/* Header */}
            <div className="rounded-t-2xl p-8 text-center bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200">
              <h3 className="text-xl font-bold text-indigo-900">Sitio Corporativo</h3>
              <div className="mt-2 flex items-baseline justify-center gap-1">
      <span className="text-indigo-700 text-4xl md:text-5xl font-extrabold">
        {desdeStr(PRICES.corporativo)}
      </span>
    </div>

              {/* Año 1 incluido */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-200">
                  ✅ Primer año de mantención incluido
                </span>
              </div>
              <div className="inline-flex mt-3 px-3 py-1 rounded-full bg-white/70 text-gray-800 text-sm font-medium shadow-sm">
                Renovación desde <span className="ml-1 font-bold">$70.000/año</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex-1">
              <ul className="space-y-3 text-gray-700">
                {[
                  "4–5 secciones (inicio, servicios, quiénes somos, contacto, etc.)",
                  "Formulario de contacto avanzado",
                  "Integración con redes sociales",
                  "Animaciones y SEO básico",
                  "Optimización de velocidad"
                ].map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-indigo-500">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-8 pt-0">
              <a
      href={`https://wa.me/56929240183?text=${encodeURIComponent("Hola! Quiero cotizar un Sitio Corporativo con Conecta al Toque.")}`}
      target="_blank" rel="noopener noreferrer"
      className="block w-full text-center rounded-xl bg-indigo-600 py-3 font-bold text-white shadow hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0 transition-all"
    >
      Cotizar Corporativo
    </a>

            </div>
          </div>

          {/* Tienda */}
          <div className="group relative flex flex-col rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.06)] ring-1 ring-gray-200 hover:shadow-[0_16px_40px_rgba(0,0,0,.10)] transition-all duration-300">
            {/* Header */}
            <div className="rounded-t-2xl p-8 text-center bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
              <h3 className="text-xl font-bold text-purple-900">Tienda Online</h3>
              <div className="mt-2 flex items-baseline justify-center gap-1">
      <span className="text-purple-700 text-4xl md:text-5xl font-extrabold">
        {desdeStr(PRICES.tienda)}
      </span>
    </div>


              {/* Año 1 incluido */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-200">
                  ✅ Primer año de mantención incluido
                </span>
              </div>
              <div className="inline-flex mt-3 px-3 py-1 rounded-full bg-white/70 text-gray-800 text-sm font-medium shadow-sm">
                Renovación desde <span className="ml-1 font-bold">$90.000/año</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 flex-1">
              <ul className="space-y-3 text-gray-700">
                {[
                  "Catálogo de productos dinámico",
                  "Contacto por producto (WhatsApp o formulario)",
                  "Opción carrito + WebPay",
                  "Gestión de inventario básica"
                ].map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-purple-500">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-8 pt-0">
              <a
                href={`https://wa.me/56929240183?text=${encodeURIComponent("Hola! Estoy interesado en la Tienda Online de Conecta al Toque.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-purple-600 py-3 font-bold text-white shadow hover:bg-purple-700 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Cotizar Tienda
              </a>
            </div>
          </div>
        </div>

        {/* Nota */}
        <p className="text-xs text-gray-500 mt-6 text-center">
      *Precios <b>desde</b> según alcance y complejidad. Incluyen el <b>primer año</b> del plan de
      mantención <b>Básico</b> (soporte y actualizaciones menores). El segundo año en adelante
      se renueva desde $60.000/$70.000/$90.000 según el plan. Funcionalidades nuevas se cotizan aparte.
    </p>

      </div>
    </section>


{/* Comparativa de planes (actualizada) */}
<section id="comparacion" className="py-16 px-4 bg-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold">Comparativa de planes</h2>
      <p className="text-gray-600">Precios base “desde”, con el 1er año de mantención incluido.</p>
    </div>

    <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-gray-50 text-gray-900">
            <th className="py-4 px-4 text-left font-semibold">Funcionalidad</th>

            {/* Landing */}
            <th className="py-4 px-4 text-center">
              <div className="font-bold">Landing Page</div>
              <div className="text-blue-700 font-extrabold text-lg">
                {desdeStr(PRICES.landing)}
              </div>
              <div className="text-xs text-gray-500">
                Renovación: ${fmtCLP(RENEW.landing)}/año
              </div>
            </th>

            {/* Corporativo */}
            <th className="py-4 px-4 text-center">
              <div className="font-bold">Sitio Corporativo</div>
              <div className="text-indigo-700 font-extrabold text-lg">
                {desdeStr(PRICES.corporativo)}
              </div>
              <div className="text-xs text-gray-500">
                Renovación: ${fmtCLP(RENEW.corporativo)}/año
              </div>
            </th>

            {/* Tienda */}
            <th className="py-4 px-4 text-center">
              <div className="font-bold">Tienda Online</div>
              <div className="text-purple-700 font-extrabold text-lg">
                {desdeStr(PRICES.tienda)}
              </div>
              <div className="text-xs text-gray-500">
                Renovación: ${fmtCLP(RENEW.tienda)}/año
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {[
            ["Diseño personalizado", true, true, true],
            ["Responsive (móvil/tablet)", true, true, true],
            ["Botón de contacto (WhatsApp o email)", true, true, true],
            ["Formulario de contacto avanzado", false, true, true],
            ["Catálogo de productos", false, true, true],
            ["Carrito + WebPay", false, false, "Opcional"],
            ["Gestión de inventario básica", false, false, true],
            ["SEO básico", true, true, true],
            ["Primer año de mantención incluido", true, true, true],
          ].map(([label, l, c, t], i) => (
            <tr key={i} className={i % 2 ? "bg-white" : "bg-gray-50"}>
              <td className="py-3 px-4 text-gray-700">{label}</td>
              {[l, c, t].map((val, j) => (
                <td key={j} className="py-3 px-4 text-center">
                  {val === true ? (
                    <span className="text-emerald-600 text-lg">✔</span>
                  ) : val === false ? (
                    <span className="text-gray-300">—</span>
                  ) : (
                    <span className="text-xs text-gray-600">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-xs text-gray-500 mt-4 text-center">
      *Los precios son <b>desde</b> y pueden variar según el alcance. El primer año incluye mantención
      <b> Básica</b>; desde el segundo año se renueva según el plan. Integraciones y funciones extra se cotizan aparte.
    </p>
  </div>
</section>





          {/* Hosting + Mantenimiento – renovaciones desde el segundo año */}
    <section className="py-16 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-semibold mb-2 block">Soporte continuo</span>
          <h2 className="text-3xl font-bold mb-2">Planes de Hosting + Mantenimiento</h2>
          <p className="text-gray-700 font-medium">
            ✅ El <b>primer año del plan Básico ya está incluido</b> al contratar tu sitio. <br className="hidden sm:block" />
            Estos planes aplican para <b>renovación desde el segundo año</b> o para quienes deseen subir a Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: 'Básico',
              price: '$60.000 / año',
              color: 'emerald',
              badge: 'Incluido en el 1er año',
              features: [
                'Monitoreo básico de uptime',
                'Actualizaciones menores mensuales',
                'Respaldo mensual',
                'Corrección de errores críticos',
                'Soporte por email/WhatsApp (horario laboral)'
              ]
            },
            {
              name: 'Pro',
              price: '$90.000 / año',
              color: 'indigo',
              popular: true,
              badge: 'Recomendado para tiendas',
              features: [
                'Todo lo del Básico',
                'Optimización de rendimiento e imágenes',
                'Backups semanales + restauración',
                'Reporte de estado mensual (cambios y uptime)',
                'Prioridad en soporte'
              ]
            }
          ].map((plan, i) => {
            const link = `https://wa.me/56929240183?text=${encodeURIComponent(
              `Hola! Quiero el plan de Hosting + Mantenimiento ${plan.name} de Conecta al Toque.`
            )}`;
            return (
              <div
                key={i}
                className={`relative rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  plan.popular ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}

                <div className={`bg-${plan.color}-100 p-6 text-center`}>
                  <h3 className={`text-2xl font-bold text-${plan.color}-800`}>Plan {plan.name}</h3>
                  <p className={`text-${plan.color}-600 text-3xl font-bold mt-2`}>{plan.price}</p>
                  <p className="text-gray-500 text-xs mt-2">Facturación anual</p>
                </div>

                <div className="bg-white p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`text-${plan.color}-500 mr-2`}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white font-bold py-3 rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg`}
                  >
                    Contratar Plan {plan.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          *No incluye desarrollos de nuevas secciones/funcionalidades. Si el uso crece y requiere más recursos de terceros, te avisamos antes para proponer upgrade.
        </p>
      </div>
    </section>



      

      {/* Contacto - Más llamativo */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-700 text-white  text-center " > 
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Cuéntanos sobre tu proyecto y te enviaremos una cotización sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56929240183?text=Hola!%20Estoy%20interesado%20en%20una%20página%20web%20con%20ConectAlToque"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg  flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                
            >
              <span>WhatsApp</span>
              <span>→</span>
              <FaWhatsapp className="text-2x1" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=conectaaltoque@gmail.com&su=Quiero%20una%20pagina%20web&body=Hola,%20estoy%20interesado%20en%20una%20página%20web%20con%20ConectAlToque."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-500  text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg "
            >
              Email
              <span>→</span>
              <span className="text-white">✉️</span> 
            </a>
          </div>
        </div>
      </section>
      
      
      {/* Footer - Más completo */}
      <footer className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Conectaltoque</h3>
            <p className="text-sm">
              Creamos sitios web profesionales para pymes y emprendedores en Chile.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ejemplo-landing" className="hover:text-white transition">Landing Pages</a></li>
              <li><a href="/ejemplo-corporativo" className="hover:text-white transition">Sitio corporativo</a></li>
              <li><a href="/ejemplo-tienda-online" className="hover:text-white transition">Tienda online</a></li>
              <li><a href="#planes" className="hover:text-white transition">Mantención</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>conectaaltoque@gmail.com</li>
              <li>+56 9 2924 0183</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition">FB</a>
                <a href="#" className="hover:text-white transition">IG</a>
                <a href="#" className="hover:text-white transition">TW</a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Conectaltoque. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
