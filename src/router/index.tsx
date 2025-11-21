import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/productList";
import ProductDetails from "../pages/productDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
