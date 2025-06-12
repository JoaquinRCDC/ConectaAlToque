import InstagramFeed from "/src/components/InstagramFeed";

export default function MiniTienda() {
  const productos = [
  {
    nombre: "Collar artesanal",
    categoria: "Joyería",
    descripcion: "Hecho a mano con piedras naturales.",
    precio: "$15.990",
    imagen: "https://via.placeholder.com/400x300?text=Collar"
  },
  {
    nombre: "Tarta de limón",
    categoria: "Panadería",
    descripcion: "Receta casera con ingredientes frescos.",
    precio: "$5.000",
    imagen: "https://via.placeholder.com/400x300?text=Tarta"
  },
  // ...
];


  return (
    <main className="bg-white min-h-screen py-10 px-4">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Mini Tienda</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Muestra tus productos con imágenes, precios claros y contacto directo por WhatsApp para comprar fácilmente.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{producto.nombre}</h2>
              <p className="text-gray-600 mb-2 text-sm">{producto.descripcion}</p>
              <p className="text-indigo-600 font-semibold text-lg mb-4">{producto.precio}</p>
              <a
                href={`https://wa.me/56912345678?text=${encodeURIComponent(
                  `Hola! Quiero comprar ${producto.nombre}. ¿Está disponible?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center mt-12">
        <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
        <div className="flex justify-center gap-4">
          <a href="https://wa.me/56912345678" target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-lg">WhatsApp</a>
          <a href="mailto:conectaaltoque@gmail.com" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Email</a>
          <a href="https://www.instagram.com/tucuenta" target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded-lg">Instagram</a>
        </div>
      </section>

      <section className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Dónde retirarlo</h3>
        <p className="text-gray-600 mb-4">Puedes pasar por nuestro local en Ñuñoa, Santiago.</p>
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.055681132748!2d-70.60753603465253!3d-33.51153219293432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06e6c71db0d%3A0xdfdf70523ce83fbb!2sCenco%20Florida!5e0!3m2!1ses-419!2scl!4v1749741645999!5m2!1ses-419!2scl" 
          allowFullScreen
          loading="lazy"
        />
      </section>
        <InstagramFeed />
    
    </main> 
  );
}
