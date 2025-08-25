"use client"

import { useState } from "react"

const categories = [
  {
    name: "Clothing & Fashion",
    icon: "💼",
    description: "Clothing and fashion is consistently the largest and fastest-growing e-commerce category worldwide. It covers men’s wear, women’s wear, and children’s clothing, along with footwear and accessories. Customers in this segment often look for variety, seasonal collections, and affordable pricing. For men, shirts, t-shirts, jeans, and ethnic wear remain popular, while women’s categories include dresses, sarees, kurtis, abayas, hijabs, and western wear. Children’s fashion ranges from baby clothing to school uniforms and seasonal outfits. Footwear and fashion accessories such as watches, sunglasses, bags, and jewelry further complement this category. Successful e-commerce platforms in fashion focus heavily on high-quality product images, clear size charts, virtual try-on features, and style recommendations to drive higher conversions.",
    pattern: "dots",
  },
  {
    name: "Electronics & Gadgets",
    icon: "🛍️",
    description: "Electronics and gadgets represent a high-value category with strong demand across all age groups. This segment includes smartphones, tablets, laptops, desktops, and their accessories. Increasingly popular are wearables such as smartwatches and fitness trackers, along with portable audio devices like headphones, earbuds, and Bluetooth speakers. The gaming subcategory has also gained momentum, with consoles, VR devices, and gaming accessories seeing strong sales. Smart home technology, such as IoT devices, home security cameras, and smart lighting, adds to this category’s potential. Buyers expect detailed product specifications, side-by-side comparison tools, warranty information, and installment (EMI) options when shopping for electronics.",
    pattern: "lines",
  },
  {
    name: "Home & Living",
    icon: "🏦",
    description: "The home and living category is centered around lifestyle improvement and includes furniture, kitchen appliances, décor, and home essentials. Furniture ranges from beds, sofas, and dining tables to compact storage solutions designed for urban homes. Kitchen and dining products include cookware, appliances like blenders and microwaves, and small essentials such as storage jars and cutlery. Home décor has become a rising trend with customers seeking wall art, lamps, rugs, and lighting that can personalize their living spaces. Platforms offering this category often integrate “room-wise shopping” features and, in advanced cases, AR tools that allow buyers to visualize furniture placement in their homes.",
    pattern: "grid",
  },
  {
    name: "Health & Wellness",
    icon: "📚",
    description: "The health and wellness segment is a fast-expanding category driven by lifestyle changes and growing health awareness. It covers dietary supplements, vitamins, protein powders, and functional foods, alongside medical devices like digital thermometers, blood pressure monitors, and glucometers. Home fitness equipment, including treadmills, yoga mats, and dumbbells, is also in high demand. Buyers prioritize safety, authenticity, and expert endorsements in this category. Features such as subscription delivery for supplements, integration with fitness apps, and professional health advice help e-commerce platforms build trust and long-term customer loyalty.",
    pattern: "waves",
  },
  {
    name: "Baby & Kids",
    icon: "✈️",
    description: "The baby and kids category is a high-engagement area for parents and families. It spans clothing, baby care products, toys, games, strollers, car seats, and educational supplies. Safety and quality are critical purchase drivers here, with parents seeking certified, non-toxic, and durable products. Age-based product filtering, gift registry options, and curated collections for birthdays or baby showers are effective e-commerce features in this segment. Since these products are often replaced or upgraded quickly as children grow, repeat sales potential is very high.",
    pattern: "circles",
  },
  {
    name: "Groceries & Essentials",
    icon: "🏥",
    description: "Groceries and everyday essentials form the backbone of daily commerce, and their shift online has grown rapidly due to customer demand for convenience. This category includes fresh produce like fruits and vegetables, packaged goods such as snacks, rice, and cooking oil, beverages including tea, coffee, and juices, and household cleaning products. Customers expect speed, freshness, and reliability in delivery. Same-day or next-day delivery, quick reorder options, and subscription models for staple items are critical features. Loyalty programs and wallet systems further encourage repeat purchases in this category.",
    pattern: "triangles",
  },
  {
    name: "Sports & Outdoor",
    icon: "🏥",
    description: "The sports and outdoor category caters to athletes, fitness enthusiasts, and adventurers. It includes sportswear, athletic footwear, gym equipment such as treadmills and weights, and outdoor gear like tents, hiking kits, and camping accessories. Customers here often look for brand authenticity, performance specifications, and bundled starter kits. Platforms can boost engagement by offering guides (“what you need to start hiking”) and curated packages for specific sports. This category benefits from seasonal promotions and influencer tie-ups with fitness communities.",
    pattern: "dots",
  },
  {
    name: "Automotive & Accessories",
    icon: "🏥",
    description: "The automotive category focuses on products for car and motorcycle owners. It includes car accessories such as seat covers, floor mats, cameras, and GPS devices; motorcycle gear like helmets and riding jackets; and spare parts and repair tools. Vehicle-specific filtering is essential, allowing users to select their car or bike model and instantly see compatible products. Additional features like installation services, warranty tracking, and service center locators help create trust in this category.",
    pattern: "waves",
  },
  
]

