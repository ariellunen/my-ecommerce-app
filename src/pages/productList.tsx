import { useState } from "react";
import products from "../data/product.json";
import type { Product } from "../types/product";
import ProductCard from "../ProductCard";

export default function ProductsList() {
  const [search, setSearch] = useState("");

  const query = search.toLowerCase().trim();

  const filtered = products.filter(
    (p: Product) =>
      p.name.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query)
  );

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          My E-Commerce Shop
        </h1>

        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-10">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
