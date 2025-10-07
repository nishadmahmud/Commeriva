"use client"; // Needed for Framer Motion in Next.js app router

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -100, 
    scale: 0.8,
    rotateY: -15,
    filter: "blur(10px)"
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
      filter: { duration: 0.8, delay: i * 0.15 + 0.3 }
    },
  }),
  hover: {
    y: -12,
    scale: 1.03,
    rotateY: 2,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const rightCardVariants = {
  hidden: { 
    opacity: 0, 
    x: 100, 
    scale: 0.8,
    rotateY: 15,
    filter: "blur(10px)"
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
      filter: { duration: 0.8, delay: i * 0.15 + 0.3 }
    },
  }),
  hover: {
    y: -12,
    scale: 1.03,
    rotateY: -2,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export default function ClientReview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity, scale }}
      className="w-10/12 mx-auto py-10 bg-white dark:bg-neutral-950"
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold tracking-tight title text-center text-gray-900 dark:text-gray-100 sm:text-4xl">
          Customer Feedback
        </h2>
        <motion.p 
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="mt-2 text-lg text-center text-gray-600 dark:text-gray-300 poppins"
        >
          Valuable feedback from our customer
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 mt-5 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-7xl mx-auto"
      >
        {/* Vercel */}
        <motion.div
          variants={cardVariants}
          custom={0}
          whileHover="hover"
          className="bg-white dark:bg-neutral-900 border border-primary dark:border-white/10 rounded-xl p-6 shadow-sm md:row-span-2 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
        >
          <Image
            width={200}
            height={200}
            src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702171.jpg"
            alt="satsuna"
            className="h-10 w-16 mb-4"
          />
          <p className="mb-4">
         “Our new corporate website gives a strong impression to clients. It feels modern, professional, and perfectly represents our brand.”
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=1"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">
Atsushi Shimoikura</p>
              <p className="text-xs opacity-70">Managing Director / CEO</p>
            </div>
          </div>
        </motion.div>

        {/* Theo Browne */}
        <motion.div
          variants={rightCardVariants}
          custom={1}
          whileHover="hover"
          className="bg-white dark:bg-neutral-900 border border-primary dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
        >
          <p className="mb-4">
            Since launching my e-commerce site, I’ve seen a big boost in sales. The product pages look professional and are very easy to manage
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701872.jpg"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">MD. Mizanur Rahman</p>
              <p className="text-xs opacity-70">Owner, Mobile Club</p>
            </div>
          </div>
        </motion.div>

        {/* Julian Benegas */}
        <motion.div
          variants={rightCardVariants}
          custom={2}
          whileHover="hover"
          className="bg-white dark:bg-neutral-900 border border-primary dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
        >
          <p className="mb-4">
           Updating my projects and achievements is super easy. I don’t need technical skills to keep my portfolio up to date
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701980.png"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">Mehedi Emu</p>
              <p className="text-xs opacity-70">CEO</p>
            </div>
          </div>
        </motion.div>

        {/* Stripe */}
        <motion.div
          variants={rightCardVariants}
          custom={3}
          whileHover="hover"
          className="bg-gray-900 dark:bg-gray-800 text-white border-primary dark:border-white/10 rounded-xl p-6 shadow-sm md:row-span-2 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="font-bold text-lg mb-4">MKS Outfit</h2>
          <p className="mb-4">
           

           Since launching our fashion e-commerce store, we’ve seen a huge jump in sales. Customers really like the clean design.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701779.jpg"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">Motiur Rahman</p>
              <p className="text-xs opacity-80">Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Paul Copplestone */}
        <motion.div
          variants={cardVariants}
          custom={4}
          whileHover="hover"
          className="bg-white dark:bg-neutral-900 border rounded-xl p-6 border-primary dark:border-white/10 shadow-sm flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
        >
          <p className="mb-4">
           I really like the way the site is structured. Visitors can find information quickly, and it helps us look more credible in the market.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702087.png"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">M.A Matin</p>
              <p className="text-xs opacity-70">Managing Director</p>
            </div>
          </div>
        </motion.div>

        {/* Kevin Van Gundy */}
        <motion.div
          variants={cardVariants}
          custom={5}
          whileHover="hover"
          className="bg-white dark:bg-neutral-900 border rounded-xl p-6 border-primary dark:border-white/10 shadow-sm flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300"
        >
          <p className="mb-4">
          The online store runs smoothly, and the checkout process is super easy. My customers love the clean design and fast loading speed.

          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702013.jpg"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">SAMI</p>
              <p className="text-xs opacity-70">Owner & CEO</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
