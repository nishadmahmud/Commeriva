"use client";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl heroTitle font-semibold text-center max-w-3xl mt-10"
      >
        🎯 High-Impact Landing Pages & Funnels
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-center max-w-2xl"
      >
        <span className="font-medium text-gray-600 poppins italic">Turn Traffic into Sales – Smarter Funnels, Higher Conversions.</span>
      </motion.p>

      {/* Overview */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 max-w-5xl text-center leading-relaxed text-base poppins md:text-lg"
      >
        Your landing page isn’t just a place to land—it’s the <span className="font-semibold">first step in your customer’s journey</span>. 
        At <span className="font-semibold">Commeriva</span>, we craft 
        <span className="font-semibold"> data-driven, Next.js-powered landing pages & sales funnels</span> designed to maximize conversions, 
        generate leads, and boost revenue. Whether it’s for an ad campaign, product launch, or lead magnet, 
        we build landing pages that <span className="italic">sell while you sleep</span>.
      </motion.p>

      {/* Features */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full poppins">
        {[
          "🎨 Conversion-Driven Design – Sleek, distraction-free layouts.",
          "⚡ Lightning-Fast Performance – Mobile-first, optimized for speed.",
          "🔍 SEO + Ad Optimized – Perfect for Google Ads & organic reach.",
          "🛒 Funnel Integration – Step-by-step guided journeys.",
          "🎯 Compelling CTAs – Buttons & forms that demand action.",
          "🧪 A/B Testing Ready – Scale campaigns with variations.",
          "📩 Lead Capture Tools – Forms, pop-ups, and magnets.",
          "💳 Payment Integration – Built-in checkout flows.",
          "📊 Analytics & Tracking – Data-driven insights.",
          "🔥 Urgency Boosters – Timers & scarcity banners.",
         
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            className="p-4 border border-gray-300 rounded-sm shadow-xs hover:shadow-md transition poppins"
          >
            {item}
          </motion.div>
        ))}
      </section>

      <div className="flex items-start gap-20 justify-between">
{/* Why Section */}
      <section className="mt-16 text-start">
        <h2 className="text-2xl md:text-3xl title font-semibold">💡 Why Commeriva Landing Pages Work</h2>
        <ul className="mt-6 space-y-3 text-base md:text-lg">
          <li>⚡ Faster load times → <span className="font-semibold poppins">lower bounce rates</span></li>
          <li>🎯 Optimized funnels → <span className="font-semibold poppins">higher conversions</span></li>
          <li>🧩 Smarter design → <span className="font-semibold poppins">better ad ROI</span></li>
          <li>🚀 Scalable pages → <span className="font-semibold poppins">multi-campaign ready</span></li>
         
        </ul>
      </section>

      {/* Business Benefits */}
      <section className="mt-16 text-start">
        <h2 className="text-2xl md:text-3xl font-semibold title">✅ Your Business Wins With Commeriva</h2>
        <ul className="mt-6 space-y-3 text-base md:text-lg">
          <li>🚀 Drive <span className="font-semibold poppins">more leads, sales, and sign-ups</span></li>
          <li>🎯 Get <span className="font-semibold poppins">maximum ROI from ad spend</span></li>
          <li>📈 Grow with <span className="font-semibold poppins">scalable & testable funnels</span></li>
          <li>🔒 Secure, lightweight & <span className="font-semibold poppins">future-ready</span></li>
        </ul>
      </section>
      </div>
    </main>
  );
}
