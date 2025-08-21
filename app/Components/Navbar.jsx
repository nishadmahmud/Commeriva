import { Calendar, LogIn } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Left logo */}
        <div className="font-bold tracking-widest text-xl text-black logo-font cursor-pointer">
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
          <button className='bg-gray-50 border border-gray-200 px-5 p-2 rounded-full text-gray-700 text-sm flex justify-center items-center gap-1.5'>
            <Calendar size={18}></Calendar>
            Book a appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
