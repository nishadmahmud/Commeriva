"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CorporatePage() {
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
    <div className="bg-white text-gray-900 w-10/12 mx-auto">
      {/* Banner */}
      <section className="text-center pt-20 md:py-20 md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold heroTitle mb-4"
        >
          Build Trust. Boost Growth. Go Next.js with <span className="text-blue-600">Commeriva</span>.
        </motion.h1>
        <p className="text-base md:line-clamp-3 line-clamp-2 text-gray-700 max-w-3xl mx-auto poppins">
          Your corporate website is more than just an online presence—it’s your digital identity. At Commeriva, we craft professional corporate & business websites powered by Next.js, combining speed, security, and modern design.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl title font-semibold title text-center mb-10">✨ Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition poppins text-sm font-medium"
              >
                <CheckCircle className="text-gray-700 w-5 h-5 mt-1" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Next.js */}
      <section className="py-16">
        <h2 className="md:text-3xl text-2xl font-semibold title text-center mb-8">💡 Why Next.js for Your Corporate Website?</h2>
        <div className="space-y-5 text-gray-800 poppins">
          <p><div className="font-semibold">• Blazing Performance</div> – SSG & SSR ensure lightning-fast speed.</p>
          <p><div className="font-semibold">• SEO Advantage</div> – Pre-rendered pages help your brand rank higher on Google.</p>
          <p><div className="font-semibold">• Scalable & Future-Ready</div> – Easily expand as your business grows.</p>
          <p><div className="font-semibold">• Secure by Design</div> – Fewer vulnerabilities compared to WordPress.</p>
          <p><div className="font-semibold">• Modern User Experience</div> – Smooth navigation & app-like feel.</p>
          <p><div className="font-semibold">• Better Developer Ecosystem</div> – Flexible, customizable, and enterprise-ready.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold mb-8 title text-center">✅ Benefits for Your Business</h2>
          <ul className="space-y-4 poppins md:text-lg text-gray-700">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center justify-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="md:text-3xl text-2xl font-semibold mb-6 title">🚀 Ready to Build Your Corporate Website?</h2>
        <p className="text-gray-600 mb-8 poppins max-w-2xl mx-auto">
          Let Commeriva help you create a powerful, scalable, and modern corporate presence that grows with your business.
        </p>
        <button className="bg-gray-900 text-white px-20 py-2 rounded-sm text-base font-semibold hover:bg-gray-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
