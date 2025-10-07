"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ShinyText from "./shiny-text";
import { useRouter, usePathname } from "next/navigation";
import { Building } from "lucide-react";
import { UserStar } from "lucide-react";
import { Store } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const menus = {
    Product: [
      {
        name: "Premium E-Commerce Solutions (Next.js)",
        href: "/why-nextjs",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408131.png",
      },
      {
        name: "Corporate & Company Websites",
        href: "/corporate-website",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408148.png",
      },
      {
        name: "Portfolio & Personal Branding Sites",
        href: "/portfolio-website",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408169.png",
      },
      {
        name: "Landing Pages & Conversion Funnels",
        href: "/landing-page",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408187.png",
      },
    ],
    Integration: [],
    Pricing: [
      {
        name: "Corporate Website",
        href: "/pricing?category=Corporate-Website",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408148.png",
      },
      {
        name: "Portfolio & Personal Branding",
        href: "/pricing?category=Portfolio",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408169.png",
      },
      {
        name: "E-Commerce Solutions",
        href: "/pricing?category=E-Commerce",
        icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408131.png",
      },
    ],
    Portfolio: [],
    Blog: [],
    Company: [
      { name: "About Us", href: "/about-us", icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408211.png" },
      { name: "Contact Us", href: "/contact-us", icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409588.png" },
    ],
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  const handlePricingModal = () => setIsPricingOpen(true);
  const closeModal = () => setIsPricingOpen(false);

  const router = useRouter();
  const pathname = usePathname();

  const baseHref = (menu) => {
    if (menu === "Portfolio") return "/portfolio";
    if (menu === "Blog") return "/blogs";
    if (menu === "Pricing") return "/pricing";
    if (menu === "Integration") return "/integration";
    return "/";
  };

  const isActiveTop = (menu) => {
    if (menus[menu] && menus[menu].length > 0) {
      return menus[menu].some((item) => pathname?.startsWith(item.href.split("?")[0]));
    }
    const href = baseHref(menu);
    if (!href || href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <div className="pb-12">
      <nav className="bg-white/70 dark:bg-black/40 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left logo */}
          <Link
            href="/"
            className="font-semibold text-gray-800 dark:text-gray-100 md:text-3xl text-2xl logoFont cursor-pointer tracking-wider"
          >
            Commeriva
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 font-medium text-gray-800 dark:text-gray-100 bg-transparent py-3 rounded-3xl px-10">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActive(menu)}
                onMouseLeave={() => setActive(null)}
              >
                {<Link
                  href={
                    menu === "Portfolio"
                      ? "/portfolio"
                      : menu === "Blog"
                      ? "/blogs"
                      : menu === "Pricing"
                      ? "/pricing"
                      : menu === "Integration"
                      ? "/integration"
                      : "/"
                  }
                  className={`relative hover:text-gray-600 dark:hover:text-gray-300 poppins gap-1 flex text-sm items-center ${
                    isActiveTop(menu) ? "text-gray-900 dark:text-white" : ""
                  }`}
                >
                  {menu}
                  {!(
                    menu === "Blog" ||
                    menu === "Integration" ||
                    menu === "Portfolio"
                  ) && <IoIosArrowDown size={15} />}
                  {isActiveTop(menu) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-full shadow-[0_0_8px_rgba(2,6,23,0.35)] dark:from-white dark:via-white/85 dark:to-white dark:h-[2px] dark:shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                    />
                  )}
                </Link>
                }

                {/* Dropdown */}
                <AnimatePresence>
                  {active === menu &&
                    !(
                      menu === "Blog" ||
                      menu === "Integration" ||
                      menu === "Portfolio"
                    ) && (
                      <div className="absolute left-0 top-full z-[9999]">
                        <div className="mt-5">
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 shadow-lg rounded-lg p-3">
                              <ul className="space-y-1">
                                {menus[menu].map((item, i) => (
                                  <li key={i}>
                                    <Link
                                      href={item.href}
                                      className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-start poppins  md:w-[25rem] hover:text-gray-700 dark:text-gray-100"
                                    >
                                      <div className="p-2 border border-gray-200 dark:border-white/10 shadow-sm rounded-full">
                                        <Image
                                          alt="icon"
                                          unoptimized
                                          width={200}
                                          height={200}
                                          className="w-8 p-1 dark:invert"
                                          src={item.icon}
                                        />
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

          {/* Right buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="https://wa.me/+8801677182084" target="_blank" className="flex items-center space-x-2">
              <button className="text-white cursor-pointer bg-gray-900 px-5 py-2 rounded-sm text-xs font-semibold flex poppins justify-center items-center gap-1">
                Chat with us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="https://wa.me/+8801886182084"
              className="px-4 py-1 rounded-full border border-gray-300 dark:border-white/10 shadow-xs flex items-center gap-1.5"
            >
              <ShinyText baseColor="#000000" shineColor="#7c7dcf" speed={5}>
                Let's Talk
              </ShinyText>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
  {mobileMenuOpen && (
    <>
      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 h-screen bg-black/40 z-[9998]"
      />

      {/* Sidebar */}
      
<motion.div
  initial={{ x: "-100%" }}
  animate={{ x: 0 }}
  exit={{ x: "-100%" }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="fixed top-0 left-0 h-screen w-72 bg-white dark:bg-neutral-900 shadow-lg z-[9999]"
>
  <div className="p-5 flex flex-col h-full">

   <div className="flex justify-between items-center mb-6">
     <h3><Link
            href="/"
            className="font-semibold text-gray-800 dark:text-gray-100 md:text-3xl text-2xl logoFont cursor-pointer tracking-wider"
          >
            Commeriva
          </Link></h3>
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="self-end text-red-600"
    >
      <X size={24} />
    </button>
   </div>

    {/* Menu items here */}
    <div className="space-y-3">
      {Object.keys(menus).map((menu) => (
        <div key={menu}>
          <Link
            href={
                      menu === "Portfolio"
                        ? "/portfolio"
                        : menu === "Blog"
                        ? "/blogs"
                        : menu === "Pricing"
                        ? "/pricing"
                        : menu === "Integration"
                        ? "/integration"
                        : "/"
                    }
              onClick={() => {
  const closeMenus = ["Portfolio", "Integration", "Blog"];

  if (closeMenus.includes(menu)) {
    setMobileMenuOpen(false);
  } else {
    setMobileMenuOpen(true);
  }

  toggleMobileSubmenu(menu);
}}

              className={`w-full flex items-center justify-between px-2 py-2 text-left poppins text-xs border-b-2 ${
                isActiveTop(menu) ? "border-slate-800 text-gray-900 dark:text-gray-100" : "border-transparent text-gray-700 dark:text-gray-100/80 hover:text-teal-600"
              }`}
            >
              <span>{menu}</span>
              {!(
                menu === "Blog" ||
                menu === "Portfolio" ||
                menu === "Integration"
              ) && (
                <motion.div
                  animate={{ rotate: mobileActiveMenu === menu ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowDown size={15} />
                </motion.div>
              )}
            </Link>

          {/* Mobile Submenu */}
          <AnimatePresence>
            {mobileActiveMenu === menu &&
              !(
                menu === "Blog" ||
                menu === "Portfolio" ||
                menu === "Integration"
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
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center space-x-2 poppins px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-start hover:text-gray-700 dark:text-gray-100"
                      >
                        <div className="p-2 border border-gray-200 dark:border-white/10 shadow-sm rounded-full">
                          <Image
                            alt="icon"
                            unoptimized
                            width={200}
                            height={200}
                            className="w-8 p-1"
                            src={item.icon}
                          />
                        </div>
                        <span className="text-xs">{item.name}</span>
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

      {/* Pricing Modal (Global) */}
      <AnimatePresence>
        {isPricingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-[999999]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg w-11/12 max-w-md p-6 relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 cursor-pointer right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold mb-2 heroTitle">💎 Pricing Plans</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 poppins">
                Choose the plan that best fits your needs.
              </p>

              <div className="space-y-4 poppins">
                <div
                  onClick={() => {
                    setMobileMenuOpen(false)
                    router.push("/pricing?category=Corporate-Website")
                  } 

                  }
                  className="p-4 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer"
                >
                  
                  <p className="flex items-center gap-1 text-gray-800 dark:text-gray-100 font-medium">
                    Corporate Website</p>
                </div>
                <div
                  onClick={() => 
                  {
                    setMobileMenuOpen(false)
                    router.push("/pricing?category=Portfolio")
                  }
                  }
                  className="p-4 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer"
                > 
                  <p className="flex items-center gap-1 text-gray-800 dark:text-gray-100 font-medium">
                    Portfolio & Personal Branding</p>
                </div>
                <div
                  onClick={() => 
                  {
                    setMobileMenuOpen(false)
                    router.push("/pricing?category=E-Commerce")
                  }
                  }
                  className="p-4 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer"
                >
                  
                  <p className="flex items-center gap-1 text-gray-800 dark:text-gray-100 font-medium">
                    E-Commerce Solutions</p>
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
