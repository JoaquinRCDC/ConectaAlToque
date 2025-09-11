import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LandingZapatillas() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const CANONICAL = "https://conectaaltoque.cl/landing-zapatillas";
  const PRICE = 64990;
  const OLD_PRICE = 79990;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://conectaaltoque.cl/" },
        { "@type": "ListItem", position: 2, name: "UltraRun Pro", item: CANONICAL }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Zapatillas UltraRun Pro",
      brand: { "@type": "Brand", name: "UrbanKicks" },
      description: "Zapatillas para running con amortiguación reactiva, malla transpirable y suela antideslizante.",
      sku: "URP-2025",
      // usa tus propias imágenes alojadas en /public si puedes (mejor para LCP)
      image: [
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&w=1200&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&w=1200&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&w=1200&q=80"
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "CLP",
        price: String(PRICE),
        availability: "https://schema.org/InStock",
        url: CANONICAL
      }
      // Puedes añadir aggregateRating y reviews si los tienes.
    }
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>UltraRun Pro — Zapatillas de running | UrbanKicks</title>
        <meta
          name="description"
          content="UltraRun Pro: amortiguación reactiva, suela antideslizante y malla transpirable. 20% OFF por tiempo limitado. Envío gratis en Santiago."
        />
        <link rel="canonical" href={CANONICAL} />

        {/* OG/Twitter */}
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Conecta Al Toque" />
        <meta property="og:title" content="UltraRun Pro — Zapatillas de running | UrbanKicks" />
        <meta
          property="og:description"
          content="Amortiguación reactiva y suela antideslizante. 20% OFF por tiempo limitado."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&w=1200&q=80"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        {jsonLd.map((obj, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
      </Helmet>

      <div className="font-sans text-gray-900 antialiased">
        {/* Navbar */}
        <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Principal">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href={CANONICAL} className="text-xl font-bold text-blue-600" aria-label="UrbanKicks">
                  UrbanKicks
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="https://wa.me/56912345678"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                  aria-label="Contacto por WhatsApp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {/* icono whatsapp */}
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26C2.918 5.23 7.353.796 12.805.796a9.825 9.825 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                  </svg>
                  Contacto
                </a>
              </div>
              <button className="md:hidden text-gray-700" aria-label="Abrir menú">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section id="inicio" className="bg-gradient-to-b from-gray-100 to-white pt-8 pb-12 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Texto */}
            <div className="md:w-1/2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NUEVO MODELO</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Zapatillas <span className="text-blue-600">UltraRun Pro</span>
              </h1>
              <p className="text-xl mb-6">Tecnología de amortiguación para corredores exigentes</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${PRICE.toLocaleString("es-CL")}
                </span>
                <span className="ml-2 text-gray-500 line-through">
                  ${OLD_PRICE.toLocaleString("es-CL")}
                </span>
                <span className="ml-2 bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">
                  {Math.round((1 - PRICE / OLD_PRICE) * 100)}% OFF
                </span>
              </div>

              <a
                href="https://wa.me/56912345678?text=Quiero%20comprar%20las%20UltraRun%20Pro"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors mb-4 w-full md:w-auto text-center"
                rel="noopener noreferrer"
                target="_blank"
              >
                Preguntar por WhatsApp
              </a>

              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Envío gratis en Santiago
              </div>
            </div>

            {/* Imagen principal (LCP) */}
            <div className="md:w-1/2 relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                {/* Mantén proporción para evitar CLS */}
                <div className="aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1200&q=80"
                    alt="Zapatillas UltraRun Pro en color azul marino"
                    className="h-full w-full object-cover"
                    width={1200}
                    height={900}
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white px-3 py-2 rounded-lg shadow-md border">
                <div className="text-xs text-gray-500">COLORES DISPONIBLES</div>
                <div className="flex space-x-2 mt-1" aria-label="Colores disponibles">
                  <div className="w-6 h-6 rounded-full bg-blue-800 border-2 border-white shadow" title="Azul" />
                  <div className="w-6 h-6 rounded-full bg-black border-2 border-white shadow" title="Negro" />
                  <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow" title="Rojo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnología */}
        <section id="tecnologia" className="py-16 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tecnología que <span className="text-blue-600">mejora tu rendimiento</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🔄", title: "Amortiguación React", description: "Absorbe impactos y devuelve energía" },
                { icon: "🌬️", title: "Malla transpirable", description: "Pies frescos en todo momento" },
                { icon: "🛡️", title: "Suela anti-deslizante", description: "Tracción en cualquier superficie" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <span className="text-3xl mb-4 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detalles */}
        <section id="detalles" className="py-16 px-4 bg-gray-50" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Detalles que marcan la diferencia</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                    alt="Detalle de la suela antideslizante"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Suela de alta durabilidad</h3>
                <p className="text-gray-700 mb-4">
                  Diseñada con compuesto de goma que ofrece 3x más resistencia al desgaste que modelos convencionales.
                </p>
                <ul className="space-y-2">
                  {[
                    "Resistente a aceites y químicos",
                    "Patrón de tracción multidireccional"
                  ].map((txt) => (
                    <li key={txt} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Soporte anatómico</h3>
                <p className="text-gray-700 mb-4">
                  Plantilla ortopédica removible que se adapta a la forma de tu pie, reduciendo la fatiga en largas distancias.
                </p>
                <blockquote className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-blue-800 font-medium">
                    “Sentí la diferencia desde el primer uso. Mis rodillas ya no duelen después de correr 10K”
                  </p>
                  <footer className="text-sm text-gray-600 mt-2">— Carlos M., Maratonista</footer>
                </blockquote>
              </div>
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
                    alt="Plantilla ortopédica y soporte del arco"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-16 px-4 bg-white" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Opiniones de <span className="text-blue-600">nuestros clientes</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Compré estas zapatillas para mi entrenamiento diario y superaron todas mis expectativas. ¡Las más cómodas que he tenido!",
                  author: "Ana R.",
                  rating: 5
                },
                {
                  quote:
                    "Excelente relación calidad-precio. Las uso tanto para correr como para el día a día y se ven como nuevas después de 3 meses.",
                  author: "Javier P.",
                  rating: 4
                }
              ].map((t, idx) => (
                <figure key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex mb-4" aria-label={`Calificación ${t.rating} de 5`}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="italic mb-4">“{t.quote}”</blockquote>
                  <figcaption className="font-semibold">— {t.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 px-4 bg-blue-600 text-white text-center" data-aos="fade-up">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-bold mb-4">
              OFERTA POR TIEMPO LIMITADO
            </div>
            <h2 className="text-3xl font-bold mb-4">¿Qué estás esperando?</h2>
            <p className="text-xl mb-6">Obtén tus UltraRun Pro con {Math.round((1 - PRICE / OLD_PRICE) * 100)}% de descuento hoy</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/56912345678?text=Tengo%20dudas%20sobre%20las%20zapatillas%20UltraRun%20Pro"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                Preguntar por WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              {["Envíos en 24hrs (RM)", "30 días de garantía", "Devolución gratis"].map((b) => (
                <div key={b} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} UrbanKicks. Todos los derechos reservados.</p>
          <p className="mt-2">
            {/* Reemplaza # por URLs reales o quítalos para evitar warnings */}
            <span className="opacity-70">Términos y condiciones</span> |{" "}
            <span className="opacity-70">Política de privacidad</span>
          </p>
        </footer>
      </div>
    </>
  );
}
