"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    description: `Custom online stores designed to sell smarter and grow faster.`,
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

// ====== Animation Variants ======
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30, scale: 1.1 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// ====== Component ======
export default function OurServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Active/previous for image transition
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  // Sync right image height with left content
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [lockHeight, setLockHeight] = useState(false);

  useEffect(() => {
    if (!leftRef.current) return;
    const el = leftRef.current;
    const update = () => setLeftHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Stabilize container height to avoid jumps
  useEffect(() => {
    if (lockHeight) {
      setContainerHeight((prev) => Math.max(prev, leftHeight));
    } else {
      setContainerHeight(leftHeight);
    }
  }, [leftHeight, lockHeight]);

  useEffect(() => {
    setPreviousIndex((prev) => (prev === activeIndex ? prev : prev));
  }, [activeIndex]);

  const handleSelect = (idx) => {
    setPreviousIndex(activeIndex);
    setLockHeight(true);
    setActiveIndex(idx);
    // release height lock after animations finish
    window.setTimeout(() => setLockHeight(false), 800);
  };

  return (
    <section ref={ref} id="services" className="md:pt-12 pt-10 md:pb-16 pb-16 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 dark:bg-white/5 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-100 dark:bg-white/5 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-100 dark:bg-white/5 rounded-full opacity-15 blur-xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pb-12"
        >
          <motion.h1 
            className="lg:text-5xl md:text-4xl text-3xl font-semibold title text-gray-900 dark:text-gray-100"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gray-300 dark:bg-white/10 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Left: Titles and expanding content */}
          <motion.div
            className="relative md:col-span-2 space-y-2 pl-6 z-10 text-gray-900 dark:text-gray-100"
            ref={leftRef}
          >
            {/* vertical guideline */}
            <div className="hidden md:block absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-200/60 to-transparent dark:from-white/15 dark:via-white/10 dark:to-transparent"></div>
            {services.map((service, idx) => (
              <motion.div key={service.title} className="relative">
                <button
                  onClick={() => handleSelect(idx)}
                  className="w-full text-left pr-3 py-2 focus:outline-none text-gray-900 dark:text-gray-100 hover:text-gray-950 dark:hover:text-white cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    {/* bullet */}
                    <span className={`mt-2 shrink-0 w-3 h-3 rounded-full border transition-all duration-300 ${activeIndex === idx ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white ring-2 ring-gray-900/20 dark:ring-white/20 shadow-sm" : "border-gray-400 dark:border-white/30 bg-white dark:bg-white/10"}`}></span>
                    <h3 className={`text-base md:text-lg font-semibold tracking-tight ${activeIndex === idx ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                      {service.title}
                    </h3>
                  </div>
                </button>

                {/* Reveal content when active */}
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="pl-6 pr-3 pb-3 text-gray-900 dark:text-gray-100"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-700 dark:text-gray-300 mb-3 poppins text-sm leading-relaxed"
                    >
                      {service.description}
                    </motion.p>

                    <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 mb-4">
                      {service.points.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: 0.04 * i }}
                          className="flex items-center text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></span>
                          {p}
                        </motion.li>
                      ))}
                    </ul>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={service.buttonLink}
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-950 dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    >
                      {service.buttonText}
                    </a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image with right-to-left cover transition */}
          <div className="relative w-full md:col-span-3 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 bg-gray-100 dark:bg-neutral-900 z-0" style={{ height: (containerHeight || leftHeight) || undefined }}>
            {/* Base (previous) image */}
            <Image
              unoptimized
              src={services[previousIndex]?.image || services[activeIndex].image}
              alt={services[previousIndex]?.title || services[activeIndex].title}
              width={1200}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Revealing layer for active image */}
            <motion.div
              key={activeIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-transparent overflow-hidden"
            >
              <Image
                unoptimized
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                width={1200}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
