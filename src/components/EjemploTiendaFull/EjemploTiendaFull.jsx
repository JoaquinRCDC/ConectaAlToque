import React, { useState, useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import CarritoSidebar from "./CarritoSidebar";

export default function TiendaFull() {
  const [categoria, setCategoria] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({ duration: reduced ? 0 : 800, once: true });
  }, []);

  const CANONICAL = "https://conectaaltoque.cl/ejemplo-tienda-online";
  const fmtCLP = (n) => `$${n.toLocaleString("es-CL")}`;

  const HERO_IMG =
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80";

  const productos = [
    {
      nombre: "Hamburguesa Clásica",
      descripcion: "Jugosa hamburguesa con queso cheddar y lechuga",
      precio: 5990,
      imagen:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
      categoria: "Hamburguesas",
      slug: "hamburguesa-clasica",
    },
    {
      nombre: "Papas Fritas",
      descripcion: "Crujientes y doradas, servidas con salsa",
      precio: 2990,
      imagen:
        "https://images.unsplash.com/photo-1630431341771-1ceb084d6607?auto=format&fit=crop&w=1200&q=80",
      categoria: "Acompañamientos",
      slug: "papas-fritas",
    },
    {
      nombre: "Bebida Refrescante",
      descripcion: "Bebida fría para acompañar tu combo",
      precio: 1990,
      imagen:
        "https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?auto=format&fit=crop&w=1200&q=80",
      categoria: "Bebidas",
      slug: "bebida-refrescante",
    },
  ];

  const categorias = [...new Set(productos.map((p) => p.categoria))];
  const productosFiltrados = categoria ? productos.filter((p) => p.categoria === categoria) : productos;

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    setCartOpen(true);
  };
  const vaciarCarrito = () => setCarrito([]);

  // JSON-LD (Breadcrumb + ItemList del catálogo)
  const jsonLd = useMemo(() => {
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://conectaaltoque.cl/" },
        { "@type": "ListItem", position: 2, name: "Tienda online", item: CANONICAL },
      ],
    };

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: productos.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.nombre,
        url: `${CANONICAL}#${p.slug}`,
      })),
    };

    return [breadcrumbs, itemList];
  }, [CANONICAL, productos]);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Tienda online completa — Carrito + catálogo | Conecta Al Toque</title>
        <meta
          name="description"
          content="Ejemplo de tienda full: catálogo por categorías, carrito lateral, contacto y mapa. Ideal para restaurantes o delivery."
        />
        <link rel="canonical" href={CANONICAL} />

        {/* OG/Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Conecta Al Toque" />
        <meta property="og:title" content="Tienda online completa — Conecta Al Toque" />
        <meta
          property="og:description"
          content="Catálogo, carrito y contacto directo. Optimizada para velocidad y SEO."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={HERO_IMG} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD página */}
        {jsonLd.map((obj, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
      </Helmet>

      <main className="bg-white text-gray-800">
        {/* NAV */}
        <nav className="bg-red-600 text-white py-4 px-4 sm:px-6 shadow" role="navigation" aria-label="Principal">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href={CANONICAL} className="text-2xl font-bold" aria-label="FastDelicious">
              🍔 FastDelicious
            </a>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#menu" className="hover:underline">
                Menú
              </a>
              <a href="#contacto" className="hover:underline">
                Contacto
              </a>
              <button
                onClick={() => setCartOpen(true)}
                className="relative hover:opacity-90"
                aria-label={`Abrir carrito (${carrito.length} ítems)`}
              >
                🛒
                {carrito.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-black/80 text-white rounded-full px-1">
                    {carrito.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-red-100 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-3 text-[clamp(1.75rem,4vw,2.25rem)]">
              ¡Sabores que llegan directo a ti!
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Hamburguesas, papas y más. Rápido, sabroso y a buen precio.
            </p>

            <div className="rounded-xl shadow-lg mx-auto overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <img
                  src={HERO_IMG}
                  alt="Combo de comida rápida listo para delivery"
                  className="w-full h-full object-cover"
                  width={1200}
                  height={675}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MENÚ / CATÁLOGO */}
        <section id="menu" className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          {/* Filtros */}
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8">
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

          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Menú del día</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {productosFiltrados.map((p) => (
                <article
                  key={p.slug}
                  id={p.slug}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="w-full h-full object-cover"
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{p.nombre}</h3>
                    <p className="text-gray-600 text-sm mb-2">{p.descripcion}</p>
                    <p className="text-red-600 font-extrabold mb-4">{fmtCLP(p.precio)}</p>
                    <button
                      onClick={() => agregarAlCarrito(p)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto"
                      aria-label={`Agregar ${p.nombre} al carrito`}
                    >
                      Agregar al carrito
                    </button>
                  </div>

                  {/* JSON-LD del producto */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      name: p.nombre,
                      description: p.descripcion,
                      image: p.imagen,
                      url: `${CANONICAL}#${p.slug}`,
                      offers: {
                        "@type": "Offer",
                        priceCurrency: "CLP",
                        price: String(p.precio),
                        availability: "https://schema.org/InStock",
                        url: `${CANONICAL}#${p.slug}`,
                      },
                    })}
                  </script>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="text-gray-600 mb-6">¿Tienes dudas? Escríbenos directo por WhatsApp o correo.</p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp
              </a>
              <a
                href="mailto:conectaaltoque@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                aria-label="Contactar por correo"
              >
                <FaEnvelope className="text-xl" /> Email
              </a>
            </div>
          </div>
        </section>

        {/* MAPA */}
        <section className="mb-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <iframe
              title="Ubicación del local FastDelicious en Santiago"
              className="w-full h-64 sm:h-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.055681132748!2d-70.60753603465253!3d-33.51153219293432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06e6c71db0d%3A0xdfdf70523ce83fbb!2sCenco%20Florida!5e0!3m2!1ses-419!2scl!4v1749741645999!5m2!1ses-419!2scl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} FastDelicious. Todos los derechos reservados.
        </footer>

        {/* Carrito lateral */}
        <CarritoSidebar
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={carrito}
          onClear={vaciarCarrito}
        />
      </main>
    </>
  );
}
