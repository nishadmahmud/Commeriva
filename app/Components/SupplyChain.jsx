// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const SupplyChain = () => {
//   const caseStudies = [
//     {
//       id: 1,
//       logo: "MIDNIGHT SOCIETY",
//       title: "Midnight Society",
//       description: "Midnight Society launched their game to 400,000+ users in just 6 weeks using Nhost. Their team saved months of development time with our end-to-end backend solution."
//     },
//     {
//       id: 2,
//       logo: "React Flow",
//       title: "React Flow", 
//       description: "React Flow implemented a complete subscription platform in just 2 months with Nhost. Their small team was able to focus on product features instead of backend infrastructure."
//     },
//     {
//       id: 3,
//       logo: "REVTRON",
//       title: "Revtron",
//       description: "RevTron achieved triple-digit growth using Nhost to power their analytics platform. They reduced onboarding time by 80% and could rapidly adapt to customer needs."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Loved by teams who move fast
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
//             Nhost powers everything from indie hacker side projects to the core
//             infrastructure of scaling startups.
//           </p>
//           <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 text-lg font-medium group">
//             Learn more
//             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//           </button>
//         </div>

//         {/* Case Studies Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {caseStudies.map((study) => (
//             <div
//               key={study.id}
//               className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
//             >
//               {/* Blue Gradient Top Section with Logo */}
//               <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 h-48 flex items-center justify-center">
//                 <div className="bg-black rounded-lg px-6 py-4 flex items-center justify-center min-h-[80px]">
//                   <div className="text-white font-bold text-lg tracking-wider text-center">
//                     {study.logo}
//                   </div>
//                 </div>
//               </div>

//               {/* Black Bottom Section with Content */}
//               <div className="bg-black p-8">
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-white">
//                     {study.title}
//                   </h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     {study.description}
//                   </p>
//                   <button className="inline-flex items-center text-white font-semibold group-hover:text-gray-300 transition-colors duration-200">
//                     Read the story
//                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupplyChain;
'use client'
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
  {
    logoText: "Socity",
    title: "Midnight Society",
    description:
      "Midnight Society launched their game to 400,000+ users in just 6 weeks using Nhost. Their team saved months of development time with our end‑to‑end backend solution.",
    href: "/case-studies/midnight-society",
  },
  {
    logoText: "React Flow",
    title: "React Flow",
    description:
      "React Flow implemented a complete subscription platform in just 2 months with Nhost. Their small team focused on product features instead of backend infrastructure.",
    href: "/case-studies/react-flow",
  },
  {
    logoText: "Revetron",
    title: "Revtron",
    description:
      "RevTron achieved triple‑digit growth using Nhost to power their analytics platform. They reduced onboarding time by 80% and rapidly adapted to customer needs.",
    href: "/case-studies/revtron",
  },
];

export default function SupplyChain() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Boost your supply chain efficiency
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive android app for distribution management: orders, SKU scanning, tracking, metrics, and vehicle monitoring in one solution.
          </p>
          
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border p-6 shadow-sm border-gray-300 bg-[linear-gradient(181deg,rgba(5,5,5,1)_0%,rgba(0,212,255,0)_100%)]"
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-50"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(0,0,0,0.06) 22px, rgba(0,0,0,0.06) 23px), repeating-linear-gradient(90deg, transparent, transparent 22px, rgba(0,0,0,0.06) 22px, rgba(0,0,0,0.06) 23px)",
                  maskImage:
                    "radial-gradient(70% 70% at 50% 40%, black 60%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(70% 70% at 50% 40%, black 60%, transparent 100%)",
                }}
              />
              <div className="rounded-2xl border border-gray-200 bg-gray-50/30 p-8 text-center">
                <div className="mx-auto inline-flex h-20 w-full items-center justify-center">
                  <span className="whitespace-pre-line text-2xl font-extrabold tracking-wider text-gray-900">
                    {s.logoText}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.description}</p>
              </div>
             
            </motion.article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />
    </section>
  );
}
