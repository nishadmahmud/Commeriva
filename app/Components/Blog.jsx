"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, userId } from "../page";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function BlogSection() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return (
    <div className="bg-white dark:bg-neutral-950 py-10 md:pt-28 pt-10 px-6">
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading insights...</p>
      </div>
    </div>
  );
  
  if (error)
    return (
      <div className="bg-white dark:bg-neutral-950 py-10 md:pt-28 pt-10 px-6">
        <p className="text-center py-20 text-red-500 dark:text-red-400">Failed to load insights.</p>
      </div>
    );

  const blogs = data?.data?.slice(0, 6) || [];

  return (
    <section id="blog" className="bg-white dark:bg-neutral-950 py-10 md:pt-28 pt-10 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl pb-10 text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold title tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Insights on Building Your Perfect Store
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 poppins">
            Discover expert tips, success stories, and the latest trends in custom
            e-commerce solutions.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <Image
                unoptimized
                width={500}
                height={500}
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <Link href={`/blogs/${blog.id}`}>
                <h3 className="text-lg font-semibold poppins text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h3>
              </Link>
              <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                  Read More
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 text-center mt-12"
      >
        <Link href="/blogs" className="inline-block">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-medium poppins cursor-pointer transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            View All Insights
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
