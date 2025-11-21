import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/productList";
import ProductDetails from "../pages/productDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);
