import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Left logo */}
        <div className="font-bold text-xl text-black cursor-pointer">
          Commeriva
        </div>

        {/* Middle nav links */}
        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <Link href="/">
            Developers
          </Link>
          <Link href="/">
            Documentation
          </Link>
          <Link href="/">
            Product
          </Link>
          <Link href="/">
            Solutions
          </Link>
          <Link href="/">
            Blog
          </Link>
          <Link href="/">
            Pricing
          </Link>
        </div>

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-1.5 pb-2 border border-gray-300 rounded-md text-black font-semibold hover:bg-gray-100 transition"
          >
            Sign up
          </button>
          <button
            className="px-4 py-1.5 pb-2 bg-black border text-white rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Contact sales
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
