import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        FoodShop
      </div>
      <div className="flex-grow max-w-md w-full mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-blue-600 cursor-pointer"><Link to="/about">About</Link></li>
        <li className="hover:text-blue-600 cursor-pointer"><Link to="/services">Services</Link></li>
        <li className="hover:text-blue-600 cursor-pointer"><Link to="/contact">Contact us</Link></li>
      </ul>
      <button className="ml-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Login
     </button>
    </nav>

  );
};

export default Navbar;