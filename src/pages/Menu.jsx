import React from "react";
import FoodCard from "./FoodCard.jsx";

export default function Menu() {
  const pizzas = [
    { name: "Margherita Pizza", price: 8.99, img: "https://i.pinimg.com/1200x/9d/2f/62/9d2f62b46c1a23bd26df0d455c3a388f.jpg" },
    { name: "Pepperoni Pizza", price: 9.99, img: "https://i.pinimg.com/736x/53/df/5d/53df5dbaa0f301ff3b7cca44579b5681.jpg" },
    { name: "BBQ Chicken Pizza", price: 10.99, img: "https://i.pinimg.com/1200x/ec/1f/d3/ec1fd366a2a14042715fefeb346f5814.jpg" },
    { name: "Veggie Delight Pizza", price: 7.99, img: "https://i.pinimg.com/1200x/7c/c1/8e/7cc18e3ae1d1be0e03edd5c786253a05.jpg" },
    { name: "Hawaiian Pizza", price: 9.49, img: "https://i.pinimg.com/1200x/9d/b7/50/9db750a4eafcf1d1fb551520018c8bf6.jpg" },
    { name: "Cheese Lovers Pizza", price: 8.49, img: "https://i.pinimg.com/736x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg" },
    { name: "Meat Feast Pizza", price: 11.99, img: "https://i.pinimg.com/1200x/76/33/51/76335164adeba1a3f9b09478e7e1077e.jpg" },
    { name: "Seafood Pizza", price: 12.49, img: "https://i.pinimg.com/1200x/02/d6/7b/02d67b5e95b615da392d45a019e651af.jpg" },
  ];

  const burgers = [
    { name: "Classic Beef Burger", price: 6.99, img: "https://i.pinimg.com/736x/7d/c7/ad/7dc7ad85fb9531ace19fd72df61ad32c.jpg" },
    { name: "Cheese Burger", price: 7.49, img: "https://i.pinimg.com/1200x/aa/f3/aa/aaf3aa4e15769c860aff8b2a22edfc78.jpg" },
    { name: "Bacon Burger", price: 7.99, img: "https://i.pinimg.com/1200x/b4/a5/d3/b4a5d33dc56539ce51653d2065f5c168.jpg" },
    { name: "Chicken Burger", price: 6.49, img: "https://i.pinimg.com/736x/c2/4a/09/c24a0909d1ed31fa35c9b2c551aa4c84.jpg" },
  ];

  const pasta = [
    { name: "Spaghetti Bolognese", price: 7.99, img: "https://i.pinimg.com/736x/d5/1f/5e/d51f5e1604c26af9817be27ce00dad68.jpg" },
    { name: "Carbonara", price: 8.49, img: "https://i.pinimg.com/1200x/12/8a/ba/128abaf58d0b4e95e14fea5bdd2a9aef.jpg" },
    { name: "Seafood Pasta", price: 9.49, img: "https://i.pinimg.com/1200x/4a/af/5c/4aaf5cb2f245c0ff2505a36237c0d02a.jpg" },
    { name: "Creamy Alfredo", price: 8.99, img: "https://i.pinimg.com/1200x/04/f4/9e/04f49ee67da37e9632d74daf3aa8b0e8.jpg" },
  ];

  const drinks = [
    { name: "Coca Cola", price: 1.99, img: "https://i.pinimg.com/736x/42/a9/17/42a917857e727dcd8cd56ea471d8f6f2.jpg" },
    { name: "Lemon Tea", price: 2.49, img: "https://i.pinimg.com/1200x/2d/1c/ef/2d1cef683fa3a1e33e2e3ef60fe1f934.jpg" },
    { name: "Orange Juice", price: 2.99, img: "https://i.pinimg.com/736x/08/a5/e7/08a5e707d9f0092ed12992c3e6db5c53.jpg" },
    { name: "Water Bottle", price: 0.99, img: "https://images.deliveryhero.io/image/nv/Cambodia/Big-C-Supercenter-Poipet/New-01/8846008598888.jpg?height=176" },
  ];

  return (
    <section className="p-10 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <h1 className="text-xl font-bold text-center mb-12 text-red-500 drop-shadow-md">
        Our Menu
      </h1>

      {/* Pizzas */}
      <h3 className="text-2xl font-semibold mb-4 text-red-400">🍕 Pizzas</h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-12">
        {pizzas.map((f, i) => (
          <FoodCard key={i} name={f.name} price={f.price} img={f.img} />
        ))}
      </div>

      {/* Burgers */}
      <h3 className="text-2xl font-semibold mb-4 text-red-400">🍔 Burgers</h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-12">
        {burgers.map((f, i) => (
          <FoodCard key={i} name={f.name} price={f.price} img={f.img} />
        ))}
      </div>

      {/* Pasta */}
      <h3 className="text-2xl font-semibold mb-4 text-red-400">🍝 Pasta</h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-12">
        {pasta.map((f, i) => (
          <FoodCard key={i} name={f.name} price={f.price} img={f.img} />
        ))}
      </div>

      {/* Drinks */}
      <h3 className="text-2xl font-semibold mb-4 text-red-400">🥤 Drinks</h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {drinks.map((f, i) => (
          <FoodCard key={i} name={f.name} price={f.price} img={f.img} />
        ))}
      </div>
    </section>
  );
}
