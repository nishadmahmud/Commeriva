"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";

export default function PartnersIntegrations() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [
    {
      id: 1,
      name: "HTML",
      image: "/html.png",
      position: { top: "10px", left: "160px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 2,
      name: "MongoDB",
      image: "/mongodb.png",
      position: { top: "55px", right: "280px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 3,
      name: "React",
      image: "/react.png",
      position: { top: "120px", right: "150px" },
      size: { width: "70px", height: "70px" },
    },
    {
      id: 4,
      name: "Firebase",
      image: "/firebase.jpg",
      position: { top: "50px", right: "10px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 5,
      name: "Node.js",
      image: "/nodejs.png",
      position: { top: "110px", left: "50px" },
      size: { width: "80px", height: "80px" },
    },
    {
      id: 6,
      name: "PostgreSQL",
      image: "/postragsql.png",
      position: { top: "200px", right: "20px" },
      size: { width: "40px", height: "40px" },
    },
    {
      id: 7,
      name: "Tailwind",
      image: "/tailwind.jpg",
      position: { top: "380px", left: "20px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 8,
      name: "PHP",
      image: "/php.png",
      position: { bottom: "200px", left: "190px" },
      size: { width: "70px", height: "70px" },
    },
    {
      id: 9,
      name: "Cloud",
      image: "/cloud.png",
      position: { bottom: "160px", left: "80px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 10,
      name: "Shopify",
      image: "/shopify.png",
      position: { top: "300px", right: "120px" },
      size: { width: "55px", height: "55px" },
    },
    {
      id: 11,
      name: "TypeScript",
      image: "/ts.png",
      position: { bottom: "20px", right: "200px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 12,
      name: "WordPress",
      image: "/wordpress.png",
      position: { bottom: "20px", right: "10px" },
      size: { width: "50px", height: "50px" },
    },
    {
      id: 13,
      name: "Canva",
      image: "/canva.png",
      position: { top: "5px", right: "180px" },
      size: { width: "50px", height: "50px" },
    },
    {
      id: 14,
      name: "Figma",
      image: "/figma.png",
      position: { bottom: "30px", left: "280px" },
      size: { width: "60px", height: "60px" },
    },
    {
      id: 15,
      name: "Next.js",
      image: "/nextjs.png",
      position: { bottom: "100px", right: "280px" },
      size: { width: "70px", height: "70px" },
    },
    {
      id: 16,
      name: "Python",
      image: "/python.png",
      position: { top: "75px", left: "270px" },
      size: { width: "55px", height: "55px" },
    },
    {
      id: 17,
      name: "AWS",
      image: "/aws.png",
      position: { bottom: "100px", left: "200px" },
      size: { width: "50px", height: "50px" },
    },
    {
      id: 18,
      name: "Flutter",
      image: "/flutter.jpg",
      position: { top: "220px", right: "250px" },
      size: { width: "45px", height: "45px" },
    },
  ];

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  const stats = [
    { number: 100, suffix: "+", label: "Partners" },
    { number: 150, suffix: "+", label: "Integrations" },
    { number: 120, suffix: "+", label: "Project" },
  ];

  return (
    <div className="bg-white flex items-center justify-center font-sans">
      <div className="relative w-full max-w-7xl md:min-h-[70vh] px-5 md:py-10 md:px-8 lg:px-12">
        {/* Desktop/Tablet logos positioned around content */}
        {mounted && windowWidth > 768 && (
          <div className="absolute inset-0">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={logoVariants}
                whileHover="hover"
                className="absolute cursor-pointer"
                style={{
                  ...logo.position,
                  width: logo.size.width,
                  height: logo.size.height,
                }}
              >
                <motion.div
                  animate={floatingAnimation}
                  transition={{
                    ...floatingAnimation.transition,
                    delay: index * 0.2,
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={logo.image || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ✅ Mobile marquee */}
        {mounted && windowWidth <= 768 && (
          <div className="mb-10">
            <Marquee gradientWidth={20} speed={40} gradient={true}>
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 mx-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-center max-w-2xl mx-auto ${
            windowWidth > 768
              ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider mb-2 heroTitle"
          >
            PARTNERS & INTEGRATIONS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl sm:text-4xl heroTitle md:text-5xl lg:text-5xl font-semibold text-gray-900 leading-tight md:mb-6 mb-2"
          >
            Built to work with your ecosystem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0"
          >
            We understand that success doesn't happen in isolation. That's why
            Commeriva products integrate with the technologies that power your
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-4 sm:gap-8 mb-12 sm:mb-16"
          >
            <Link
              href="#"
              className="group primary-text-color hover:text-teal-600 font-medium text-sm sm:text-base transition-colors duration-200"
            >
              Our ecosystem
              <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="#"
              className="group primary-text-color hover:text-teal-600 font-medium text-sm sm:text-base transition-colors duration-200"
            >
              Find integrations
              <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-3 justify-center gap-8 sm:gap-16 lg:gap-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
