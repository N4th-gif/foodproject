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
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useCart } from "../pages/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    rememberMe: false,
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear errors when user starts typing
    if (authError) setAuthError("");
  };

  const validateForm = () => {
    if (!formData.email) {
      return "Email is required";
    }
    if (!formData.password) {
      return "Password is required";
    }
    if (authMode === "signup") {
      if (!formData.name) return "Full name is required";
      if (formData.password.length < 6) return "Password must be at least 6 characters";
      if (!formData.phone) return "Phone number is required";
    }
    return null;
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setAuthError(validationError);
      return;
    }

    setIsLoading(true);
    setAuthError("");
    setAuthSuccess("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (authMode === "login") {
        // Simulate login logic
        console.log("Login attempt:", { email: formData.email, rememberMe: formData.rememberMe });
        setAuthSuccess("Welcome back! Successfully logged in.");
        
        // Close modal after success
        setTimeout(() => {
          setIsAuthOpen(false);
          setAuthSuccess("");
        }, 2000);
      } else {
        // Simulate signup logic
        console.log("Signup attempt:", formData);
        setAuthSuccess("Account created successfully! Welcome to Pizza House.");
        
        // Switch to login mode after successful signup
        setTimeout(() => {
          setAuthMode("login");
          setAuthSuccess("");
          setFormData(prev => ({ ...prev, name: "", phone: "", password: "" }));
        }, 2000);
      }
    } catch (error) {
      setAuthError(authMode === "login" 
        ? "Invalid email or password. Please try again."
        : "An error occurred during registration. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const switchAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
    setAuthError("");
    setAuthSuccess("");
    setFormData(prev => ({ ...prev, password: "" }));
  };

  const handleForgotPassword = () => {
    if (!formData.email) {
      setAuthError("Please enter your email address to reset password.");
      return;
    }
    // Simulate forgot password logic
    setAuthSuccess(`Password reset instructions sent to ${formData.email}`);
  };

  const handleSocialLogin = (provider) => {
    setAuthError("");
    setAuthSuccess(`Redirecting to ${provider}...`);
    // In a real app, this would redirect to OAuth flow
    console.log(`Social login with ${provider}`);
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
            <span className="font-bold text-2xl text-gray-800">Pizza House</span>
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

            {/* Auth Button */}
            <button
              onClick={() => setIsAuthOpen(true)}
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
              <ShoppingCart size={25} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Profile Icon */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="p-2 rounded-xl bg-white text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
            >
              <User size={25} />
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

      {/* Authentication Modal */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {authMode === "login" ? "Welcome Back" : "Create Account"}
              </h2>
              <button
                onClick={() => {
                  setIsAuthOpen(false);
                  setAuthError("");
                  setAuthSuccess("");
                }}
                className="text-gray-500 hover:text-red-500 transition p-1 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Social Login
            <div className="p-6 pb-4">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => handleSocialLogin("Google")}
                  className="flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full" />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  onClick={() => handleSocialLogin("Facebook")}
                  className="flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-5 h-5 bg-blue-600 rounded-full" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative bg-white px-4 text-sm text-gray-500">
                  or continue with email
                </div>
              </div>
            </div> */}

            {/* Form */}
            <form onSubmit={handleAuthSubmit} className="p-6 pt-0">
              {/* Error/Success Messages */}
              {authError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700 text-sm">
                  <AlertCircle size={16} />
                  {authError}
                </div>
              )}

              {authSuccess && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-700 text-sm">
                  <CheckCircle size={16} />
                  {authSuccess}
                </div>
              )}

              <div className="space-y-4">
                {/* Name Field (Signup only) */}
                {authMode === "signup" && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required={authMode === "signup"}
                      className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Email Field */}
                <div className="relative mt-3">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>

                {/* Phone Field (Signup only) */}
                {authMode === "signup" && (
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required={authMode === "signup"}
                      className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                )}

                {/* Password Field */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Remember Me & Forgot Password (Login only) */}
                {authMode === "login" && (
                  <div className="flex justify-between items-center ">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-red-500 focus:ring-red-400"
                      />
                    Remember me
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-red-500 hover:text-red-600 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {authMode === "login" ? "Signing in..." : "Creating account..."}
                  </div>
                ) : (
                  authMode === "login" ? "Sign In" : "Create Account"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="p-6 pt-4 border-t border-gray-200">
              <div className="text-center text-gray-600">
                <span>
                  {authMode === "login" ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  onClick={switchAuthMode}
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  {authMode === "login" ? "Sign up" : "Sign in"}
                </button>
              </div>
            </div>
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