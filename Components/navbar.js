'use client';
import Link from 'next/link';
import { useCart } from '../context/Carrito';

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold hover:underline">
        TiendaGYM 💪
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/Carrito" className="relative hover:underline">
          🛒 Carrito
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2">
              {totalItems}
            </span>
          )}
        </Link>
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/registro" className="hover:underline">Registro</Link>
      </div>
    </nav>
  );
}