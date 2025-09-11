import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function MiniTienda() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const CANONICAL = "https://conectaaltoque.cl/ejemplo-corporativo";

  const [categoria, setCategoria] = useState("");

  const productos = [
    {
      nombre: "Reloj clásico de cuero",
      descripcion: "Diseño elegante con correa de cuero genuino.",
      precio: "$59.990",
      imagen: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
      categoria: "Clásicos",
      slug: "reloj-clasico-cuero"
    },
    {
      nombre: "Reloj deportivo digital",
      descripcion: "Ideal para entrenamientos, resistente al agua.",
      precio: "$34.500",
      imagen: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
      categoria: "Digitales",
      slug: "reloj-deportivo-digital"
    },
    {
      nombre: "Reloj minimalista",
      descripcion: "Diseño moderno y limpio para uso diario.",
      precio: "$42.990",
      imagen: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
      categoria: "Modernos",
      slug: "reloj-minimalista"
    },
    {
      nombre: "Reloj de acero inoxidable",
      descripcion: "Durabilidad y estilo en un solo accesorio.",
      precio: "$69.990",
      imagen: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
      categoria: "Premium",
      slug: "reloj-acero-inoxidable"
    },
    {
      nombre: "Reloj automático skeleton",
      descripcion: "Muestra el mecanismo interno, estilo único.",
      precio: "$89.990",
      imagen: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg",
      categoria: "Premium",
      slug: "reloj-automatico-skeleton"
    }
  ];

  const categorias = [...new Set(productos.map((p) => p.categoria))];
  const productosFiltrados = categoria ? productos.filter((p) => p.categoria === categoria) : productos;

  // JSON-LD (Breadcrumb + ItemList con productos)
  const jsonLd = useMemo(() => {
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": productos.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${CANONICAL}#${p.slug}`,
        name: p.nombre
      }))
    };

    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://conectaaltoque.cl/" },
        { "@type": "ListItem", position: 2, name: "Mini tienda", item: CANONICAL }
      ]
    };

    return [breadcrumbs, itemList];
  }, [CANONICAL]);

  const parseCLP = (s) => Number(s.replace(/[^\d]/g, "") || 0);

  return (
    <>
      {/* SEO HEAD */}
      <Helmet>
        <title>Mini tienda — Sitio corporativo con catálogo | Conecta Al Toque</title>
        <meta
          name="description"
          content="Ejemplo de mini tienda corporativa: catálogo por categorías, carrusel, contacto por WhatsApp y formulario. Ideal para pymes."
        />
        <link rel="canonical" href={CANONICAL} />

        {/* OG/Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Conecta Al Toque" />
        <meta property="og:title" content="Mini tienda — Catálogo con WhatsApp" />
        <meta
          property="og:description"
          content="Catálogo simple y rápido con contacto por WhatsApp y formulario. Perfecto para empezar a vender."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        {jsonLd.map((obj, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
      </Helmet>

      <main className="bg-gray-50 min-h-screen">
        {/* NAV */}
        <nav className="bg-white shadow sticky top-0 z-10" role="navigation" aria-label="Secundaria">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href={CANONICAL} className="text-2xl font-bold text-blue-600" aria-label="MiniTienda">
              MiniTienda
            </a>
            <div className="space-x-4">
              <a href="#productos" className="text-gray-700 hover:text-blue-600 font-medium">
                Productos
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">
                Contacto
              </a>
            </div>
          </div>
        </nav>

        {/* HERO/CAROUSEL */}
        <section className="py-12 px-4 bg-white" data-aos="fade-down">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                aria-label="Promociones destacadas"
              >
                {[
                  {
                    src: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    alt: "Reloj deportivo digital en acero",
                  },
                  {
                    src: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    alt: "Reloj clásico de cuero marrón",
                  }
                ].map((img, i) => (
                  <SwiperSlide key={i}>
                    {/* Mantén proporción para evitar CLS */}
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        width={1200}
                        height={675}
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchpriority={i === 0 ? "high" : undefined}
                        decoding="async"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" className="py-12 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Productos disponibles
            </h2>

            {/* Filtros */}
            <div className="flex justify-center gap-3 flex-wrap mb-8">
              <button
                onClick={() => setCategoria("")}
                className={`px-4 py-2 rounded-full border transition ${
                  categoria === "" ? "bg-blue-600 text-white" : "text-blue-600 border-blue-600 hover:bg-blue-50"
                }`}
              >
                Todos
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`px-4 py-2 rounded-full border transition ${
                    categoria === cat ? "bg-blue-600 text-white" : "text-blue-600 border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {productosFiltrados.map((p, index) => (
                <article
                  key={p.slug}
                  id={p.slug}
                  className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
                  data-aos="fade-up"
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={`${p.imagen}?auto=compress&cs=tinysrgb&w=1200`}
                      alt={p.nombre}
                      className="w-full h-full object-cover"
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{p.nombre}</h3>
                    <p className="text-gray-600 text-sm mb-2">{p.descripcion}</p>
                    <p className="text-indigo-600 font-semibold text-lg mb-4">{p.precio}</p>

                    {/* Botón WA */}
                    <a
                      href={`https://wa.me/56912345678?text=${encodeURIComponent(
                        `Hola! Quiero comprar ${p.nombre} (${p.precio}). ¿Está disponible?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                      aria-label={`Comprar ${p.nombre} por WhatsApp`}
                    >
                      Comprar por WhatsApp
                    </a>
                  </div>

                  {/* Product JSON-LD individual (opcional pero útil) */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      name: p.nombre,
                      description: p.descripcion,
                      image: `${p.imagen}?w=1200`,
                      url: `${CANONICAL}#${p.slug}`,
                      offers: {
                        "@type": "Offer",
                        priceCurrency: "CLP",
                        price: String(parseCLP(p.precio)),
                        availability: "https://schema.org/InStock",
                        url: `${CANONICAL}#${p.slug}`
                      }
                    })}
                  </script>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dirección / Mapa */}
        <section className="mt-10 max-w-2xl mx-auto text-center px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dónde retirarlo</h2>
          <p className="text-gray-600 mb-6">
            Puedes pasar por nuestro local ubicado en Mall Florida, Santiago.
          </p>
          <iframe
            title="Ubicación MiniTienda en Mall Florida, Santiago"
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.055681132748!2d-70.60753603465253!3d-33.51153219293432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06e6c71db0d%3A0xdfdf70523ce83fbb!2sCenco%20Florida!5e0!3m2!1ses-419!2scl!4v1749741645999!5m2!1ses-419!2scl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* Testimonio */}
        <section className="mt-20 py-12 bg-gray-100" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Nuestros clientes dicen</h2>
            <blockquote className="italic text-gray-600">
              “Desde que tenemos nuestra mini tienda, vendemos el doble. ¡Recomendado!”
            </blockquote>
            <p className="text-gray-500 mt-2">– Carolina, Emprendedora</p>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-16 bg-blue-50 px-4" data-aos="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contáctanos</h2>
            <p className="text-gray-600 mb-6">¿Tienes dudas? Escríbenos directo.</p>

            {/* mailto está bien para demo; en producción conviene endpoint o servicio de formularios */}
            <form
              action="mailto:conectaaltoque@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4 text-left"
            >
              <input type="text" name="nombre" placeholder="Tu nombre" className="w-full border px-4 py-2 rounded" required />
              <input type="email" name="correo" placeholder="Tu correo" className="w-full border px-4 py-2 rounded" required />
              <textarea name="mensaje" rows="4" placeholder="¿En qué te podemos ayudar?" className="w-full border px-4 py-2 rounded" required />
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Enviar mensaje
              </button>
            </form>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp
              </a>
              <a
                href="mailto:conectaaltoque@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <FaEnvelope className="text-xl" /> Email
              </a>
            </div>
          </div>
        </section>

        <footer className="py-6 bg-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Conecta Al Toque. Todos los derechos reservados.
        </footer>
      </main>
    </>
  );
}
