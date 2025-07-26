'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Completa todos los campos');
    alert('¡Inicio de sesión exitoso!');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 text-black">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Iniciar Sesión</h2>
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-blue-500 text-black"
          type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-blue-500"
          type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Entrar
        </button>
        <p className="text-sm text-center mt-4">
          ¿No tienes cuenta? <a href="/registro" className="text-blue-600 underline">Regístrate</a>
        </p>
      </form>
    </div>
  );
}