import React from "react";
import { FaFacebookF, FaPhone, FaSquareInstagram, FaYoutube, FaClock } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

export default function Contact() {
  return (
    <section className="relative min-h-screen py-10 overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-4 shadow-xl">
            <FaPhone className="text-white w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Contact <span className="text-red-500">Pizza House</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to order by phone? We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Cards */}
            <div className="grid gap-4">
              {/* Email */}
              <div className="group bg-white rounded-2xl shadow-xl p-5 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-red-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition">
                    <IoIosMail className="w-6 h-6 text-red-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm">Email</h3>
                    <p className="text-lg font-medium text-gray-900">pizzahouse@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white rounded-2xl shadow-xl p-5 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-orange-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition">
                    <FaPhone className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm">Phone</h3>
                    <p className="text-lg font-medium text-gray-900">+855 962 397 439</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group bg-white rounded-2xl shadow-xl p-5 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-amber-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition">
                    <LuMapPin className="w-6 h-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm">Location</h3>
                    <p className="text-lg font-medium text-gray-900">#88, Monivong Blvd, Phnom Penh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <FaClock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Opening Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Monday - Sunday</span>
                  <span className="font-semibold text-lg">10:00 AM – 10:00 PM</span>
                </div>
                <p className="text-red-100 italic text-center pt-2">Fresh pizza served daily!</p>
              </div>
            </div>
          </div>

          {/* Social + Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">Follow Us</h3>
              <p className="text-gray-600 text-center mb-6 text-sm">
                Stay connected for daily specials & updates
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19iGao9qZJ/?mibextid=wwXIfr"
                  target="_blank"
                  className="group p-4 rounded-xl bg-blue-50 hover:bg-blue-500 transition-all hover:scale-105 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <FaFacebookF className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white">
                        Facebook
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-blue-100">
                        Follow us
                      </p>
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/chomnan_phanith?igsh=aXo1bGoybjl1NnFi"
                  target="_blank"
                  className="group p-4 rounded-xl bg-pink-50 hover:bg-pink-500 transition-all hover:scale-105 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <FaSquareInstagram className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white">Instagram</p>
                      <p className="text-sm text-gray-600 group-hover:text-pink-100">Follow us</p>
                    </div>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/TevadaNith"
                  target="_blank"
                  className="group p-4 rounded-xl bg-sky-50 hover:bg-sky-500 transition-all hover:scale-105 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <BiLogoTelegram className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white">Telegram</p>
                      <p className="text-sm text-gray-600 group-hover:text-sky-100">Join us</p>
                    </div>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@Nithnottvd"
                  target="_blank"
                  className="group p-4 rounded-xl bg-red-50 hover:bg-red-500 transition-all hover:scale-105 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <FaYoutube className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white">YouTube</p>
                      <p className="text-sm text-gray-600 group-hover:text-red-100">Subscribe</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-44 flex items-center justify-center">
              <div className="text-center">
                <LuMapPin className="w-10 h-10 text-red-500 mx-auto mb-2" />
                <p className="text-gray-700 font-semibold">Visit Our Location</p>
                <p className="text-gray-600 text-sm">#88, Monivong Blvd, Phnom Penh</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready for Your Perfect Pizza?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Call now for quick delivery or visit us for dine-in!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+855962397439"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:scale-105 transition"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:pizzahouse@gmail.com"
                className="border-2 border-red-500 text-red-500 px-6 py-3 rounded-xl font-bold text-lg hover:bg-red-500 hover:text-white transition"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}
