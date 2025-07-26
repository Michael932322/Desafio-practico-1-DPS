'use client';
import { useCart } from '../../context/Carrito';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, total } = useCart();
  const router = useRouter();

  const confirmRemove = (id) => {
    if (confirm('¿Eliminar este producto del carrito?')) {
      removeFromCart(id);
    }
  };

  const confirmClear = () => {
    if (confirm('¿Vaciar el carrito completamente?')) {
      clearCart();
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🛒 Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center py-4">
                <img src={item.image} className="w-20 h-20 object-cover rounded-xl mr-4" />
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                  <p className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => confirmRemove(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={confirmClear}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Vaciar carrito
            </button>
            <div className="text-right">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={() => router.push('/invoice')}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Generar Factura
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}