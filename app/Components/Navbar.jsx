"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ShinyText from "./shiny-text";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [isPricingOpen, setIsPricingOpen] = useState(false)

  const menus = {
    Product: [
      {
        name: "Premium E-Commerce Solutions (Next.js)",
        href: "/why-nextjs",
        icon: "/online-shop.png",
      },
      {
        name: "Corporate & Company Websites",
        href: "/corporate-website",
        icon: "/team.png",
      },
      {
        name: "Portfolio & Personal Branding Sites",
        href: "/portfolio-website",
        icon: "/portfolio.png",
      },
      {
        name: "Landing Pages & Conversion Funnels",
        href: "/landing-page",
        icon: "/landing-page.png",
      },
    ],
    Integration: [
      
    ],
    Pricing: [],
    Portfolio: [],
    Blog: [],
    Company: [
      { name: "About Us", href: "/about-us", icon: "/info.png" },
      { name: "Documentation", href: "/documentation", icon: "/document.png" },
      { name: "Career", href: "/career", icon: "/job.png" },
    ],
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  const handlePricingModal = () => {
    setIsPricingOpen(true);
  };

  const closeModal = () => {
    setIsPricingOpen(false);
  };

  return (
    <div className="pb-12">
      <nav className="bg-white/70  backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl  mx-auto px-4 py-4 flex items-center justify-between sticky top-2">
          {/* Left logo */}
          <Link
            href="/"
            className="font-semibold text-gray-800 md:text-3xl text-2xl logoFont cursor-pointer tracking-wider"
          >
            Commeriva
          </Link>

          {/* Middle Nav - Desktop */}
          <nav className="relative">
            <div className="hidden md:flex space-x-10 font-medium text-gray-800 bg-transparent py-3 rounded-3xl px-10">
              {Object.keys(menus).map((menu) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setActive(menu)}
                  onMouseLeave={() => setActive(null)}
                >

                  {menu === "Pricing" ? (
                    <button onClick={handlePricingModal} className="hover:text-gray-500 poppins gap-1 flex text-sm items-center cursor-pointer">
                      Pricing
                    </button>
                  ): ""}

                  <Link
                    href={
                      menu === "Portfolio"
                        ? "/portfolio"
                        : menu === "Blog"
                        ? "/blogs"
                        : menu === "Integration"
                        ? "/integration"
                        : "/"
                    }
                    className="hover:text-gray-500 poppins gap-1 flex text-sm items-center"
                  >
                    {menu !== "Pricing" ? (menu): ""}
                    {/* Show arrow only if not Pricing, Blog, Portfolio */}
                    {!(
                      menu === "Pricing" ||
                      menu === "Blog" ||
                      menu === "Integration" ||
                      menu === "Portfolio"
                    ) && <IoIosArrowDown size={15} />}
                  </Link>

                   {/* Modal */}
      {isPricingOpen && (
        <div className="fixed inset-0 flex items-center h-screen justify-center bg-black/20 backdrop-blur-xs z-[999999999999999]">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 relative">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              ✕
            </button>

          
            <h2 className="text-xl font-semibold mb-4">💎 Pricing Plans</h2>
            <p className="text-gray-600 mb-6">
              Choose the plan that best fits your needs.
            </p>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg hover:border-blue-500">
                <h3 className="font-medium">Basic - $10/mo</h3>
                <p className="text-sm text-gray-500">Landing Page</p>
              </div>
              <div className="p-4 border rounded-lg hover:border-blue-500">
                <h3 className="font-medium">Pro - $25/mo</h3>
                <p className="text-sm text-gray-500">Business Page</p>
              </div>
              <div className="p-4 border rounded-lg hover:border-blue-500">
                <h3 className="font-medium">Enterprise - $50/mo</h3>
                <p className="text-sm text-gray-500">Portfolio</p>
              </div>
              <div className="p-4 border rounded-lg hover:border-blue-500">
                <h3 className="font-medium">Enterprise - $50/mo</h3>
                <p className="text-sm text-gray-500">Corporate Website</p>
              </div>
            </div>

            
          </div>
        </div>
      )}
   

                  {/* Dropdown with animation */}
                  <AnimatePresence>
                    {active === menu &&
                      !(
                        menu === "Pricing" ||
                        menu === "Blog" ||
                        menu === "Integration" ||
                        menu === "Portfolio"
                      ) && (
                        <div className="absolute left-0 top-full z-[9999]">
                          <div className="mt-5">
                            <motion.div
                              className="z-[99999]"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="bg-white border w-md shadow-lg rounded-lg p-3 z-[9999]">
                                <ul className="space-y-1">
                                  {menus[menu].map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        href={item.href}
                                        className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-gray-100 text-start poppins hover:text-gray-700"
                                      >
                                        <div className="p-2 border border-gray-200 shadow-sm rounded-full">
                                          <Image
                                          alt="icon"
                                            unoptimized
                                            width={200}
                                            height={200}
                                            className="w-8 p-1"
                                            src={item.icon}
                                          ></Image>
                                        </div>
                                        <span>{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      )}
                  </AnimatePresence>

                  

     
                </div>
              ))}
            </div>
          </nav>

          {/* Right buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">

           
            <button 
  
  className=" text-[#ffffff] bg-gray-900 px-5 py-2 rounded-sm text-xs font-semibold flex poppins justify-center items-center gap-1">
            <FaWhatsapp color="#ffffff" size={18} />
             Chat with us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="https://wa.me/+8801677182084"
              className="px-4 py-1 rounded-full border border-gray-300 shadow-xs flex items-center gap-1.5"
            >
              <ShinyText
                baseColor="#000000" // gray
                shineColor="#7c7dcf" // black
                speed={5}
              >
                Let's Talk
              </ShinyText>

              <div>
                <FaWhatsapp size={17} color="#25D366"></FaWhatsapp>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        
{/* Mobile Navigation - Sidebar with Overlay */} 
<AnimatePresence>
  {mobileMenuOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMobileMenuOpen(false)} // close on click
        className="fixed inset-0 h-screen bg-black/40 z-[9999]"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-[10000]"
      >
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="self-end mb-6 text-gray-700"
          >
            <X size={24} />
          </button>

          {/* Menu Items */}
          <div className="space-y-3">
            {Object.keys(menus).map((menu) => (
              <div key={menu}>
                <button
                  onClick={() => toggleMobileSubmenu(menu)}
                  className="w-full flex items-center justify-between px-2 py-2 text-left text-gray-700 hover:text-teal-600 poppins text-sm"
                >
                  <span>{menu}</span>
                  {!(
                    menu === "Pricing" ||
                    menu === "Blog" ||
                    menu === "Portfolio"
                  ) && (
                    <motion.div
                      animate={{
                        rotate: mobileActiveMenu === menu ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoIosArrowDown size={15} />
                    </motion.div>
                  )}
                </button>

                {/* Mobile Submenu */}
                <AnimatePresence>
                  {mobileActiveMenu === menu &&
                    !(
                      menu === "Pricing" ||
                      menu === "Blog" ||
                      menu === "Portfolio"
                    ) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 space-y-1 pb-2">
                          {menus[menu].map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center space-x-2 poppins px-3 py-1.5 rounded hover:bg-gray-100 text-start hover:text-gray-700"
                            >
                              <div className="p-2 border border-gray-200 shadow-sm rounded-full">
                                <Image
                                alt="icon"
                                  unoptimized
                                  width={200}
                                  height={200}
                                  className="w-8 p-1"
                                  src={item.icon}
                                />
                              </div>
                              <span className="text-sm">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>

         
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>


      </nav>
    </div>
  );
};

export default Navbar;
