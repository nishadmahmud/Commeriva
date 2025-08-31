"use client";
import { Calendar, ChevronRight, Mail, Menu, X } from "lucide-react";
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
      {
        name: "Payment Gateway Integration",
        href: "/payment-gateway",
        icon: "/payment-service.png",
      },
      {
        name: "Courier & Shipping Integration",
        href: "/coourier-shipping",
        icon: "/delivery.png",
      },
      {
        name: "Order & Inventory Management",
        href: "/order-inventory",
        icon: "/inventory-management.png",
      },
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

  return (
    <div className="pb-12">
      <nav className="bg-white/70 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left logo */}
          <Link
            href="/"
            className="font-medium text-gray-800 md:text-3xl text-2xl logoFont cursor-pointer"
          >
            Commeriva
          </Link>

          {/* Middle Nav - Desktop */}
          <nav className="relative">
            <div className="hidden md:flex space-x-10 font-medium text-gray-700">
              {Object.keys(menus).map((menu) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setActive(menu)}
                  onMouseLeave={() => setActive(null)}
                >
                  <Link
                    href={
                      menu === "Portfolio"
                        ? "/portfolio"
                        : menu === "Blog"
                        ? "/blogs"
                        : menu === "Pricing"
                        ? "/pricing"
                        : "/"
                    }
                    className="hover:text-gray-700 poppins flex text-sm items-center"
                  >
                    {menu}
                    {/* Show arrow only if not Pricing, Blog, Portfolio */}
                    {!(
                      menu === "Pricing" ||
                      menu === "Blog" ||
                      menu === "Portfolio"
                    ) && <IoIosArrowDown size={15} />}
                  </Link>

                  {/* Dropdown with animation */}
                  <AnimatePresence>
                    {active === menu &&
                      !(
                        menu === "Pricing" ||
                        menu === "Blog" ||
                        menu === "Portfolio"
                      ) && (
                        <div className="absolute left-0 top-full z-[9999999999]">
                          <div className="mt-5">
                            <motion.div
                              className="z-[9999999999]"
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
                                        className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-gray-100 text-start poppins hover:text-gray-700"
                                      >
                                        <div className="p-2 border border-gray-200 shadow-sm rounded-full">
                                          <Image
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
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-button border border-teal-100 px-5 p-2 rounded-full text-slate-700 text-sm font-semibold flex poppins justify-center items-center gap-1.5">
              <Calendar color="gray" size={18} />
              Let's Discuss
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
                        className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-700 hover:text-teal-600 poppins"
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
                                        unoptimized
                                        width={200}
                                        height={200}
                                        className="w-8 p-1"
                                        src={item.icon}
                                      ></Image>
                                    </div>
                                    <span className="text-sm">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>

                      {(menu === "Pricing" ||
                        menu === "Blog" ||
                        menu === "Portfolio") && (
                        <div className="ml-4 space-y-1 pb-2">
                          {menus[menu].map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="block px-3 py-1.5 text-sm text-gray-600 hover:text-teal-600 "
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
                      <FaWhatsapp color="#25D366" size={18} />
                      Let's Talk
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
