"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 text-center border-b border-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl heroTitle md:text-5xl font-semibold mb-6 text-gray-900"
        >
          About <span className="text-gray-700">Commeriva</span>
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl poppins mx-auto text-gray-600">
          We craft modern, high-performing websites that help businesses grow,
          connect, and succeed in the digital world.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 title">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 poppins">
          At Commeriva, our mission is simple: to empower businesses and
          individuals with functional, user-friendly, and elegant websites.
          Whether it’s eCommerce, corporate branding, or creative portfolios, we
          deliver digital experiences that leave a lasting impression.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 border-t border-gray-200">
        <h2 className="text-3xl title font-bold text-center mb-12 text-gray-900">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 poppins">
          {[
            {
              title: "E-Commerce Websites",
              desc: "Engaging online stores with smooth checkout, secure payments, and clean UI.",
            },
            {
              title: "Portfolio & Branding",
              desc: "Showcase your creativity and brand identity with minimal, modern portfolio websites.",
            },
            {
              title: "Corporate Websites",
              desc: "Professional and scalable websites that reflect your business credibility.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 text-center border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl heroTitle font-bold mb-6 text-gray-900">
          Let’s Build Something Great Together
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 poppins">
          Partner with Commeriva and take your brand to the next level with a
          website designed for impact.
        </p>
        <Link
          href="/contact"
          className="inline-block border border-gray-800 text-gray-100 bg-gray-900 hover:text-white font-medium px-8 py-2 rounded-sm transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
