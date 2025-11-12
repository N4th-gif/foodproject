import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gray-500 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Navigation Links */}
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="border border-black rounded-4xl px-4 py-2 text-white font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="border border-black rounded-4xl px-4 py-2 text-white font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="border border-black rounded-4xl px-4 py-2 text-white font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: Logo */}
      <div className="flex items-center">
        <img
          src="https://i.pinimg.com/736x/f6/a4/f5/f6a4f5c3f3709964c536ee8ba91b4e01.jpg" // change this path to your logo image
          alt="Logo"
          className="w-20 h-20 rounded-full border border-gray-300"
        />
      </div>
    </nav>
  );
}

export default Nav;
