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
    <div className="pb-14">
      <nav className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left logo */}
          <Link
            href="/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white md:text-3xl text-2xl logoFont cursor-pointer tracking-wider hover:from-cyan-600 hover:via-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Commeriva
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-300">
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
                  className={`relative hover:text-gray-900 dark:hover:text-white poppins gap-1 flex text-sm items-center transition-colors duration-200 ${
                    isActiveTop(menu) ? "text-gray-900 dark:text-white font-semibold" : ""
                  }`}
                >
                  {menu}
                  {!(
                    menu === "Blog" ||
                    menu === "Integration" ||
                    menu === "Portfolio"
                  ) && <IoIosArrowDown size={14} className="transition-transform group-hover:rotate-180" />}
                  {isActiveTop(menu) && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-full" />
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
                        <div className="mt-6">
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                            <div className="bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 shadow-xl rounded-2xl p-4">
                              <ul className="space-y-1">
                                {menus[menu].map((item, i) => (
                                  <li key={i}>
                                    <Link
                                      href={item.href}
                                      className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100/80 dark:hover:bg-white/5 text-start poppins md:w-[26rem] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                                    >
                                      <div className="p-2.5 border border-gray-200/50 dark:border-white/5 shadow-sm rounded-xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur group-hover:border-cyan-400/30 dark:group-hover:border-cyan-400/20 transition-colors">
                                        <Image
                                          alt="icon"
                                          unoptimized
                                          width={200}
                                          height={200}
                                          className="w-7 p-0.5 dark:invert"
                                          src={item.icon}
                                        />
                                      </div>
                                      <span className="text-sm font-medium">{item.name}</span>
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
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://wa.me/+8801677182084" target="_blank">
              <button className="group relative text-white cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white/10 dark:to-white/5 hover:from-gray-800 hover:to-gray-900 dark:hover:from-white/15 dark:hover:to-white/10 backdrop-blur-xl px-6 py-2.5 rounded-full text-sm font-semibold poppins border border-white/10 dark:border-white/5 shadow-md hover:shadow-lg transition-all duration-200">
                <span className="relative z-10">Chat with us</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="https://wa.me/+8801886182084"
              className="px-4 py-1 rounded-full border border-gray-300 dark:border-white/10 shadow-xs flex items-center gap-1.5 bg-white/70 dark:bg-neutral-900/40 backdrop-blur"
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
  className="fixed top-0 left-0 h-screen w-72 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-white/5 shadow-2xl z-[9999]"
>
  <div className="p-6 flex flex-col h-full">

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

                  className={`w-full flex items-center justify-between px-2 py-2 text-left poppins text-xs border-b ${
                isActiveTop(menu) ? "border-slate-800 text-gray-900 dark:text-gray-100" : "border-transparent text-gray-700 dark:text-gray-100/80 hover:text-teal-400"
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
                        className="flex items-center space-x-3 poppins px-3 py-2.5 rounded-xl hover:bg-gray-100/80 dark:hover:bg-white/5 text-start text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                      >
                        <div className="p-2 border border-gray-200/50 dark:border-white/5 shadow-sm rounded-xl bg-white/80 dark:bg-neutral-900/60">
                          <Image
                            alt="icon"
                            unoptimized
                            width={200}
                            height={200}
                            className="w-7 p-0.5 dark:invert"
                            src={item.icon}
                          />
                        </div>
                        <span className="text-xs font-medium">{item.name}</span>
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
