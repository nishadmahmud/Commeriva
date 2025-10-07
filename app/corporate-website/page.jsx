"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CorporatePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    hover: { y: -6, scale: 1.01, transition: { duration: 0.25 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseGlow({ x, y });
  };
  const features = [
    "Responsive & mobile-first design",
    "High-performance, fast-loading pages",
    "SEO-friendly structure for better ranking",
    "Enterprise-grade security",
    "Custom corporate branding & UI/UX",
    "Multi-language & localization support",
    "Scalable architecture for future growth",
    "Real-time analytics & tracking",
    "Accessibility-friendly design",
    "Easy-to-manage content updates",
    "Optimized images & assets for speed",
    "API-first approach for integrations",
    "Cloud hosting",
    "Dark/Light mode support",
    "Blog & article modules (optional)",
  ];

  const benefits = [
    "Build trust & credibility with a professional online presence",
    "Attract & convert more leads",
    "Deliver a seamless user experience to customers",
    "Save time & cost with a scalable solution",
  ];

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      {/* Page glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59,130,246,0.10), rgba(147,51,234,0.06) 40%, transparent 70%)`,
        }}
      />
      {/* Banner */}
      <section className="relative z-10 text-center pt-20 md:py-20 md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold heroTitle mb-4 text-gray-900 dark:text-gray-100"
        >
          Build Trust. Boost Growth. Go Next.js with <span className="text-blue-600 dark:text-blue-400">Commeriva</span>.
        </motion.h1>
        <p className="text-base md:line-clamp-3 line-clamp-2 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto poppins">
          Your corporate website is more than just an online presence—it’s your digital identity. At Commeriva, we craft professional corporate & business websites powered by Next.js, combining speed, security, and modern design.
        </p>
      </section>

      {/* Features */}
      <section className="relative z-10 py-16 bg-gray-50 dark:bg-neutral-900/50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-2xl md:text-3xl title font-semibold text-center mb-10 text-gray-900 dark:text-gray-100">Features</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                custom={i}
                whileHover="hover"
                className="flex items-start gap-3 bg-white dark:bg-neutral-900 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-xl transition poppins text-sm font-medium"
              >
                <CheckCircle className="text-gray-700 dark:text-gray-300 w-5 h-5 mt-1" />
                <span className="text-gray-800 dark:text-gray-300">{f}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Next.js */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 items-start">
          {/* Sticky left intro */}
          <motion.div variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:col-span-2 md:sticky top-24 self-start">
            <h2 className="md:text-4xl text-3xl font-semibold title mb-4 text-gray-900 dark:text-gray-100">Why Next.js for Your Corporate Website?</h2>
            <p className="text-gray-700 dark:text-gray-300 poppins">A modern, scalable foundation that keeps your brand fast, secure and future‑ready. Built for marketing teams and engineers alike.</p>
          </motion.div>

          {/* Broken grid cards */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="md:col-span-3 grid grid-cols-6 gap-4">
            {[
              { title: 'Blazing Performance', body: 'Hybrid SSG/SSR, image optimization and edge caching keep every page snappy.', span: 'col-span-6 md:col-span-3', delay: 0 },
              { title: 'SEO Advantage', body: 'Pre-rendered HTML, metadata control and fast LCP improve rankings.', span: 'col-span-6 md:col-span-3', delay: 1 },
              { title: 'Secure by Design', body: 'Fewer attack surfaces than legacy CMS. Framework‑level security best‑practices.', span: 'col-span-6 md:col-span-4', delay: 2 },
              { title: 'Scalable & Future‑Ready', body: 'File‑based routing, app directory and API routes scale with your org.', span: 'col-span-6 md:col-span-2', delay: 3 },
              { title: 'Modern UX', body: 'Layouts, streaming and transitions deliver app‑like experiences.', span: 'col-span-6 md:col-span-3', delay: 4 },
              { title: 'Dev Ecosystem', body: 'First‑class TypeScript, linting and tooling for fast, reliable delivery.', span: 'col-span-6 md:col-span-3', delay: 5 },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                custom={i}
                whileHover="hover"
                className={`${card.span} bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="md:text-3xl text-2xl font-semibold mb-8 title text-center text-gray-900 dark:text-gray-100">Benefits for Your Business</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants} 
                custom={i} 
                whileHover="hover" 
                className="relative overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition"
              >
                {/* top gradient accent */}
                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-gradient-to-r from-teal-400/20 via-blue-500/10 to-purple-500/10 blur-2xl" />
                {/* number badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 text-sm font-semibold">{i + 1}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Impact area</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5 mt-1" />
                  <p className="text-gray-800 dark:text-gray-300 md:text-base text-sm leading-relaxed">{b}</p>
                </div>
                {/* bottom underline reveal */}
                <div className="absolute left-4 right-4 bottom-3 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-white/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-6 text-center">
        <h2 className="md:text-3xl text-2xl font-semibold mb-6 title text-gray-900 dark:text-gray-100">Ready to Build Your Corporate Website?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 poppins max-w-2xl mx-auto">
          Let Commeriva help you create a powerful, scalable, and modern corporate presence that grows with your business.
        </p>
        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform' target="_blank" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-20 py-2 rounded-full text-base font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition shadow-md">
          Get Started
        </Link>
      </section>
    </div>
  );
}
