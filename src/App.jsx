const logobanner = new URL('./assets/logobanner.png', import.meta.url).href;
const EjemploLanding = new URL('./assets/EjemploLanding.png', import.meta.url).href;

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
      {/* Hero Section - Mejorado con gradiente más suave y mejor espaciado */}
      <header className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-12 px-4 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo centrado */}
            <div className="mb-8 w-full max-w-[280px] md:max-w-[350px]" data-aos="fade-up">
              <img 
                src={logobanner} 
                alt="Logo Conecta al Toque" 
                className="w-full"
              />
            </div>
            
            {/* Contenido de texto */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Obten tu propia pagina web en menos de 2 dias.</h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-aos="fade-up" >“Si tu negocio no está en internet, tu negocio no existe” - Bill Gates</p>
            
            {/* Botón */}
            <div data-aos="fade-up">
            <a 
              href="https://wa.me/56929240183?text=Hola!%20Estoy%20interesado%20en%20una%20página%20web%20con%20ConectAlToque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1" 
            >
              <FaWhatsapp className="text-2xl" />
              Contáctanos por WhatsApp
            </a>
            </div>
          </div>
        </div>
      </header>

      {/* Problema + Solución - Mejor jerarquía */}
      <section className="py-16 px-4 bg-white " data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">NECESITAS PRESENCIA ONLINE</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg" >
              <h3 className="font-bold text-lg mb-3 text-gray-800">El problema</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Tus clientes no te encuentran en Google</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Dependes 100% de redes sociales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Pierdes ventas por no tener web profesional</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-indigo-500 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Nuestra solución</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span>Web rápida y optimizada para móviles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span>Diseño que refleja tu marca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span>Integración directa con WhatsApp o Instagram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplos de páginas - Cards mejoradas */}
      <section className="py-16 px-4 bg-gray-50" data-aos="fade-up" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros trabajos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diseños modernos que generan resultados reales para tu negocio
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> <a href="/ejemplo-landing">
            {/* Ejemplo Landing */}
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={EjemploLanding}
                  alt="Preview Landing"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Landing para servicios</h3>
                <p className="text-gray-600 mb-4">
                  Presentación profesional con llamados a acción estratégicos
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href="/ejemplo-landing" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Ver demo →
                  </a>
                  
                  
                </div>
                
              </div>
              
            </div>
            </a>

            {/* Ejemplo Tienda */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"  > <a href="/ejemplo-tienda" >
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Mini tienda</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Mini tienda</h3>
                <p className="text-gray-600 mb-4">
                  Catálogo de productos con integración a WhatsApp para pedidos
                </p>
                <div className="flex justify-between items-center">
                <a 
                  href="/ejemplo-tienda" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Ver demo →
                  
                </a>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Más popular
                  </span>
                </div>
                
              </div>
              </a>
            </div>
            

            {/* Nuevo ejemplo agregado */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg" >
              <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Tienda Full</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Tienda Full</h3>
                <p className="text-gray-600 mb-4">
                  Muestra tu trabajo de manera elegante y atractiva
                </p>
                <a 
                  href="#" 
                  className="text-amber-600 hover:text-amber-800 font-medium"
                >
                  Próximamente
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Mejor diseño */}
      <section className="py-16 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-semibold mb-2 block">Lo que ofrecemos</span>
          <h2 className="text-3xl font-bold mb-12">Todo incluido en tu web</h2>
          
          <div className="grid md:grid-cols-3 gap-8 " >
            {[
              {
                icon: '🎨',
                title: 'Diseño premium',
                description: 'Moderno, adaptable a móviles y con tu identidad visual'
                
              },
              {
                icon: '⚡',
                title: 'Rápida y segura',
                description: 'Optimizada para velocidad y con certificado SSL'
              },
              {
                icon: '📱',
                title: 'Integración WhatsApp',
                description: 'Botón directo de contacto para más ventas'
              },
              {
                icon: '🔍',
                title: 'SEO básico',
                description: 'Configuración para aparecer en búsquedas'
              },
              {
                icon: '🔄',
                title: 'Actualizaciones',
                description: 'Soporte para pequeños cambios mensuales'
              },
              {
                icon: '📊',
                title: 'Analíticas',
                description: 'Integración con Google Analytics'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes - Más atractivos */}
      <section className="py-16 px-4 bg-gray-50 " data-aos="fade-up" >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Planes a medida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elige la opción que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Landing Page',
                price: '$89.000',
                popular: false,
                features: ['1 sección principal', 'Diseño personalizado', 'Botón de contacto', 'Optimización móvil','animaciones básicas'],
                color: 'blue'
              },
              {
                name: 'Mini Tienda',
                price: '$129.000',
                popular: true,
                features: ['Hasta 3 secciones', 'Galería de imágenes', 'Redes sociales', 'Formulario de contacto', 'SEO básico'],
                color: 'blue'
              },
              {
                name: 'Tienda Full',
                price: '$179.000',
                popular: false,
                features: ['Catálogo de productos', 'Botón de compra', 'Gestión de inventario', 'WhatsApp Business', 'Analíticas'],
                color: 'blue'
              }
            ].map((plan, index) => {
              // 🔧 Agrega esto dentro del map
              const link = `https://wa.me/56912345678?text=${encodeURIComponent(`Hola! Estoy interesado en el plan ${plan.name} de ConectAlToque.`)}`;

              return (
                <div 
                  key={index} 
                  className={`relative rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg ${plan.popular ? 'ring-2 ring-blue-500 transform md:-translate-y-4 ' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      RECOMENDADO
                    </div>
                  )}

                  <div className={`bg-${plan.color}-100 p-6 text-center`}>
                    <h3 className={`text-2xl font-bold text-${plan.color}-800`}>{plan.name}</h3>
                    <p className={`text-${plan.color}-600 text-4xl font-bold my-4`}>{plan.price}</p>
                    <p className="text-gray-600 text-sm">CLP</p>
                  </div>

                  <div className="bg-white p-6">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`text-${plan.color}-500 mr-2`}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* ✅ Botón funcional por plan */}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white font-bold py-3 rounded-lg  transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    >
                      Contratar {plan.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
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
              <li><a href="/ejemplo-tienda" className="hover:text-white transition">Mini tienda</a></li>
              <li><a href="servicios" className="hover:text-white transition">Tienda full</a></li>
              <li><a href="servicios" className="hover:text-white transition">Mantención</a></li>
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