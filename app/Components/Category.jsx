"use client"

import { useState } from "react"

const categories = [
  {
    name: "B2B SaaS",
    icon: "💼",
    description: "Enterprise solutions with seamless SSO integration",
    pattern: "dots",
  },
  {
    name: "Retail",
    icon: "🛍️",
    description: "Customer loyalty programs and social commerce",
    pattern: "lines",
  },
  {
    name: "Financial Services",
    icon: "🏦",
    description: "Bank-grade security with regulatory compliance",
    pattern: "grid",
  },
  {
    name: "Publishing",
    icon: "📚",
    description: "Content access control and subscription management",
    pattern: "waves",
  },
  {
    name: "Travel",
    icon: "✈️",
    description: "Global identity verification and booking systems",
    pattern: "circles",
  },
  {
    name: "Healthcare",
    icon: "🏥",
    description: "HIPAA-compliant patient identity management",
    pattern: "triangles",
  },
]

export default function Category() {
  const [active, setActive] = useState("Travel")

  return (
    <div className="relative bg-white text-gray-900 flex flex-col items-start justify-start mb-20 w-full max-w-11/12 mx-auto px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-900 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-900 rotate-45 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-gray-900 rounded-full animate-float-slow"></div>
      </div>

      {/* Header Section */}
      {/* <div className="relative z-10 mb-16">
        <div className="inline-flex items-center gap-3 border border-gray-200 bg-gray-50 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in hover:bg-gray-100 transition-colors duration-300">
          <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></span>
          Identity Solutions
        </div>

        <h1 className="text-5xl md:text-7xl font-light text-start mb-6 leading-[0.9] text-gray-900 animate-slide-up tracking-tight">
          Identity is so much more than <br />
          <span className="relative font-bold">
            just the login box
            <div className="absolute -bottom-3 left-0 w-full h-[2px] bg-gray-900 animate-expand-width"></div>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-start text-gray-500 mt-8 mb-12 animate-fade-in-delay font-light max-w-2xl">
          Let's take a look at everything you can do.
        </p>
      </div> */}

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 w-full">
        {categories.map((cat, index) => (
          <div
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`group relative cursor-pointer transition-all duration-500 animate-slide-up ${
              active === cat.name ? "transform scale-105" : "hover:scale-102"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`relative overflow-hidden rounded-3xl p-8 border-2 transition-all duration-500 ${
                active === cat.name
                  ? "bg-gray-900 text-white border-gray-900 shadow-2xl"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-xl text-gray-900"
              }`}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 opacity-5 ${active === cat.name ? "opacity-10" : ""}`}>
                {cat.pattern === "dots" && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                )}
                {cat.pattern === "lines" && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 15px)",
                    }}
                  ></div>
                )}
                {cat.pattern === "grid" && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                )}
                {cat.pattern === "waves" && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
                    }}
                  ></div>
                )}
                {cat.pattern === "circles" && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)",
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                )}
                {cat.pattern === "triangles" && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 filter grayscale">
                  {cat.icon}
                </div>

                <h3 className="font-bold text-xl mb-4 tracking-tight">{cat.name}</h3>

                <p
                  className={`text-sm leading-relaxed font-light ${
                    active === cat.name ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {cat.description}
                </p>

                {/* Active Indicator */}
                {active === cat.name && (
                  <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full animate-ping"></div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Category Details */}
      <div className="relative z-10 w-full">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 animate-fade-in">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-4xl filter grayscale">{categories.find((cat) => cat.name === active)?.icon}</div>
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
              {active} <span className="font-bold">Solutions</span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl font-light mb-8">
            Cater for convenience and privacy. Incorporate social logins, facilitate SSO and loyalty program extensions,
            and federate with industry partner IAM systems. Our {active.toLowerCase()} solutions provide
            enterprise-grade security with seamless user experiences.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            {["SSO Integration", "Social Logins", "Multi-factor Auth", "API Access"].map((feature, index) => (
              <span
                key={feature}
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium animate-fade-in hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand-width {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(225deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-expand-width {
          animation: expand-width 1s ease-out 0.5s forwards;
          width: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}
