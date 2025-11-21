import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";
type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <img
        src={product.thumbnailUrl}
        alt=""
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>{product.price} ILS</p>
    </div>
  );
}
