"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function FloatingCalendlyButton() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    window.open("https://calendly.com/squadinnovators/30min", "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-10 right-4 z-[10000] hidden md:block">

      <div className="relative group cursor-pointer">
        {/* Card */}
        <div className="flex items-center gap-3 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg p-3 transition-all duration-300 w-64 group-hover:w-72">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-full p-0.5"
          >
            <X size={16} />
          </button>

          {/* Profile Image */}
          <div onClick={handleClick} className="relative">
            <Image
              src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757837523.jpg" // replace with your image
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full border-2 border-blue-400"
            />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-blue-500 border-2 border-white dark:border-neutral-900 rounded-full"></span>
          </div>

          {/* Text */}
          <div onClick={handleClick} className="flex-1">
            <p className="text-sm font-semibold poppins text-gray-900 dark:text-gray-100">Get Free Consultancy</p>
            {/* Bottom Part (hidden until hover) */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-500 ease-in-out">
              <button
                onClick={handleClick}
                className="mt-1 flex poppins items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                Book a Slot →
                <Image
                  src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757837630.png"
                  alt="Calendly"
                  width={70}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