export default function Category() {
  const [active, setActive] = useState("Clothing & Fashion")
  const [desc, setDesc] = useState("Clothing and fashion is consistently the largest and fastest-growing e-commerce category worldwide. It covers men’s wear, women’s wear, and children’s clothing, along with footwear and accessories. Customers in this segment often look for variety, seasonal collections, and affordable pricing. For men, shirts, t-shirts, jeans, and ethnic wear remain popular, while women’s categories include dresses, sarees, kurtis, abayas, hijabs, and western wear. Children’s fashion ranges from baby clothing to school uniforms and seasonal outfits. Footwear and fashion accessories such as watches, sunglasses, bags, and jewelry further complement this category. Successful e-commerce platforms in fashion focus heavily on high-quality product images, clear size charts, virtual try-on features, and style recommendations to drive higher conversions.")
console.log(desc);
  return (
   <div>
    <h2 className="text-2xl mb-10 mt-16 text-center font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
           E-Commerce Business Suite
          </h2>
     <div className="relative bg-white text-gray-900 flex gap-10 items-start justify-start mb-20 w-full max-w-11/12 mx-auto px-6 overflow-hidden pt-4">
      
      
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-900 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-900 rotate-45 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-gray-900 rounded-full animate-float-slow"></div>
      </div>

  

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full">
        {categories.map((cat, index) => (
          <div
            key={cat.name}
           onClick={() => {
  setActive(cat.name);
  setDesc(cat.description);
}}

            className={`group relative cursor-pointer border border-gray-300 rounded-2xl transition-all duration-500 animate-slide-up ${
              active === cat.name && cat.description ? "transform scale-105" : "hover:scale-102"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`relative overflow-hidden rounded-xl p-5 transition-all duration-500 ${
                active === cat.name && cat.description
                  ? "bg-[linear-gradient(302deg,rgba(165,202,217,1)_51%,rgba(230,236,240,0.71)_100%)] text-white border-gray-50 shadow-2xl"
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
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 filter grayscale">
                  {cat.icon}
                </div>

                <h3 className="font-semibold text-base mb-4 tracking-wide text-center">{cat.name}</h3>

                {/* <p
                  className={`text-sm leading-relaxed font-light ${
                    active === cat.name ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {cat.description}
                </p> */}

                {/* Active Indicator */}
                {active === cat.name && (
                  <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full animate-ping"></div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Category Details */}
      <div className="sticky top-0 z-10 w-full">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 animate-fade-in">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-4xl filter grayscale">{categories.find((cat) => cat.name === active)?.icon}</div>
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
              {active} <span className="font-bold">Solutions</span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl font-light mb-8">
           {desc}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-self-auto items-center gap-4">
            {["User & Authentication", "Product & Catalog", "AI", "Mechine Lerning", "Smart/Advanced Features",    "Notifications & Communication", "Order & Delivery",  "Customer Engagement", "Security",  "CMS"].map((feature, index) => (
              <span
                key={feature}
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium animate-fade-in hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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
