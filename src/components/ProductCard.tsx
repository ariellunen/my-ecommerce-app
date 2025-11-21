import type { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg
                 transition cursor-pointer"
    >
      <img
        src={product.thumbnailUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mb-4">{product.shortDescription}</p>

        <button
          className="inline-block py-2 px-6 border border-gray-300 rounded-full
                     text-gray-700 text-sm font-medium
                     hover:bg-blue-600 hover:text-white transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
