// ServicesPage.jsx
"use client";
import Image from "next/image";

// ====== Services Data ======
const services = [
  {
    title: "MVP Development",
    description: `Launch a tight first version quickly. Bring your idea to reality, perfectly.`,
    points: [
      "Discovery → scope that fits goals and runway",
      "Lean build in 8–12 weeks",
      "Architected to scale, not throw away",
    ],
    buttonText: "Book MVP consult",
    buttonLink: "#",
    image: "/mvp.jpg",
  },
  {
    title: "End-to-End Product Development",
    description: `From concept to launch with post-launch iteration built in.`,
    points: [
      "Discovery, UX, build, QA, deployment, support",
      "Weekly looms + async updates (no dark sprints)",
      "Production-grade from Day 1 (security, performance, observability)",
    ],
    buttonText: "Plan a build",
    buttonLink: "#",
    image: "/11.30.23-oleg.jpg",
  },
  {
    title: "Dedicated Development Teams",
    description: `Your plug-and-play product squad.`,
    points: [
      "Retainer or on-demand scaling",
      "Engineers, DevOps, PM, QA embedded into workflow",
      "Stable velocity and fewer context resets",
    ],
    buttonText: "Talk resourcing",
    buttonLink: "#",
    image: "/dedicated-team.jpg",
  },
  {
    title: "Mobile App Development",
    description: `Native quality, shipping speed, and real growth levers.`,
    points: [
      "iOS, Android, Flutter, React Native",
      "AI-powered personalization & automation",
      "Voice/vision multimodal features via Gen-AI",
      "Secure payments, auth, offline, ASO foundations",
    ],
    buttonText: "Book a call",
    buttonLink: "#",
    image: "/benefits-of-mobile-app-for-busin.jpg",
  },
  {
    title: "Custom Software Development",
    description: `Modern, scalable software for your business needs.`,
    points: [
      "Custom builds using React, Node.js, Laravel & more",
      "AI-driven personalization, automation, insights",
      "Gen-AI integrations for content, analytics, decision support",
      "Secure architectures for long-term growth",
      "Continuous optimization for UX, performance, maintainability",
    ],
    buttonText: "Talk to us",
    buttonLink: "#",
    image: "/successful-software-solutions.jpg",
  },
];

// ====== Component ======
export default function OurServices() {
  return (
    <section id="services" className="md:py-16 pb-16 bg-white">
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
