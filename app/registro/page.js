'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return alert('Completa todos los campos');
    alert('¡Registro exitoso!');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4">
      <form onSubmit={handleRegister} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Crear Cuenta</h2>
        <input
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-green-500 text-black"
          type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-green-500 text-black"
          type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-green-500 text-black"
          type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Registrar
        </button>
        <p className="text-sm text-center mt-4">
          ¿Ya tienes cuenta? <a href="/login" className="text-green-600 underline">Inicia sesión</a>
        </p>
      </form>
    </div>
  );
}