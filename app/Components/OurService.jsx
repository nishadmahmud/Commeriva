// ServicesPage.jsx
"use client";
import { TbWorld } from "react-icons/tb";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaShoppingCart,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
// import ElectricBorder from "./ElectricBorder"; // Uncomment if you want to use later
import { BsShop, BsBuilding } from "react-icons/bs";
import { Globe } from "lucide-react";
// ====== Services Data ======
const services = [
  {
    title: "Custom Web Solution",
    icon: <FaCogs className="text-5xl mb-2" />,
    description:
      "Your software, always improving. Our DevOps team ensures your software is reliable, high-quality, and evolves with your needs.",
  },
  {
    title: "E-Commerce Website (Next.js)",
    icon: <BsShop className="text-5xl mb-2" />,
    description:
      "We create digital experiences that users love. Intuitive, engaging designs that turn first-time visitors into loyal customers.",
  },
  {
    title: "Portfolio Websites",
    icon: <FaMobileAlt className="text-5xl mb-2" />,
    description:
      "High-performance portfolio websites that showcase your skills, attract clients, and grow your personal brand.",
  },
  {
    title: "Landing Pages",
    icon: <FaLaptopCode className="text-5xl mb-2" />,
    description:
      "Custom-built landing pages designed to capture leads, drive conversions, and support your campaigns effectively.",
  },
  {
    title: "Funnel Websites",
    icon: <TbWorld className="text-5xl mb-2" />,
    description:
      "Turn your online store into a sales powerhouse. We build eCommerce platforms that showcase your products, convert visitors, and grow your brand.",
  },
  {
    title: "Corporate & Company Websites",
    icon: <BsBuilding className="text-5xl mb-2" />,
    description:
      "Scalable corporate websites that streamline operations, enhance credibility, and expand your business reach.",
  },
];

// ====== Component ======
export default function OurServices() {
  return (
    <section
      id="service"
      className="min-h-screen montserrat bg-white pt-12 px-4 sm:px-6 lg:px-8 mb-4 lg:mb-0"
    >
      {/* Section Title */}
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center title pb-10">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          // Uncomment ElectricBorder if needed
          // <ElectricBorder
          //   key={index}
          //   color="#e6e6e6"
          //   speed={1}
          //   chaos={0.5}
          //   thickness={2}
          //   style={{ borderRadius: 16 }}
          // >
          <div
            key={index}
            className="rounded-2xl border border-primary hover:border-gray-200 p-6 shadow-xs hover:shadow-lg transition-all duration-300"
          >
            <div className="primary-text-color">{service.icon}</div>
            <h3 className="md:text-xl text-lg font-semibold text-gray-900 mt-5 mb-1 poppins">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
          // </ElectricBorder>
        ))}
      </div>
    </section>
  );
}
