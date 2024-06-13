import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import CartProvider from "./providers/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  </React.StrictMode>
);
