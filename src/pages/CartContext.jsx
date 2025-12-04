import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item (default +1)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item
  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Increase quantity
  const increaseQuantity = (name) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity (min 1)
  const decreaseQuantity = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
