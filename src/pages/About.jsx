import React from "react";

export default function About() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 z-0"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6">
            <span className="text-2xl text-white">🍕</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-red-500">Pizza House</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 transform hover:scale-[1.02] transition-all duration-300">
          <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-light italic">
            "Pizza House was founded in 2024 with a mission to bring authentic Italian flavors to Cambodia.
            Our pizzas are hand-tossed, topped with the freshest ingredients, and baked in traditional
            stone ovens. Every slice tells a story of passion, family, and flavor."
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Pizza Varieties" },
            { number: "100%", label: "Fresh Ingredients" },
            { number: "24/7", label: "Stone Oven Baking" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chef Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chef Image Card */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <img
                  src="https://i.pinimg.com/736x/82/13/fc/8213fc81ce70ff76253ab4c3d4b04488.jpg" // 🔁 Replace this with your chef's real photo
                  alt="Chef Nith"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Chef Description */}
          <div className="text-left">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Meet Our Master Chef
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Chef <span className="text-red-500">M.r. Nith</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chef Nith, originally from Cambodia, has over 15 years of experience creating
              authentic Italian pizzas. His journey began in the heart of Naples, where he
              mastered the art of traditional pizza-making under renowned Italian chefs.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              His secret sauce recipe, passed down through generations, and his exceptional
              dough-making skills are what make Pizza House truly unique. Every pizza that
              leaves our kitchen carries his personal touch and dedication to perfection.
            </p>

            {/* Chef Specialties */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Traditional Recipes", "Secret Sauce", "Hand-Tossed Dough", "Stone Oven Mastery"].map(
                (specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{specialty}</span>
                  </div>
                )
              )}
            </div>

            {/* Signature Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
              <span>🏆</span>
              <span className="font-semibold">Award-Winning Chef</span>
            </div>
          </div>
        </div>

        {/* Promise Section */}
        <div className="mt-20 text-center bg-white rounded-3xl shadow-2xl p-12 border border-red-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Promise to You</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We promise to deliver not just pizza, but an authentic Italian experience in every bite.
            From our family to yours, we commit to using only the finest ingredients, traditional
            methods, and heartfelt passion in everything we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
