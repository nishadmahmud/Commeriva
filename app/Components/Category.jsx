"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const categories = [
  {
    name: "Clothing & Fashion",
    icon: "👖",
    description: "Clothing and fashion is consistently the largest and fastest-growing e-commerce category worldwide. It covers men's wear, women's and children's clothing. Customers in this segment often look for variety, seasonal collections, and affordable pricing. For men, shirts, and ethnic wear remain popular, while women's categories include dresses, abayas, hijab. Children's fashion ranges from baby clothing to school uniforms and seasonal outfits. Footwear and fashion accessories. Successful e-commerce platforms in fashion focus heavily on high-quality product images, clear size charts, virtual try-on features, and style recommendations to drive higher conversions.",
    pattern: "dots",
  },
  {
    name: "Electronics & Gadgets",
    icon: "🪛",
    description: "Electronics and gadgets represent a high-value category with strong demand across all age groups. This segment includes smartphones, tablets, laptops, desktops, and their accessories. Increasingly popular are wearables such as smartwatches and fitness trackers, along with portable audio devices like headphones, earbuds, and Bluetooth speakers. The gaming subcategory has also gained momentum, with consoles, VR devices, and gaming accessories seeing strong sales. Smart home technology, such as IoT devices, home security cameras, and smart lighting, adds to this category's potential.",
    pattern: "lines",
  },
  {
    name: "Home & Living",
    icon: "🏠",
    description: "The home and living category is centered around lifestyle improvement and includes furniture, kitchen appliances, décor, and home essentials. Furniture ranges from beds, sofas, and dining tables to compact storage solutions designed for urban homes. Kitchen and dining products include cookware, appliances like blenders and microwaves, and small essentials such as storage jars and cutlery. Home décor has become a rising trend with customers seeking wall art, lamps, rugs, and lighting that can personalize their living spaces. Platforms offering this category often integrate room-wise shopping features and, in advanced cases, AR tools that allow buyers to visualize furniture placement in their homes.",
    pattern: "grid",
  },
  {
    name: "Health & Wellness",
    icon: "🩺",
    description: "The health and wellness segment is a fast-expanding category driven by lifestyle changes and growing health awareness. It covers dietary supplements, vitamins, protein powders, and functional foods, alongside medical devices like digital thermometers, blood pressure monitors, and glucometers. Home fitness equipment, including treadmills, yoga mats, and dumbbells, is also in high demand. Buyers prioritize safety, authenticity, and expert endorsements in this category. Features such as subscription delivery for supplements, integration with fitness apps, and professional health advice help e-commerce platforms build trust and long-term customer loyalty.",
    pattern: "waves",
  },
  {
    name: "Baby & Kids",
    icon: "👶",
    description: "The baby and kids category is a high-engagement area for parents and families. It spans clothing, baby care products, toys, games, strollers, car seats, and educational supplies. Safety and quality are critical purchase drivers here, with parents seeking certified, non-toxic, and durable products. Age-based product filtering, gift registry options, and curated collections for birthdays or baby showers are effective e-commerce features in this segment. Since these products are often replaced or upgraded quickly as children grow, repeat sales potential is very high.",
    pattern: "circles",
  },
  {
    name: "Groceries & Essentials",
    icon: "🛍️",
    description: "Groceries and everyday essentials form the backbone of daily commerce, and their shift online has grown rapidly due to customer demand for convenience. This category includes fresh produce like fruits and vegetables, packaged goods such as snacks, rice, and cooking oil, beverages including tea, coffee, and juices, and household cleaning products. Customers expect speed, freshness, and reliability in delivery. Same-day or next-day delivery, quick reorder options, and subscription models for staple items are critical features. Loyalty programs and wallet systems further encourage repeat purchases in this category.",
    pattern: "triangles",
  },
  {
    name: "Sports & Outdoor",
    icon: "⚽",
    description: "The sports and outdoor category caters to athletes, fitness enthusiasts, and adventurers. It includes sportswear, athletic footwear, gym equipment such as treadmills and weights, and outdoor gear like tents, hiking kits, and camping accessories. Customers here often look for brand authenticity, performance specifications, and bundled starter kits. Platforms can boost engagement by offering guides ('what you need to start hiking') and curated packages for specific sports. This category benefits from seasonal promotions and influencer tie-ups with fitness communities.",
    pattern: "dots",
  },
  {
    name: "Automotive & Accessories",
    icon: "🛠️",
    description: "The automotive category focuses on products for car and motorcycle owners. It includes car accessories such as seat covers, floor mats, cameras, and GPS devices; motorcycle gear like helmets and riding jackets; and spare parts and repair tools. Vehicle-specific filtering is essential, allowing users to select their car or bike model and instantly see compatible products. Additional features like installation services, warranty tracking, and service center locators help create trust in this category.",
    pattern: "waves",
  },
]

