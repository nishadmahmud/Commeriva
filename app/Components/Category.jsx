"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiClothes, GiBabyBottle } from "react-icons/gi";
import { FaHouseUser, FaRegBuilding, FaScrewdriverWrench } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoMdFootball } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const categories = [
  {
    name: "Clothing",
    icon: <GiClothes />,
    description:
      "Clothing and fashion is consistently the largest and fastest-growing e-commerce category worldwide. It covers men's wear, women's and children's clothing. Customers in this segment often look for variety, seasonal collections, and affordable pricing. For men, shirts, and ethnic wear remain popular, while women's categories include dresses, abayas, hijab. Children's fashion ranges from baby clothing to school uniforms and seasonal outfits.",
    pattern: "dots",
  },
  {
    name: "Electronics",
    icon: <HiWrenchScrewdriver />,
    description:
      "Electronics and gadgets represent a high-value category with strong demand across all age groups. This segment includes smartphones, tablets, laptops, desktops, and their accessories. Increasingly popular are wearables such as smartwatches and fitness trackers, along with portable audio devices like headphones, earbuds, and Bluetooth speakers.",
    pattern: "lines",
  },
  {
    name: "Home",
    icon: <FaHouseUser />,
    description:
      "The home and living category is centered around lifestyle improvement and includes furniture, kitchen appliances, décor, and home essentials. Furniture ranges from beds, sofas, and dining tables to compact storage solutions designed for urban homes. Kitchen and dining products include cookware, appliances like blenders and microwaves, and small essentials such as storage jars and cutlery. Home décor has become a rising trend with customers seeking wall art, lamps, rugs, and lighting that can personalize their living spaces.",
    pattern: "grid",
  },
  {
    name: "Health",
    icon: <MdHealthAndSafety />,
    description:
      "The health and wellness segment is a fast-expanding category driven by lifestyle changes and growing health awareness. It covers dietary supplements, vitamins, protein powders, and functional foods, alongside medical devices like digital thermometers, blood pressure monitors, and glucometers. Home fitness equipment, including treadmills, yoga mats, and dumbbells, is also in high demand.",
    pattern: "waves",
  },
  {
    name: "Baby & Kids",
    icon: <GiBabyBottle />,
    description:
      "The baby and kids category is a high-engagement area for parents and families. It spans clothing, baby care products, toys, games, strollers, car seats, and educational supplies. Safety and quality are critical purchase drivers here, with parents seeking certified, non-toxic, and durable products.",
    pattern: "circles",
  },
  {
    name: "Groceries",
    icon: <RiShoppingBag3Fill />,
    description:
      "Groceries and everyday essentials form the backbone of daily commerce, and their shift online has grown rapidly due to customer demand for convenience. This category includes fresh produce like fruits and vegetables, packaged goods such as snacks, rice, and cooking oil, beverages including tea, coffee, and juices, and household cleaning products. Customers expect speed, freshness, and reliability in delivery.",
    pattern: "triangles",
  },
  {
    name: "Sports",
    icon: <IoMdFootball />,
    description:
      "The sports and outdoor category caters to athletes, fitness enthusiasts, and adventurers. It includes sportswear, athletic footwear, gym equipment such as treadmills and weights, and outdoor gear like tents, hiking kits, and camping accessories. Customers here often look for brand authenticity, performance specifications, and bundled starter kits.",
    pattern: "dots",
  },
  {
    name: "Automotive",
    icon: <FaScrewdriverWrench size={25} />,
    description:
      "The automotive category focuses on products for car and motorcycle owners. It includes car accessories such as seat covers, floor mats, cameras, and GPS devices; motorcycle gear like helmets and riding jackets; and spare parts and repair tools. Vehicle-specific filtering is essential, allowing users to select their car or bike model and instantly see compatible products.",
    pattern: "waves",
  },
  {
    name: "Corporate",
    icon: <FaRegBuilding />,
    description:
      "A corporate website is more than just an online presence — it is the digital face of your brand. It represents your professionalism, communicates your services, and builds trust with your clients. Our Corporate Website Solutions are designed to give your business a strong online identity with a professional look, smooth functionality, and high performance.",
    pattern: "lines",
  },
];

