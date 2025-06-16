import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import CarritoSidebar from './CarritoSidebar';
export default function TiendaFull() {
  
  const [categoria, setCategoria] = useState('');
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const productos = [
    {
      nombre: "Hamburguesa Clásica",
      descripcion: "Jugosa hamburguesa con queso cheddar y lechuga",
      precio: 5990,
      imagen:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      categoria: "Hamburguesas",
    },
    {
      nombre: "Papas Fritas",
      descripcion: "Crujientes y doradas, servidas con salsa",
      precio: 2990,
      imagen:
        "https://images.unsplash.com/photo-1630431341771-1ceb084d6607?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Acompañamientos",
    },
    {
      nombre: "Bebida Refrescante",
      descripcion: "Bebida fría para acompañar tu combo",
      precio: 1990,
      imagen:
        "https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoria: "Bebidas",
    },
  ];

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setCartOpen(true);
  };
    const [cartOpen, setCartOpen] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const vaciarCarrito = () => setCarrito([]);




  const categorias = [...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = categoria ? productos.filter(p => p.categoria === categoria) : productos;

  return (
    <main className="bg-white text-gray-800">
      <nav className="bg-red-600 text-white py-4 px-6 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🍔 FastDelicious</h1>
          <div className="space-x-6">
            <a href="#menu" className="hover:underline">Menú</a>
            <a href="#carrito" className="hover:underline">Carrito</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
            <button onClick={() => setCartOpen(true)} className="relative text-gray-700 hover:text-indigo-600">
                🛒
                {carrito.length > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                  {carrito.length}
                </span>
              )}
              </button>

          </div>
        </div>
      </nav>

      <section className="bg-red-100 py-12 text-center px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">¡Sabores que llegan directo a ti!</h2>
          <p className="text-gray-700 text-lg mb-6">Hamburguesas, papas y más. Rápido, sabroso y a buen precio.</p>
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=80" className="rounded-xl shadow-lg mx-auto" alt="Comida rápida" />
        </div>
      </section>

      <section id="menu" className="py-12 px-4" data-aos="fade-up">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
            <button onClick={() => setCategoria('')} className={`px-4 py-2 rounded-full border ${categoria === '' ? 'bg-blue-600 text-white' : 'text-blue-600 border-blue-600'}`}>Todos</button>
            {categorias.map((cat, i) => (
              <button key={i} onClick={() => setCategoria(cat)} className={`px-4 py-2 rounded-full border ${categoria === cat ? 'bg-blue-600 text-white' : 'text-blue-600 border-blue-600'}`}>{cat}</button>
            ))}
          </div>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Menú del Día</h3>
          
          <div className="grid md:grid-cols-3 gap-8">

            {productosFiltrados.map((p, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img src={p.imagen} alt={p.nombre} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-2">{p.nombre}</h4>
                  <p className="text-gray-600 text-sm mb-2">{p.descripcion}</p>
                  <p className="text-red-600 font-bold mb-4">${p.precio}</p>
                  <button
                    onClick={() => agregarAlCarrito(p)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      

      <section id="contacto" className="py-16 px-4" data-aos="fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
          <p className="text-gray-600 mb-6">¿Tienes dudas? Escríbenos directo por WhatsApp o correo.</p>
          <div className="flex justify-center gap-4">
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
            
            <a href="mailto:conectaaltoque@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              <FaEnvelope className="text-xl" /> Email
            </a>
          </div>
        </div>
      </section>

      <section className="mb-16 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.055681132748!2d-70.60753603465253!3d-33.51153219293432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06e6c71db0d%3A0xdfdf70523ce83fbb!2sCenco%20Florida!5e0!3m2!1ses-419!2scl!4v1749741645999!5m2!1ses-419!2scl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
        © 2025 FastDelicious. Todos los derechos reservados.
      </footer>
      <CarritoSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={carrito}
        onClear={vaciarCarrito}
      />



    </main>
  );
}
