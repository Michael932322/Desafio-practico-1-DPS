import ProductCard from '../Components/ProductsCarts';
import products from '../data/Prodcutos.json';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🏋️ Bienvenido a TiendaGYM
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto px-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}