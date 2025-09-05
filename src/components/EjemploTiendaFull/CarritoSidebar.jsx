import React from 'react';

export default function CarritoSidebar({ isOpen, onClose, items, onClear }) {
  const total = items.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">Carrito</h2>
        <button onClick={onClose} className="text-gray-600 text-lg hover:text-red-500">✕</button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-170px)]">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">Tu carrito está vacío.</p>
        ) : (
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between text-sm border-b pb-2">
                <span>{item.nombre}</span>
                <span className="text-red-600 font-semibold">${item.precio}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-4 border-t">
        <p className="font-semibold mb-2">Total: ${total}</p>
        <div className="flex gap-2">
          <button
            onClick={onClear}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-sm text-gray-800 py-2 rounded"
          >
            Vaciar
          </button>
          <a
            href="https://www.webpay.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm text-white py-2 text-center rounded"
          >
            Pagar con WebPay
          </a>
        </div>
      </div>
    </div>
  );
}
