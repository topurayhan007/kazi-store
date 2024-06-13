/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const cartInfo = { cartItems, setCartItems, cartTotal, setCartTotal };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
