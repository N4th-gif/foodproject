import { Link } from "react-router-dom";
import { Star, Truck, Clock, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-40"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-10">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-6xl text-transparent">
              Fresh & Fast Food
            </span>
            <br />
            <span className="text-gray-900 text-4xl">Delivered To You 🍕</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Your favorite meals, drinks, and snacks all is here!
          </p>

          {/* <div className="flex justify-center gap-4">
            <Link
              to="/menu"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Menu
            </Link>
            <Link
              to="/cart"
              className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Link>
          </div> */}
        </div>

        {/* Food Image Collage */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
          {[
            { src: "https://i.pinimg.com/1200x/96/37/3e/96373e7f8f12e5dec4f1378c4f0e899d.jpg", label: "Pizza" },
            { src: "https://i.pinimg.com/1200x/c4/40/0f/c4400f1f2c8441cb7c6eea6844a79135.jpg", label: "Burger" },
            { src: "https://i.pinimg.com/1200x/c5/61/8a/c5618a4fb73e9e3a30c42844f7721d17.jpg", label: "Pasta" },
            { src: "https://i.pinimg.com/1200x/8d/de/c1/8ddec1ae7c20e4ca2dd9899f47edb2b3.jpg", label: "Drinks" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-7">
            <Link
              to="/menu"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Menu
            </Link>
            <Link
              to="/cart"
              className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Link>
          </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl">
          {[
            { icon: Truck, title: "Free Delivery" },
            { icon: Clock, title: "20-30 min Fast" },
            { icon: Shield, title: "Secure Payment" },
            { icon: Star, title: "9.9 Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <item.icon size={28} className="text-orange-500 mb-2" />
              <p className="font-semibold text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
