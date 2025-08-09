import React from "react";
import { Play } from "lucide-react";

const HeroPage = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b border-gray-400">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 animate-slowmove" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black max-w-8xl montserrat">
          More than authentication, <br /> Complete User Management
        </h1>
        <p className="mt-6 text-lg max-w-3xl text-gray-600">
          Need more than sign-in? Clerk gives you full stack auth and user
          management — so you can launch faster, scale easier, and stay
          focused on building your business.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
          <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition cursor-pointer">
            Start building for free
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-black transition cursor-pointer">
            <Play size={25} className="bg-gray-100 rounded-full p-2" />
            Watch demo <span className="text-gray-500 text-sm">2 min</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
