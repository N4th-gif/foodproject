import React from "react";
import { useCart } from "../pages/CartContext";

export default function FoodCard({ name, price, img }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 text-center hover:shadow-2xl transition-all duration-300">
      <div className="bg-gray-100 rounded-lg h-56 flex items-center justify-center mb-5 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="max-h-full max-w-full object-contain transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-red-500 font-bold text-md mb-2">${price}</p>

      <button
        onClick={() => addToCart({ name, price, img })}
        className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

