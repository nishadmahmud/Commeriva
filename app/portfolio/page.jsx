"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Gadget Bodda",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.gadgetboddaa.com/",
    technologies: ["Next.js", "React", "Laravel", "Php"],
  },
  {
    id: 2,
    title: "Mobile Club",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409274.png",
    description:
      "Mobile Club is a famous shop in Jamuna Future park in Bangladesh. They are sale used iPhone and Gadgets Accessories.",
    liveLink: "https://www.mobileclub.co/",
    technologies: ["Next.js", "Firebase", "Gsap"],
  },
  {
    id: 3,
    title: "Satsuna Corporation",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409303.jpg",
    description:
      "Satsuna is a Japanese blog website. They publish famous blogs on Japan.",
    liveLink: "https://www.satsuna.co.jp",
    technologies: ["Next.js", "API Integration", "React"],
  },
  {
    id: 4,
    title: "CeL TeL",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409240.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.celtelbd.com/",
    technologies: ["Next.js", "API Integration", "Tailwind"],
  },
  {
    id: 5,
    title: "Morshed Mart",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409124.png",
    description:
      "Morshed Mart is a fashion e-commerce store. They sell T-shirts and branded shirts.",
    liveLink: "https://www.morshedmart.com/",
    technologies: ["Next.js", "MySql", "Framer motion"],
  },
  {
    id: 6,
    title: "Elite",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409329.png",
    description:
      "Elite is a quality laptop seller. They sell many 2nd hand and new laptops.",
    liveLink: "https://www.eliteebd.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Apple Newton Bd",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409124.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://applenewtonbd.com/",
    technologies: ["React", "Express", "MySQL"],
  },
]

const categories = ["All", "Next.js", "React", "Firebase", "Laravel", "Php", "Tailwind", "API Integration", "HTML", "CSS", "JavaScript", "MySql", "Framer motion", "Express"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeCategory))

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Our Portfolio</h1>
        <p className="text-gray-600 mt-2">Select a project to explore</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              activeCategory === category
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 w-full text-sm font-medium text-gray-900 border border-gray-900 px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-white transition"
                >
                  View Project
                  <ExternalLink size={18}></ExternalLink>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
