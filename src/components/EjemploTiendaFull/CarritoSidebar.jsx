import React, { useEffect, useRef } from "react";

export default function CarritoSidebar({ isOpen, onClose, items, onClear }) {
  const total = items.reduce((sum, item) => sum + item.precio, 0);
  const fmtCLP = (n) => n.toLocaleString("es-CL");
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Cerrar con Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Foco al abrir
  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop clickeable en móviles/escritorio */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="carrito-title"
        className={`fixed top-0 right-0 h-dvh max-h-screen bg-white shadow-lg transform transition-transform duration-300 z-50
        w-full sm:w-96  /* full en móvil, 384px en sm+ */
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          paddingBottom: "env(safe-area-inset-bottom)", // iOS safe-area
        }}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 id="carrito-title" className="text-lg font-bold">
            Carrito
          </h2>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="text-gray-600 text-lg hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            aria-label="Cerrar carrito"
          >
            ✕
          </button>
        </div>

        {/* Lista */}
        <div className="p-4 overflow-y-auto h-[calc(100dvh-170px)]">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={`${item.nombre}-${idx}`} className="flex justify-between items-start text-sm border-b pb-2">
                  <span className="pr-3 leading-5">{item.nombre}</span>
                  <span className="text-red-600 font-semibold whitespace-nowrap">${fmtCLP(item.precio)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer/acciones */}
        <div className="p-4 border-t">
          <p className="font-semibold mb-3">
            Total: <span className="text-red-600">${fmtCLP(total)}</span>
          </p>

          <div className="flex gap-2">
            <button
              onClick={onClear}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 py-2 rounded transition"
              disabled={items.length === 0}
            >
              Vaciar
            </button>

            {/* Checkout WebPay (placeholder) */}
            <a
              href="https://www.webpay.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 bg-blue-600 hover:bg-blue-700 text-sm text-white py-2 text-center rounded transition ${
                items.length === 0 ? "pointer-events-none opacity-60" : ""
              }`}
              aria-disabled={items.length === 0}
            >
              Pagar con WebPay
            </a>
          </div>

          {/* Checkout por WhatsApp con resumen (opcional útil) */}
          <a
            href={`https://wa.me/56912345678?text=${encodeURIComponent(
              `Hola, quiero comprar:\n${items
                .map((i) => `• ${i.nombre} — $${fmtCLP(i.precio)}`)
                .join("\n")}\n\nTotal: $${fmtCLP(total)}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-3 block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded transition ${
              items.length === 0 ? "pointer-events-none opacity-60" : ""
            }`}
            aria-disabled={items.length === 0}
          >
            Pedir por WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
