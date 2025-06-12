import React from 'react';

export default function LandingZapatillas() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      {/* Navbar profesional */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo y nombre de empresa */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">UrbanKicks</span>
            </div>
            
            {/* Menú de navegación */}
            <div className="hidden md:flex items-center space-x-8">

              
              {/* Botón de contacto en navbar */}
              <a 
                href="https://wa.me/56912345678" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contacto
              </a>
            </div>
            
            {/* Menú móvil (hamburguesa) */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section con producto destacado */}
      <section id="inicio" className="bg-gradient-to-b from-gray-100 to-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NUEVO MODELO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Zapatillas <span className="text-blue-600">UltraRun Pro</span></h1>
            <p className="text-xl mb-6">Tecnología de amortiguación para corredores exigentes</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">$64.990</span>
              <span className="ml-2 text-gray-500 line-through">$79.990</span>
              <span className="ml-2 bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">20% OFF</span>
            </div>
            
            <a 
              href="https://wa.me/56912345678?text=Quiero%20comprar%20las%20UltraRun%20Pro" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors mb-4 w-full md:w-auto text-center"
            >
              Preguntar por WhatsApp
            </a>
            
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Envío gratis en Santiago
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Zapatillas UltraRun Pro" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white px-3 py-2 rounded-lg shadow-md border">
              <div className="text-xs text-gray-500">COLORES DISPONIBLES</div>
              <div className="flex space-x-2 mt-1">
                <div className="w-6 h-6 rounded-full bg-blue-800 border-2 border-white shadow"></div>
                <div className="w-6 h-6 rounded-full bg-black border-2 border-white shadow"></div>
                <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de beneficios */}
      <section id="tecnologia" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tecnología que <span className="text-blue-600">mejora tu rendimiento</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔄',
                title: 'Amortiguación React',
                description: 'Absorbe impactos y devuelve energía'
              },
              {
                icon: '🌬️',
                title: 'Malla transpirable',
                description: 'Pies frescos en todo momento'
              },
              {
                icon: '🛡️',
                title: 'Suela anti-deslizante',
                description: 'Tracción en cualquier superficie'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de productos */}
      <section id="detalles" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Detalles que marcan la diferencia</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Detalle de suela" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Suela de alta durabilidad</h3>
              <p className="text-gray-700 mb-4">
                Diseñada con compuesto de goma que ofrece 3x más resistencia al desgaste que modelos convencionales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Resistente a aceites y químicos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Patrón de tracción multidireccional</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Soporte anatómico</h3>
              <p className="text-gray-700 mb-4">
                Plantilla ortopédica removible que se adapta a la forma de tu pie, reduciendo la fatiga en largas distancias.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-800 font-medium">"Sentí la diferencia desde el primer uso. Mis rodillas ya no duelen después de correr 10K"</p>
                <p className="text-sm text-gray-600 mt-2">- Carlos M., Maratonista</p>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Soporte anatómico" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Opiniones de <span className="text-blue-600">nuestros clientes</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Compré estas zapatillas para mi entrenamiento diario y superaron todas mis expectativas. ¡Las más cómodas que he tenido!",
                author: "Ana R.",
                rating: 5
              },
              {
                quote: "Excelente relación calidad-precio. Las uso tanto para correr como para el día a día y se ven como nuevas después de 3 meses.",
                author: "Javier P.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final con garantía */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-bold mb-4">OFERTA POR TIEMPO LIMITADO</div>
          <h2 className="text-3xl font-bold mb-4">¿Qué estás esperando?</h2>
          <p className="text-xl mb-6">Obtén tus UltraRun Pro con 20% de descuento hoy</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a 
              href="https://wa.me/56912345678?text=Tengo%20dudas%20sobre%20las%20zapatillas%20UltraRun%20Pro" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors"
            >
              Preguntar por WhatsApp
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Envíos en 24hrs (RM)
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              30 días de garantía
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Devolución gratis
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} UrbanKicks. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white underline">Términos y condiciones</a> | 
          <a href="#" className="hover:text-white underline ml-2">Política de privacidad</a>
        </p>
      </footer>
    </div>
  );
}