'use client'
import { Calendar, ChevronRight, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import ShinyText from './shiny-text';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);

  const menus = {
    Product: [
      { name: "Premium E-Commerce Solutions (Next.js)", href: "/", icon: '/online-shop.png' },
      { name: "Corporate & Company Websites", href: "/", icon: "/team.png" },
      { name: "Portfolio & Personal Branding Sites", href: "/", icon: "/portfolio.png" },
      { name: "Landing Pages & Conversion Funnels", href: "/", icon: "/landing-page.png" },
    ],
    Integration: [
      { name: "Payment Gateway Integration", href: "/", icon: "/payment-service.png" },
      { name: "Courier & Shipping Integration", href: "/", icon: "/delivery.png" },
      { name: "Order & Inventory Management", href: "/", icon: "/inventory-management.png" },
    ],
    Pricing: [
    
    ],
    Portfolio: [
      
    ],
    Blog: [
    
    ],
    Company: [
      { name: "About Us", href: "/", icon: "/info.png" },
      { name: "Documentation", href: "/", icon: "/document.png" },
      { name: "Career", href: "/", icon: "/job.png" },
    ],
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left logo */}
        <Link href='/' className="font-bold tracking-widest md:text-xl text-black logo-font cursor-pointer">
          Commeriva
        </Link>

        {/* Middle Nav - Desktop */}
        <nav className="relative">
          <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActive(menu)}
                onMouseLeave={() => setActive(null)}
              >
                <Link
  href={menu === "Portfolio" ? "/portfolio" : "/"}
  className="hover:text-gray-600 montserrat flex items-center gap-1"
>
  {menu}
  {/* Show arrow only if not Pricing, Blog, Portfolio */}
  {!(menu === "Pricing" || menu === "Blog" || menu === "Portfolio") && (
    <IoIosArrowDown className="mt-1" size={15} />
  )}
</Link>


                {/* Dropdown with animation */}
                <AnimatePresence>
                  {active === menu && !(menu === 'Pricing' || menu === 'Blog' || menu === 'Portfolio') && (
                    <div className='absolute left-0 top-full z-[9999999999]'>
                      <div className="mt-5">
                      <motion.div
                      className='z-[9999999999]'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="bg-white border w-md shadow-lg rounded-lg p-3 z-[9999999999]">
                          <ul className="space-y-1">
                            {menus[menu].map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item.href}
                                  className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-gray-100 text-start hover:text-gray-700"
                                >
                                  <div className='p-2 border border-gray-200 shadow-sm rounded-full'>
                                    <Image unoptimized width={200} height={200} className='w-8 p-1' src={item.icon}></Image>
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
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gray-50 border border-gray-200 px-5 p-2 rounded-full text-gray-700 text-sm font-semibold flex justify-center items-center gap-1.5">
            <Calendar color='gray' size={18} />
            Let's Discuss
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
<Link href='https://wa.me/+8801677182084' className='px-6 py-1 rounded-full border border-gray-300 shadow-xs flex items-center gap-1.5'>
  <ShinyText
  baseColor="#000000"   // gray
  shineColor="#7c7dcf"  // black
  speed={5}
>
Let's Talk
</ShinyText>

<div>
          <FaWhatsapp size={19} color='#25D366'></FaWhatsapp>
  
  </div>  
  </Link>        
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-2">
                {Object.keys(menus).map((menu) => (
                  <div key={menu}>
                    <button
                      onClick={() => toggleMobileSubmenu(menu)}
                      className="w-full flex items-center justify-between px-3 py-3 text-left font-semibold text-gray-700 hover:text-blue-600"
                    >
                      <span>{menu}</span>
                      {!(menu === 'Pricing' || menu === 'Blog' || menu === 'Portfolio') && (
                        <motion.div
                          animate={{ rotate: mobileActiveMenu === menu ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IoIosArrowDown size={15} />
                        </motion.div>
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {mobileActiveMenu === menu && !(menu === 'Pricing' || menu === 'Blog' || menu === 'Portfolio') && (
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
                                className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-gray-100 text-start hover:text-gray-700"
                              >
                                <div className='p-2 border border-gray-200 shadow-sm rounded-full'>
                                  <Image unoptimized width={200} height={200} className='w-8 p-1' src={item.icon}></Image>
                                </div>
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Direct links for Pricing, Blog, Portfolio */}
                    {(menu === 'Pricing' || menu === 'Blog' || menu === 'Portfolio') && (
                      <div className="ml-4 space-y-1 pb-2">
                        {menus[menu].map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="block px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Button */}
                <div className="pt-4 hidden md:block border-t border-gray-200 mt-4">
                  <button className="w-full bg-gray-50 border border-gray-200 px-5 py-3 rounded-full text-gray-700 text-sm font-semibold flex justify-center items-center gap-1.5">
                    <FaWhatsapp color='#25D366' size={18} />
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;