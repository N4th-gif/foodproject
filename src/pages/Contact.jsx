import React from "react";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, Send } from "lucide-react"; // ✅ Replaced Twitter with Send (Telegram icon)

export default function Contact() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-6 shadow-2xl">
            <Phone className="text-white w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-red-500">Pizza House</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to order by phone? We're here to serve you the perfect slice!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Email Card */}
              <div className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-red-500">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm uppercase tracking-wide">Email</h3>
                    <p className="text-lg font-medium text-gray-900">pizzahouse@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-orange-500">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm uppercase tracking-wide">Phone</h3>
                    <p className="text-lg font-medium text-gray-900">+855 962 397 439</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-amber-500">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm uppercase tracking-wide">Location</h3>
                    <p className="text-lg font-medium text-gray-900">#88, Monivong Blvd, Phnom Penh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-medium">Monday - Sunday</span>
                  <span className="font-semibold text-lg">10:00 AM – 10:00 PM</span>
                </div>
                <div className="text-center pt-2">
                  <p className="text-red-100 italic">Fresh pizza served daily!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Map Section */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Follow Our Journey</h3>
              <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-base">Stay connected for daily specials and updates</p>

              {/* Desktop */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19iGao9qZJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-blue-50 hover:bg-blue-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-blue-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Facebook</p>
                      <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors duration-300">Follow us</p>
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/chomnan_phanith?igsh=aXo1bGoybjl1NnFi&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-pink-50 hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-pink-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Instagram</p>
                      <p className="text-sm text-gray-600 group-hover:text-pink-100 transition-colors duration-300">Follow us</p>
                    </div>
                  </div>
                </a>

                {/* Telegram (replaces Twitter) */}
                <a
                  href="https://t.me/TevadaNith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-sky-50 hover:bg-sky-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-sky-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Send className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">Telegram</p>
                      <p className="text-sm text-gray-600 group-hover:text-sky-100 transition-colors duration-300">Join us</p>
                    </div>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@Nithnottvd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-red-50 hover:bg-red-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-red-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">YouTube</p>
                      <p className="text-sm text-gray-600 group-hover:text-red-100 transition-colors duration-300">Subscribe</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-semibold">Visit Our Location</p>
                  <p className="text-gray-600 text-sm">#88, Monivong Blvd, Phnom Penh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-red-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Perfect Pizza?</h3>
            <p className="text-xl text-gray-600 mb-6">Call now for quick delivery or visit us for a dine-in experience!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+855962397439"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                📞 Call Now to Order
              </a>
              <a
                href="mailto:pizzahouse@gmail.com"
                className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blob Animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
