'use client'
import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const Navbar = () => {
  const [active, setActive] = useState(null);

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
      { name: "E-commerce", href: "/solutions/ecommerce" },
      { name: "Portfolio", href: "/solutions/portfolio" },
      { name: "Enterprise", href: "/solutions/enterprise" },
    ],
    Portfolio: [
      { name: "Latest Posts", href: "/blog" },
      { name: "Case Studies", href: "/blog/case-studies" },
      { name: "Tips & Guides", href: "/blog/guides" },
    ],
    Blog: [
      { name: "Free Plan", href: "/pricing/free" },
      { name: "Pro Plan", href: "/pricing/pro" },
      { name: "Enterprise", href: "/pricing/enterprise" },
    ],
    Company: [
      { name: "About Us", href: "/", icon: "/info.png" },
      { name: "Documentation", href: "/", icon: "/document.png" },
      { name: "Career", href: "/", icon: "/job.png" },
    ],
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Left logo */}
        <div className="font-bold tracking-widest text-xl text-black logo-font cursor-pointer">
          Commeriva
        </div>

        {/* Middle Nav */}
        <nav className="relative">
          <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActive(menu)}
                onMouseLeave={() => setActive(null)}
              >
                <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
                  {menu}
                  {/* Show arrow only if not Pricing, Blog, Portfolio */}
                  {!(menu === 'Pricing' || menu === 'Blog' || menu === 'Portfolio') && (
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

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-gray-50 border border-gray-200 px-5 p-2 rounded-full text-gray-700 text-sm font-semibold flex justify-center items-center gap-1.5">
            <Calendar size={18} />
            Book a appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