export default function Category() {
  const [active, setActive] = useState("Clothing & Fashion")
  const [desc, setDesc] = useState("Clothing and fashion is consistently the largest and fastest-growing e-commerce category worldwide. It covers men's wear, women's and children's clothing. Customers in this segment often look for variety, seasonal collections, and affordable pricing. For men, shirts, and ethnic wear remain popular, while women's categories include dresses, abayas, hijab. Children's fashion ranges from baby clothing to school uniforms and seasonal outfits. Footwear and fashion accessories. Successful e-commerce platforms in fashion focus heavily on high-quality product images, clear size charts, virtual try-on features, and style recommendations to drive higher conversions.")
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false)

  const handleCategoryClick = (cat) => {
    // If clicking the same category that's already active, toggle accordion
    if (active === cat.name) {
      setMobileAccordionOpen(!mobileAccordionOpen)
    } else {
      // If clicking a different category, set new active and open accordion
      setActive(cat.name)
      setDesc(cat.description)
      setMobileAccordionOpen(true)
    }
  }

  console.log(desc)
  
  return (
   <div>
    <h2 className="lg:text-5xl text-4xl title mb-10 mt-16 text-center font-semibold tracking-tight text-gray-900  md:text-4xl">
           E-Commerce Business Suite
          </h2>
     <div className="relative bg-white h-[100vh] text-gray-900 flex flex-col lg:flex-row gap-10 items-start justify-start md:mb-20 w-full max-w-11/12 mx-auto px-4 sm:px-6 overflow-hidden pt-4">
      
      
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-900 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-900 rotate-45 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-gray-900 rounded-full animate-float-slow"></div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 w-full lg:max-w-none">
        {categories.map((cat, index) => (
          <div key={cat.name}>
            <motion.div
              onClick={() => handleCategoryClick(cat)}
              className={`group relative cursor-pointer border border-gray-300 rounded-2xl transition-all duration-500 animate-slide-up ${
                active === cat.name && cat.description ? "transform scale-105" : "hover:scale-102"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`relative overflow-hidden rounded-xl p-4 sm:p-5 transition-all duration-500 ${
                  active === cat.name && cat.description
                    ? "bg-primary-color text-white border-gray-50 shadow-2xl"
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
                <div className="relative w-full mx-auto text-center z-10">
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 filter"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cat.icon}
                  </motion.div>

                  <h3 className="font-semibold text-sm sm:text-base mb-4 tracking-wide text-center px-2">{cat.name}</h3>

                  {/* Active Indicator */}
                  {active === cat.name && (
                    <motion.div 
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 w-3 h-3 bg-white rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            </motion.div>

            {/* Mobile Accordion */}
            <div className="lg:hidden">
              <AnimatePresence>
                {active === cat.name && mobileAccordionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.04, 0.62, 0.23, 0.98] 
                    }}
                    className="mt-4 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <motion.div 
                      className="p-4 sm:p-6"
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl sm:text-3xl filter grayscale">{cat.icon}</div>
                          <h3 className="text-lg sm:text-xl font-light text-gray-900 tracking-tight">
                            {cat.name} <span className="font-bold">Solutions</span>
                          </h3>
                        </div>
                        <motion.button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileAccordionOpen(false);
                          }}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.button>
                      </div>

                      <motion.p 
                        className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {cat.description}
                      </motion.p>

                      {/* Feature Pills */}
                      <motion.div 
                        className="flex flex-wrap gap-2 sm:gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        {["User & Authentication", "Product & Catalog", "AI", "Machine Learning", "Smart/Advanced Features", "Notifications & Communication", "Order & Delivery", "Customer Engagement", "Security", "CMS"].map((feature, index) => (
                          <motion.span
                            key={feature}
                            className="px-3 sm:px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: 0.4 + (index * 0.05), 
                              duration: 0.2 
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Active Category Details - Hidden on mobile */}
      <div className="hidden lg:block sticky top-0 z-10 w-full">
        <motion.div 
          className="bg-gray-50 border border-gray-200 flex flex-col justify-between rounded-xl p-7 h-fit"
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div className="flex items-center gap-6 mb-4">
            <div className="text-4xl filter grayscale">{categories.find((cat) => cat.name === active)?.icon}</div>
            <h2 className="text-3xl text-gray-800 tracking-tight">
              {active} <span className="font-bold text-gray-900">Solutions</span>
            </h2>
          </div>

          <p className="text-gray-700 max-w-4xl font-normal mb-6">
           {desc}
          </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-self-auto items-center gap-4">
            {["User & Authentication", "Product & Catalog", "AI", "Machine Learning", "Smart/Advanced Features", "Notifications & Communication", "Order & Delivery", "Customer Engagement", "Security", "CMS"].map((feature, index) => (
              <motion.span
                key={feature}
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
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
   </div>
  )
}