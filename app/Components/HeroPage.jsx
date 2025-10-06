"use client";
import React, { useState } from "react";
import { Calendar, Play, MessageCircle } from "lucide-react";
import RotatingText from "./RotatingText";
import Link from "next/link";
import { motion } from "framer-motion";

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

      {/* Interactive background - mouse-follow radial light */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            `radial-gradient(650px at ${mousePos.x}% ${mousePos.y}%, rgba(124,58,237,0.15), rgba(124,58,237,0.06) 35%, transparent 65%)`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center text-center justify-center justify-items-center md:min-h-[70vh] px-6 md:mt-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-3xl"
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-gray-200 text-gray-700 text-xs md:text-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            Built with Next.js, React and modern tooling
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold md:leading-tight text-gray-900 heroTitle">
            <span>Smart, Secure, & Scalable Websites for Your </span>{" "}
            <RotatingText
              texts={["E-commerce", "Brand", "Launch", "Portfolio", "Business"]}
              mainClassName="text-gray-700 absolute overflow-hidden justify-start top-2 md:top-1 inline-block"
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

          <p className="mt-5 md:text-lg text-center max-w-2xl mx-auto text-gray-600 poppins">
            We craft high‑performing sites and apps tailored to your goals — fast, SEO‑ready, and easy to grow.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-4 justify-center items-center">
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform?usp=sharing&ouid=101793279606112585174'>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition cursor-pointer poppins flex items-center gap-2 ring-1 ring-black/10">
                <Calendar size={20} /> Book an appointment
              </button>
            </Link>

            <Link target="_blank" href='https://wa.me/+8801886182084'>
              <button className="flex items-center gap-2 text-gray-800 hover:text-black font-medium transition cursor-pointer border border-gray-300 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm poppins">
                <MessageCircle color="black" size={22} className="bg-gray-200 rounded-full p-1.5" />
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
