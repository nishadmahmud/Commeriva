'use client'

import React, { useState, useEffect } from "react";
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

const PortfolioLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="py-20 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight heroTitle">
            Showcase Your Work
            <br /> Build Your Brand.
            <br /> <span className="text-gray-700">Stand Out</span> with
            Commeriva.
          </h1>
          <p className="text-base poppins text-gray-600 mb-8 max-w-2xl mx-auto">
            Your portfolio is your digital identity — a platform to present your
            skills, creativity, and achievements with style.
          </p>
          
        </div>
      </section>

      {/* Professions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="md:text-3xl text-2xl title font-semibold mb-10">
            Perfect for Every Professional
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {professions.map((p, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-md border border-gray-300 hover:shadow-md transition"
              >
                <div className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {p.icon}
                </div>
                <h3 className="font-semibold poppins">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="md:text-3xl text-2xl title font-semibold mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2 poppins">{f.title}</h3>
                <p className="text-gray-600 text-sm poppins">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="md:text-3xl text-2xl title font-semibold mb-12">Benefits for You</h2>
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-50 p-4 rounded-lg poppins text-left border border-gray-200"
              >
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center text-white">
        <h2 className="md:text-3xl text-2xl heroTitle font-semibold mb-4">
          Ready to Build Your Digital Identity?
        </h2>
        <p className="text-gray-300 mb-8 poppins">
          Your portfolio becomes more than a website—it becomes your personal
          growth engine.
        </p>
        <button className="bg-white text-black px-8 py-2 rounded-sm font-semibold poppins hover:bg-gray-100 transition">
          Get Started Today <ChevronRight className="inline w-5 h-5" />
        </button>
      </section>
    </div>
  );
};

export default PortfolioLandingPage;