const features = [
  "User & Authentication",
  "Product & Catalog",
  "CMS",
  "Machine Learning",
  "Smart/Advanced Features",
  "AI",
  "Notifications",
  "Order & Delivery",
  "Security",
];

export default function Category() {
  const [active, setActive] = useState(categories[0].name);
  const [desc, setDesc] = useState(categories[0].description);
  const [modalOpen, setModalOpen] = useState(false);

  const isLargeDevice = useMediaQuery({ minWidth: 1024 });
  const [visibleCategories, setVisibleCategories] = useState([]);

  useEffect(() => {
    if (isLargeDevice) {
      setVisibleCategories(categories.slice(0, 9));
    } else {
      setVisibleCategories(categories.slice(0, 8));
    }
  }, [isLargeDevice]);

  const handleCategoryClick = (cat) => {
    setActive(cat.name);
    setDesc(cat.description);
    if (!isLargeDevice) {
      setModalOpen(true);
    }
  };

  return (
    <div className="relative">
      {/* soft background glows */}
      <div className="pointer-events-none absolute -top-20 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-slate-200 via-white to-slate-100 blur-2xl opacity-60 dark:hidden" />
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-slate-200 via-white to-slate-100 blur-2xl opacity-60 dark:hidden" />

      <h2 className="lg:text-5xl md:text-4xl text-3xl title mb-3 mt-16 text-center font-semibold px-4 tracking-tight text-gray-900 dark:text-gray-100">
        E-Commerce Business Suite
      </h2>
      <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mb-10 px-4 poppins">Choose a domain and explore a tailored feature set for your business.</p>

      <div className="relative bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 flex flex-col lg:flex-row gap-8 items-start justify-start md:mb-20 w-full max-w-11/12 mx-auto px-4 sm:px-6 overflow-hidden pt-4">
        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-10 w-full lg:max-w-none">
          {visibleCategories.map((cat, index) => (
            <motion.div
              key={cat.name}
              onClick={() => handleCategoryClick(cat)}
              className={`group relative cursor-pointer rounded-2xl transition-all duration-300 animate-slide-up ${
                active === cat.name ? "ring-1 ring-slate-300 dark:ring-white/30 shadow-lg" : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* soft animated glow instead of hard top line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active === cat.name ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-100/70 dark:from-white/5 to-transparent"
              />

              <div
                className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 border transition-all duration-300 ${
                  active === cat.name
                    ? "border-slate-300 dark:border-white/30 bg-white dark:bg-neutral-900"
                    : "border-gray-100 dark:border-white/10 bg-white dark:bg-neutral-900 hover:border-gray-200 dark:hover:border-white/20"
                }`}
              >
                <div className="relative w-full mx-auto text-center z-10 flex items-center justify-center flex-col">
                  <motion.div
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-gray-800 dark:text-gray-100"
                    whileHover={{ scale: 1.1, rotate: 1.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <h3 className="font-medium text-xs sm:text-sm mb-2 tracking-wide text-center px-2 poppins text-gray-800 dark:text-gray-200">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Active Category Details */}
        <div className="hidden lg:block sticky top-0 z-10 w-full poppins">
          <motion.div
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 shadow-xl rounded-2xl p-7 h-fit"
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex items-center gap-5 mb-4">
                <div className="text-4xl text-gray-800 dark:text-gray-100">
                  {categories.find((cat) => cat.name === active)?.icon}
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100 tracking-tight">
                  {active} <span className="font-bold">Solutions</span>
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 max-w-4xl font-normal mb-6 leading-relaxed">{desc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {features.map((feature, index) => (
                <motion.span
                  key={feature}
                  className="px-5 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-pointer shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ scale: 1.04 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {modalOpen && !isLargeDevice && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-40 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{categories.find((cat) => cat.name === active)?.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {active} <span className="font-bold">Solutions</span>
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {desc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    className="px-3 sm:px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.15 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
