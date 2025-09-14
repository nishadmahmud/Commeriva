// ServicesPage.jsx
"use client";
import Image from "next/image";

// ====== Services Data ======
const services = [
  {
    title: "Corporate & Business Websites",
    description: `Professional websites that strengthen your brand identity and build trust with clients.`,
    points: [
      "Modern, responsive design",
      "Optimized for SEO & speed",
      "Secure and scalable architecture",
    ],
    buttonText: "Book Now",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392227.jpg",
  },
  {
    title: "E-Commerce Solutions",
    description: `Custom online stores designed to sell smarter and grow faster.
`,
    points: [
      "Product catalog & inventory management",
      "Secure payment gateway integration",
      "Smooth checkout experience",
    ],
    buttonText: "Plan a build",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392289.jpg",
  },
  {
    title: "Portfolio & Personal Branding Sites",
    description: `Showcase your talent, achievements, and personal brand with style.`,
    points: [
      "Sleek, creative layouts",
      "Easy content updates",
      "Optimized for recruiters and clients",
    ],
    buttonText: "Talk resourcing",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392467.jpg",
  },
  {
    title: "Landing Pages & Marketing Sites",
    description: `High-conversion landing pages for campaigns, ads, and product launches.`,
    points: [
      "Conversion-focused design",
      "Integrated analytics & tracking",
      "Fast-loading, mobile-ready",
     
    ],
    buttonText: "Book a call",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392582.jpg",
  },
  {
    title: "Blog & Content Platforms",
    description: `Powerful publishing platforms to grow your audience and authority.`,
    points: [
      "SEO-friendly structure",
      "Easy content management",
      "Customizable categories & layouts",
      
    ],
    buttonText: "Talk to us",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392697.jpg",
  },
  {
    title: "Custom Web Applications",
    description: `Advanced web solutions built to solve unique business challenges.`,
    points: [
      "Tailored features & integrations",
      "Secure backend with APIs",
      "Scalable for enterprise growth",
      
    ],
    buttonText: "Talk to us",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392891.jpg",
  },
];

// ====== Component ======
export default function OurServices() {
  return (
    <section id="services" className="md:pb-16 pt-5 md:pt-0 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center pb-12 title">
          Our Services
        </h1>

        <div className="space-y-20 poppins">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
            >
              {/* Left Side (conditionally text or image) */}
              <div
                className={`${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-800 mb-4">{service.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a
                  href={service.buttonLink}
                  className="inline-block mt-6 px-6 py-1.5 bg-gray-950 text-white rounded-sm hover:bg-gray-800 transition"
                >
                  {service.buttonText}
                </a>
              </div>

              {/* Right Side (conditionally image or text) */}
              <div
                className={`${
                  index % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <Image
                unoptimized
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
