"use client"

import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Gadget Bodda",
    image: "/gb.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.gadgetboddaa.com/",
    technologies: ["Next.js", "React", "Laravel", "Php"],
  },
  {
    id: 2,
    title: "Mobile Club",
    image: "/mobile-club.png",
    description:
      "Mobile Club is a famous shop in Jamuna Future park in Bangladesh. They are sale used Iphone and Gadgets Accessories",
    liveLink: "https://www.mobileclub.co/",
    technologies: ["Next.js", "Firebase", "Gsap"],
  },
  {
    id: 3,
    title: "Satsuna Corporation",
    image: "/satsuna.jpeg",
    description:
      "Satsuna is a japanees blog website. They publish the famous blog on Japan",
    liveLink: "https://www.satsuna.co.jp",
    technologies: ["Next.js", "API Integration", "React"],
  },
  {
    id: 4,
    title: "CeL TeL",
    image: "/ceLtelProject.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.celtelbd.com/",
    technologies: ["Next.js", "API Integration", "Tailwind"],
  },
  {
    id: 5,
    title: "Morshed Mart",
    image: "/morshedmart.png",
    description:
      "Morshed mart is a fashion e-commarce. They sell T-shirt, Solid and Stripe Brand Shirt",
    liveLink: "https://www.morshedmart.com/",
    technologies: ["Next.js", "MySql", "Framer motion"],
  },
  {
    id: 6,
    title: "Elite",
    image: "/eliteBd.png",
    description:
      "Elite is a qualityfull laptop saller, They sell many 2nd hand and new laptop",
    liveLink: "https://www.eliteebd.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Apple Newton Bd",
    image: "/appleNewton.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://applenewtonbd.com/",
    technologies: ["React", "Express", "MySQL"],
  },
]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(1)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
      <div className="flex h-screen">
        {/* Left Side - Project List */}
        <div className="w-1/3 bg-gray-50 border-r border-gray-200 no-scrollbar overflow-y-auto">
          <div className="p-8">
            <h1 className="md:text-4xl text-3xl font-semibold mb-2 text-gray-900">Our Portfolio</h1>
            <p className="text-gray-600 mb-8">Select a project to explore</p>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border-l-4 ${
                    activeProject === project.id
                      ? "bg-white border-gray-900 text-gray-900 shadow-lg"
                      : "bg-white/70 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-500 hover:shadow-md"
                  }`}
                  onClick={() => setActiveProject(project.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex gap-1">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="flex-1 relative">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-all duration-500 ${
                activeProject === project.id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {/* Project Image Background */}
              <div className="absolute inset-0">
                <Image
                fill
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
              </div>

              {/* Project Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-center p-12">
                <div className="max-w-2xl">
                  {/* Project Number */}
                  <div className="text-6xl font-bold text-gray-300 mb-4">
                    {String(
                      projects.findIndex((p) => p.id === project.id) + 1
                    ).padStart(2, "0")}
                  </div>

                  {/* Project Title */}
                  <h2 className="text-4xl montserrat font-semibold mb-6 text-gray-100">
                    {project.title}
                  </h2>

                  {/* Project Description */}
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-900/10 backdrop-blur-sm text-gray-100 rounded-full border border-gray-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Link Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-transparent backdrop-blur-lg text-gray-100 font-semibold rounded-full hover:bg-gray-200 border border-gray-100 transition-all duration-300 transform hover:scale-105 group shadow-lg hover:text-gray-800"
                  >
                    View Live Project
                    <svg
                      className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 border border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-900 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
