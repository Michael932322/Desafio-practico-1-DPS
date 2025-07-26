'use client';
import { useCart } from '../../context/Carrito';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function InvoicePage() {
  const { cartItems, total, clearCart } = useCart();
  const invoiceRef = useRef();
  const router = useRouter();

  const downloadPDF = () => {
    html2canvas(invoiceRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('factura_gym.pdf');
    });

    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <p>No hay productos para facturar.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 shadow rounded-xl">
      <div ref={invoiceRef} className="p-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">🏋️ Factura TiendaGYM</h1>
        <ul className="divide-y divide-gray-200 mb-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="text-right text-lg font-semibold text-gray-800">
          Total: ${total.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 mt-2">Gracias por tu compra 💪</p>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Descargar Factura PDF
      </button>
    </div>
  );
}