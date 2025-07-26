'use client';
import React from 'react';
import { useCart } from '../context/Carrito';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-gray-500 mb-4">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}