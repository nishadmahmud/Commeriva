"use client"; // Needed for Framer Motion in Next.js app router

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ClientReview() {
  return (
    <div className="w-10/12 mx-auto pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 max-w-7xl mx-auto">
        
        {/* Vercel */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-gray-400 rounded-xl p-6 shadow-sm md:row-span-2 flex flex-col justify-between"
        >
          <Image width={200} height={200}
           src="/bonzer.png" alt="Vercel" className="h-10 w-16 mb-4" />
          <p className="mb-4">
            “The best practices built-in to their &lt;SignIn/&gt; and &lt;UserProfile/&gt; components
            would take months to implement in-house, yet no sacrifice is made in
            terms of Enterprise extensibility or customization to your brand.”
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold text-sm">Guillermo Rauch</p>
              <p className="text-xs opacity-70">CEO / Vercel</p>
            </div>
          </div>
        </motion.div>

        {/* Theo Browne */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-gray-400 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <p className="mb-4">
            Clerk feels like the first time I booted my computer with an SSD.
            It’s so much faster and simpler that it changed how I do things.
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold text-sm">Theo Browne</p>
              <p className="text-xs opacity-70">CEO / Ping Labs</p>
            </div>
          </div>
        </motion.div>

        {/* Julian Benegas */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border border-gray-400 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <p className="mb-4">
            After spending many hours on auth issues that seemed simple (but were not), we moved to Clerk and all that burden was lifted. We kind of wish we’d made that decision earlier.
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold text-sm">Julian Benegas</p>
              <p className="text-xs opacity-70">CEO / BaseHub</p>
            </div>
          </div>
        </motion.div>

        {/* Stripe */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gray-900 text-white border-gray-400 rounded-xl p-6 shadow-sm md:row-span-2 flex flex-col justify-between">
          <h2 className="font-bold text-lg mb-4">stripe</h2>
          <p className="mb-4">
            We’re big admirers of what the @ClerkDev team are building and looking forward to working more closely with them.
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=7" className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold text-sm">Patrick Collison</p>
              <p className="text-xs opacity-80">CEO / Stripe</p>
            </div>
          </div>
        </motion.div>

        {/* Paul Copplestone */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border rounded-xl p-6 border-gray-400 shadow-sm flex flex-col justify-between">
          <p className="mb-4">
            Clerk’s integration gives Supabase developers another incredible option for handling authentication. And the Clerk team are a pleasure to work with.
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=4" className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold text-sm">Paul Copplestone</p>
              <p className="text-xs opacity-70">CEO / Supabase</p>
            </div>
          </div>
        </motion.div>

        {/* Kevin Van Gundy */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border rounded-xl p-6 border-gray-400 shadow-sm flex flex-col justify-between">
          <p className="mb-4">
            Clerk let us spin up a new product in hours instead of weeks. As a company that deeply values developer velocity— Clerk is exactly what we needed.
          </p>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold text-sm">Kevin Van Gundy</p>
              <p className="text-xs opacity-70">CEO / Hypermode</p>
            </div>
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}
