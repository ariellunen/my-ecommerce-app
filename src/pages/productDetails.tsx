import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product.json";
import type { Product } from "../types/product";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/")}>Back</button>

      <h1>{product.name}</h1>
      <img
        src={product.thumbnailUrl}
        alt=""
        style={{ width: "400px", maxWidth: "100%", margin: "20px 0" }}
      />

      <p>Price: {product.price} ILS</p>
      <p>{product.shortDescription}</p>
      <p>{product.longDescription}</p>
      <p>Category: {product.category}</p>

      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((r) => (
          <li key={r.username}>
            {r.username}: {r.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
