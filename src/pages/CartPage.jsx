import React, { useState } from "react";
import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    setShowPaymentOptions(true);
  };

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert("⚠️ Please choose a payment method before continuing.");
      return;
    }

    setIsProcessing(true);

    // Simulate payment delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setShowPaymentOptions(false);

    alert(`✅ Payment Successful via ${selectedMethod}!\n\n📦 Order Summary:\nTotal: $${total.toFixed(2)}\nItems: ${cart.length}\n\nThank you for your purchase! 🛍️`);
    clearCart();
  };

  const paymentMethods = [
    {
      id: "aba",
      name: "ABA Pay",
      description: "Fast & Secure Banking",
      icon: "",
      popular: true,
    },
    {
      id: "khqr",
      name: "KHQR",
      description: "Cambodia's QR Standard",
      icon: "",
      popular: false,
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, UnionPay",
      icon: "",
      popular: true,
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "International Payments",
      icon: "",
      popular: false,
    },
    {
      id: "delivery",
      name: "Pay on Delivery",
      description: "Cash when you receive",
      icon: "",
      popular: false,
    },
  ];

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="text-5xl">🛒</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Looks like you haven't added any items to your cart yet. Start shopping to
            discover amazing products!
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600 text-2xl">Review your items and proceed to checkout</p>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-2">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-bold text-gray-800">
              Your Items <span className="text-red-600">({cart.length})</span>
            </h4>
            <button
              onClick={clearCart}
              className="text-black-500 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-gray-100"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-l g font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-xl">Quantity: {item.quantity}</p>
                    <p className="text-red-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                  title="Remove item"
                >
                  <span className="text-gray-400 group-hover:text-red-500 text-3xl font-bold transition-colors duration-200">
                    ✕
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-3 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-2xl">Subtotal</span>
              <span className="text-gray-800 font-semibold text-2xl">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-xl">Shipping</span>
              <span className="text-green-600 font-semibold text-xl">Free</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold mt-3">
              <span className="text-gray-800 text-3xl">Total Amount</span>
              <span className="text-red-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-lg text-gray-600">
              Secure checkout • Encrypted payment • 24/7 Support
            </div>
            <button
              onClick={handleBuyNow}
              className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold text-lg w-full sm:w-auto"
            >
              🛍️ Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentOptions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Header */}
            <div className="bg-red-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Choose Payment Method</h3>
              <p className="text-red-100 mt-2">Select and then confirm your payment</p>
            </div>

            {/* Payment Options */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {isProcessing ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600 font-semibold">
                    Processing {selectedMethod}...
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Please wait while we secure your payment
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.name)}
                      className={`w-full ${
                        selectedMethod === method.name
                          ? "bg-red-600 text-white scale-[1.02] shadow-md"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      } py-4 px-6 rounded-xl transition-all duration-200 border border-gray-200 text-left flex items-center justify-between group`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <div className="font-bold text-lg">{method.name}</div>
                          <div className={`text-sm ${
                            selectedMethod === method.name ? "text-white/90" : "text-gray-600"
                          }`}>
                            {method.description}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {method.popular && (
                          <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            POPULAR
                          </span>
                        )}
                        {selectedMethod === method.name && (
                          <span className="bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                            SELECTED
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Payment */}
            {!isProcessing && (
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <button
                  onClick={handlePayment}
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedMethod}
                >
                  {selectedMethod ? `Confirm & Pay with ${selectedMethod}` : "Select a Payment Method"}
                </button>
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 mt-2 transition-colors duration-200"
                  disabled={isProcessing}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}