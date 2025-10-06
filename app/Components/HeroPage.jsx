"use client";
import React, { useState } from "react";
import { Calendar, Play, MessageCircle } from "lucide-react";
import RotatingText from "./RotatingText";
import Link from "next/link";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid";

const HeroPage = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="relative md:h-screen w-full overflow-x-hidden overflow-y-visible" onMouseMove={handleMouseMove}>

      {/* Light theme glow matching DotGrid palette (soft indigo) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 dark:hidden"
        style={{
          background:
            `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, rgba(199,210,254,0.18), rgba(229,231,235,0.08) 35%, transparent 65%)`,
        }}
      />
      {/* Light DotGrid */}
      <div className="absolute inset-0 -z-10 hidden md:block dark:hidden opacity-60">
        <DotGrid dotSize={8} gap={30} baseColor="#e6e9ef" activeColor="#e0e7ff" proximity={140} speedTrigger={140} shockRadius={200} shockStrength={3.5} className="w-full h-full" />
      </div>
      {/* Dark theme glow (white-ish) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        style={{
          background:
            `radial-gradient(700px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.12), rgba(255,255,255,0.05) 35%, transparent 65%)`,
        }}
      />
      {/* Dark DotGrid (white-ish, softer) */}
      <div className="absolute inset-0 -z-10 hidden md:block dark:block opacity-25">
        <DotGrid dotSize={7} gap={32} baseColor="#f3f4f6" activeColor="#ffffff" proximity={120} speedTrigger={140} shockRadius={180} shockStrength={3} className="w-full h-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center text-center justify-center justify-items-center md:min-h-[48vh] px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-3xl"
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />
            Built with Next.js, React and modern tooling
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold md:leading-tight text-gray-900 dark:text-gray-100 heroTitle">
            <span>Smart, Secure, & Scalable Websites for Your </span>{" "}
            <RotatingText
              texts={["E-commerce", "Brand", "Launch", "Portfolio", "Business"]}
              mainClassName="text-gray-700 dark:text-gray-300 absolute overflow-hidden justify-start top-2 md:top-1 inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%"}}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </h1>

          <p className="mt-5 md:text-lg text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 poppins">
            We craft high‑performing sites and apps tailored to your goals — fast, SEO‑ready, and easy to grow.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-4 justify-center items-center">
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform?usp=sharing&ouid=101793279606112585174'>
              <button className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black font-semibold px-6 py-3 rounded-full shadow-lg transition cursor-pointer poppins flex items-center gap-2 ring-1 ring-black/10 dark:ring-white/10">
                <Calendar size={20} /> Book an appointment
              </button>
            </Link>

            <Link target="_blank" href='https://wa.me/+8801886182084'>
              <button className="flex items-center gap-2 text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white font-medium transition cursor-pointer border border-gray-300 dark:border-white/10 px-6 py-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm poppins">
                <MessageCircle color="black" size={22} className="bg-gray-200 dark:bg-white/20 rounded-full p-1.5" />
                Talk to us on WhatsApp
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
