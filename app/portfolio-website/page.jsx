'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Check,
  Palette,
  Code,
  Briefcase,
  Camera,
  Zap,
  Search,
} from "lucide-react";
import Link from "next/link";

const PortfolioLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouse = (e) => {
    const target = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - target.left, y: e.clientY - target.top });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const features = [
    { icon: <Palette className="w-6 h-6" />, title: "Modern Design", desc: "Responsive layouts for all devices" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Loading", desc: "Optimized for smooth performance" },
    { icon: <Search className="w-6 h-6" />, title: "SEO Friendly", desc: "Boost your visibility & ranking" },
    { icon: <Code className="w-6 h-6" />, title: "Custom Layouts", desc: "Tailored specifically for your profession" },
  ];

  const professions = [
    { icon: <Palette className="w-8 h-8" />, title: "Designer" },
    { icon: <Code className="w-8 h-8" />, title: "Developer" },
    { icon: <Camera className="w-8 h-8" />, title: "Artist" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Consultant" },
  ];

  const benefits = [
    "Showcase your skills & achievements",
    "Stand out with unique design",
    "Build trust with clients & recruiters",
    "Boost your personal brand visibility",
    "Turn visitors into opportunities",
  ];

  return (
    <div
      className="relative min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-gray-100 overflow-hidden"
      onMouseMove={handleMouse}
      style={{
        // CSS vars used by the glow overlay
        ["--x"]: `${mousePos.x}px`,
        ["--y"]: `${mousePos.y}px`,
      }}
    >
      {/* subtle mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(59,130,246,0.08), transparent 65%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden dark:block"
        style={{
          background: `radial-gradient(700px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 70%)`,
        }}
      />
      {/* Hero */}
      <section className="relative py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight heroTitle">
            Showcase Your Work
            <br /> Build Your Brand.
            <br /> <span className="text-gray-700 dark:text-gray-200">Stand Out</span> with
            Commeriva.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base poppins text-gray-600 dark:text-gray-300 mb-8">
            Your portfolio is your digital identity — a platform to present your skills, creativity, and achievements with style.
          </motion.p>
        </motion.div>
      </section>

      {/* Professions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="md:text-3xl text-2xl title font-semibold mb-10 text-gray-900 dark:text-gray-100">
            Perfect for Every Professional
          </h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {professions.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100/60 dark:from-neutral-900/60 dark:to-neutral-950/70 md:bg-gray-50 md:dark:bg-neutral-900/60 rounded-xl border border-gray-300 dark:border-white/10 shadow-md md:shadow-none dark:shadow-lg dark:md:shadow-none hover:shadow-xl active:shadow-xl hover:border-blue-400/60 dark:hover:border-blue-400/40 active:border-blue-400/60 dark:active:border-blue-400/40 transition"
              >
                <div className="w-14 h-14 bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {p.icon}
                </div>
                <h3 className="font-semibold poppins text-gray-900 dark:text-gray-100">{p.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="md:text-3xl text-2xl title font-semibold mb-12 text-gray-900 dark:text-gray-100">Powerful Features</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="bg-gradient-to-br from-white to-gray-50/40 dark:from-neutral-900 dark:to-neutral-950/60 md:bg-white md:dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-md md:shadow-none dark:shadow-lg dark:md:shadow-none hover:shadow-2xl active:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-400/40 active:border-blue-400/60 dark:active:border-blue-400/40 transition text-left"
              >
                <div className="w-12 h-12 bg-gray-800 dark:bg-white/10 text-white dark:text-gray-100 rounded-lg flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2 poppins text-gray-900 dark:text-gray-100">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm poppins">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="md:text-3xl text-2xl title font-semibold mb-12 text-gray-900 dark:text-gray-100">Benefits for You</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center bg-gray-50 dark:bg-neutral-900/60 p-4 rounded-xl poppins text-left border border-gray-200 dark:border-white/10"
              >
                <Check className="w-5 h-5 text-green-600 dark:text-emerald-400 mr-3 flex-shrink-0" />
                <p className="text-gray-800 dark:text-gray-200">{b}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 -mt-px bg-black dark:bg-neutral-950 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="md:text-3xl text-2xl heroTitle font-semibold mb-4">
            Ready to Build Your Digital Identity?
          </h2>
          <p className="text-gray-300 mb-8 poppins">
            Your portfolio becomes more than a website—it becomes your personal growth engine.
          </p>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform' target="_blank" className="inline-flex items-center gap-2 bg-white text-black dark:bg-white/90 dark:text-black px-6 py-2 rounded-full font-semibold poppins hover:bg-gray-100 transition">
            Get Started Today <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        {/* dim gradient corners for depth */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </section>
    </div>
  );
};

export default PortfolioLandingPage;
