"use client"; // Needed for Framer Motion in Next.js app router

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ClientReview() {
  return (
    <div className="w-10/12 mx-auto py-10">
      <div>
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold tracking-tight title text-center text-gray-900 sm:text-4xl">
          Customer Feedback
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600 poppins">
          Valuable feedback from our customer
        </p>
      </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-7xl mx-auto">
        {/* Vercel */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-primary rounded-xl p-6 shadow-sm md:row-span-2 flex flex-col justify-between"
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
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-primary rounded-xl p-6 shadow-sm flex flex-col justify-between"
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
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-primary rounded-xl p-6 shadow-sm flex flex-col justify-between"
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
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-900 text-white border-primary rounded-xl p-6 shadow-sm md:row-span-2 flex flex-col justify-between"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border rounded-xl p-6 border-primary shadow-sm flex flex-col justify-between"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border rounded-xl p-6 border-primary shadow-sm flex flex-col justify-between"
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
      </div>
    </div>
  );
}
