import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Home,
  Utensils,
  ChefHat,
  Phone,
  LogIn,
  User,
} from "lucide-react";
import { useCart } from "../pages/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/menu", label: "Menu", icon: <Utensils size={18} /> },
    { path: "/about", label: "About", icon: <ChefHat size={18} /> },
    { path: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Account Created!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    setIsLoginOpen(false);
    setFormData({ name: "", email: "", password: "", phone: "" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-md">
              🍕
            </div>
            <span className="font-bold text-3xl text-gray-800">Pizza House</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold no-underline transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Cart */}
            <Link
              to="/cart"
              className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold no-underline transition-all duration-200 ${
                isActive("/cart")
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-500"
              }`}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Login Button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
            >
              <LogIn size={20} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="md:hidden flex items-center gap-3">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 rounded-xl bg-white text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Profile Icon */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="p-2 rounded-xl bg-white text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
            >
              <User size={22} />
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-slideDown">
            <div className="flex flex-col px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 py-3 px-3 rounded-xl font-semibold no-underline transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-500"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative animate-fadeIn">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
              Create Account
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        a {
          text-decoration: none !important;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
