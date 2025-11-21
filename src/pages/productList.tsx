import { useState } from "react";
import products from "../data/product.json";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

export default function ProductsList() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p: Product) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
