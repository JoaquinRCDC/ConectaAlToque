import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Importa los iconos
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function MiniTienda() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const productos = [
    {
      nombre: "Reloj clásico de cuero",
      descripcion: "Diseño elegante con correa de cuero genuino.",
      precio: "$59.990",
      imagen: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      nombre: "Reloj deportivo digital",
      descripcion: "Ideal para entrenamientos, resistente al agua.",
      precio: "$34.500",
      imagen: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      nombre: "Reloj minimalista",
      descripcion: "Diseño moderno y limpio para uso diario.",
      precio: "$42.990",
      imagen: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      nombre: "Reloj de acero inoxidable",
      descripcion: "Durabilidad y estilo en un solo accesorio.",
      precio: "$69.990",
      imagen: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      nombre: "Reloj clásico de cuero",
      descripcion: "Diseño elegante con correa de cuero genuino.",
      precio: "$59.990",
      imagen: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      nombre: "Reloj automático skeleton",
      descripcion: "Muestra el mecanismo interno, estilo único.",
      precio: "$89.990",
      imagen: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MiniTienda</h1>
          <div className="space-x-4">
            <a href="#productos" className="text-gray-700 hover:text-blue-600 font-medium">Productos</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero con carrusel */}
      <section className="py-12 px-4 bg-white" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Oferta 1"
                className="rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Producto Destacado"
                className="rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-12 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Productos disponibles</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{producto.nombre}</h4>
                  <p className="text-gray-600 text-sm mb-2">{producto.descripcion}</p>
                  <p className="text-indigo-600 font-semibold text-lg mb-4">{producto.precio}</p>
                  <a
                    href={`https://wa.me/56912345678?text=${encodeURIComponent(
                      `Hola! Quiero comprar ${producto.nombre}. ¿Está disponible?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Comprar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="mt-10 max-w-2xl mx-auto text-center" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Dónde retirarlo</h3>
        <p className="text-gray-600 mb-6">Puedes pasar por nuestro local ubicado en mall florida, Santiago.</p>
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.055681132748!2d-70.60753603465253!3d-33.51153219293432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06e6c71db0d%3A0xdfdf70523ce83fbb!2sCenco%20Florida!5e0!3m2!1ses-419!2scl!4v1749741645999!5m2!1ses-419!2scl"
          allowFullScreen
          loading="lazy"
        />
      </section>

      {/* Testimonios */}
      <section className="mt-20 py-12 bg-gray-100" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestros clientes dicen:</h3>
          <blockquote className="italic text-gray-600">“Desde que tenemos nuestra mini tienda, vendemos el doble. ¡Recomendado!”</blockquote>
          <p className="text-gray-500 mt-2">– Carolina, Emprendedora</p>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="py-16 bg-blue-50 px-4" // Cambio aquí el background a azul suave
        data-aos="fade-up"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contáctanos</h3>
          <p className="text-gray-600 mb-6">
            ¿Tienes dudas o necesitas un diseño a medida? Escríbenos directo.
          </p>

          <form
            action="mailto:conectaaltoque@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-4 text-left"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              name="correo"
              placeholder="Tu correo"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <textarea
              name="mensaje"
              rows="4"
              placeholder="¿En qué te podemos ayudar?"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Enviar mensaje
            </button>
          </form>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
            <a
              href="mailto:conectaaltoque@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <FaEnvelope className="text-xl" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-200 text-center text-sm text-gray-600">
        © 2025 ConectAlToque. Todos los derechos reservados.
      </footer>
    </main>
  );
}
