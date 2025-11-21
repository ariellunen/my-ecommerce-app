import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product.json";
import type { Product } from "../types/product";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">
        <button
          className="mb-6 text-blue-600 hover:underline"
          onClick={() => navigate("/")}
        >
          ← Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* IMAGE */}
          <div>
            <img
              src={product.thumbnailUrl}
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg mb-4">
              {product.shortDescription}
            </p>

            <p className="text-gray-500 mb-6 leading-relaxed">
              {product.longDescription}
            </p>

            <p className="text-gray-800 font-semibold text-xl mb-6">
              Price: {product.price} ILS
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Category: <span className="font-medium">{product.category}</span>
            </p>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>

          <div className="space-y-4">
            {product.reviews.map((review) => (
              <div
                key={review.username}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <p className="font-semibold text-gray-700">{review.username}</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
