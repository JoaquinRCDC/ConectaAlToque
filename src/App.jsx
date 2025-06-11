export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero / Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Conectaltoque</h1>
        <p className="text-lg mb-4">Creamos sitios web profesionales para pymes y emprendedores</p>
        <a href="#contacto" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-xl shadow hover:bg-blue-50">
          Contáctanos por WhatsApp
        </a>
      </header>

      {/* Problema + Solución */}
      <section className="bg-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Aún no tienes página web?</h2>
        <p className="max-w-xl mx-auto">
          Tus clientes no te encuentran en Google, no puedes escalar tus ventas y dependes 100% de redes sociales.
          Nosotros te ayudamos a tener presencia online con una web rápida, bonita y adaptada a ti.
        </p>
      </section>
      

      <section className="bg-white p-10 text-center">
  <h2 className="text-2xl font-bold mb-6">Ejemplos de páginas</h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {/* Ejemplo: Landing */}
    <div className="bg-gray-50 rounded-xl shadow overflow-hidden">
      <img src="/ejemplos/landing1.jpg" alt="Landing ejemplo" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">Landing para servicios</h3>
        <p className="text-sm text-gray-600 mb-4">Presentación clara, botones de contacto, imagen de marca.</p>
        <a
          href="/ejemplo-landing"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Ver demo
        </a>
      </div>
    </div>

    {/* Ejemplo: Tienda */}
    <div className="bg-gray-50 rounded-xl shadow overflow-hidden">
      <img src="/ejemplos/tienda1.jpg" alt="Tienda ejemplo" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">Mini tienda online</h3>
        <p className="text-sm text-gray-600 mb-4">Catálogo de productos con botón de WhatsApp o pago.</p>
        <a
          href="/ejemplo-tienda"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Ver demo
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Servicios */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">¿Qué incluye?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">Diseño personalizado</h3>
            <p>Web moderna, adaptable a celulares, con los colores y estilo de tu marca.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">Enlace a redes y WhatsApp</h3>
            <p>Botón de contacto directo, Instagram, correo, ubicación.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">Dominio y hosting</h3>
            <p>Nos encargamos de todo para que tu web esté online 24/7.</p>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Planes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">Básico</h3>
            <p className="text-gray-700 mb-4">$89.000 CLP</p>
            <p className="text-sm">1 sección, diseño personalizado, botón de contacto.</p>
          </div>
          <div className="bg-blue-100 border border-blue-500 rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">Profesional</h3>
            <p className="text-gray-700 mb-4">$129.000 CLP</p>
            <p className="text-sm">Web completa, 3 secciones, redes, contacto, optimización móvil.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">Tienda</h3>
            <p className="text-gray-700 mb-4">$179.000 CLP</p>
            <p className="text-sm">Catálogo de productos, botón de compra o redirección a pago.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="p-10 text-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">¿Listo para tener tu web?</h2>
        <p className="mb-6">Escríbenos y te respondemos al toque por WhatsApp.</p>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-green-600"
        >
          Escríbenos ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Conectaltoque. Todos los derechos reservados.
      </footer>
    </div>
  );
}
