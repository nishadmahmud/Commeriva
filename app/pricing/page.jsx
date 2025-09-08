"use client";
import { useState } from "react";
import { Check, X, Star, Zap, Crown } from "lucide-react";
import { CircleDot } from "lucide-react";

export default function PrismaPricing() {
  const categories = ["E-commerce", "Landing Page", "Portfolio"];
  const [selectedCategory, setSelectedCategory] = useState("E-commerce");

  // Pricing Data
  const pricingPlans = {
    "E-commerce": [
      {
        name: "Starter",
        description: "Perfect for small shops just starting their journey",
        price: "$19",
        period: "/month",
        features: [
          "Up to 500 products",
          "Best for new online shops",
          "Online store fronts",
          "1 Staff Account",
          "Mobile responsive",
        ],
        buttonText: "Start Basic",
        popular: false,
        icon: Star,
        color: "from-slate-50 to-slate-100",
        borderColor: "border-slate-200",
      },
      {
        name: "Growth",
        description: "Ideal for growing online stores with more needs",
        price: "$799",
        period: "/one time",
        features: [
          "Up to 1,000 products",
          "Permium Online Stores",
          "3 Staff Account",
          "Discount Coupon & Campaigns",
          "Advanced analytics",
          "Admin Dashboard (CMS Advanced)",
        ],
        buttonText: "Choose Standard",
        popular: true,
        icon: Zap,
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
      },
      {
        name: "Professional",
        description: "Everything you need for established businesses",
        price: "$99",
        period: "/month",
        features: [
          "Unlimited products",
          "Advance Custom theme (UI/UX)",
          "Advanced analytics dashboard",
          "10 Staff Account",
          "Marketing Tools (Email & SMS Marketing)",
          "Admin Dashboard (CMS Pro)",
        ],
        buttonText: "Go Premium",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
      {
        name: "Enterprise",
        description: "Everything you need for established businesses",
        price: "$99",
        period: "/month",
        features: [
          "Unlimited products",
          "Multi-store ",
          "AI Product recommendation & smart search",
          "CMS Enterprise",
          "Unlimited Staff Accounts",
          "Custom Integration & Feature Per Buisness",
        ],
        buttonText: "Go Premium",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
    ],
    "Landing Page": [
      {
        name: "Basic",
        description: "Simple landing pages for personal projects",
        price: "$9",
        period: "/month",
        features: [
          "1 custom domain",
          "5 basic templates",
          "Community support",
          "Basic analytics",
          "Contact forms",
        ],
        buttonText: "Start Basic",
        popular: false,
        icon: Star,
        color: "from-slate-50 to-slate-100",
        borderColor: "border-slate-200",
      },
      {
        name: "Standard",
        description: "Perfect for startups and marketing campaigns",
        price: "$29",
        period: "/month",
        features: [
          "5 custom domains",
          "20 premium templates",
          "SEO optimization tools",
          "A/B testing",
          "Email integration",
        ],
        buttonText: "Choose Standard",
        popular: true,
        icon: Zap,
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
      },
      {
        name: "Premium",
        description: "Advanced features for marketing teams",
        price: "$59",
        period: "/month",
        features: [
          "Unlimited domains",
          "Advanced A/B testing",
          "CRM integrations",
          "Priority support",
          "Custom analytics",
          "Team collaboration",
        ],
        buttonText: "Go Premium",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
    ],
    Portfolio: [
      {
        name: "Basic",
        description: "Essential tools for freelancers",
        price: "$5",
        period: "/month",
        features: [
          "5 portfolio projects",
          "3 basic templates",
          "Community support",
          "Basic gallery",
          "Contact page",
        ],
        buttonText: "Start Basic",
        popular: false,
        icon: Star,
        color: "from-slate-50 to-slate-100",
        borderColor: "border-slate-200",
      },
      {
        name: "Standard",
        description: "Professional features for creatives",
        price: "$15",
        period: "/month",
        features: [
          "20 portfolio projects",
          "Custom domain included",
          "10 premium templates",
          "Client proofing tools",
          "Email support",
          "Password protection",
        ],
        buttonText: "Choose Standard",
        popular: true,
        icon: Zap,
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
      },
      {
        name: "Premium",
        description: "Complete solution for agencies and studios",
        price: "$30",
        period: "/month",
        features: [
          "Unlimited projects",
          "Team collaboration tools",
          "Advanced analytics",
          "Priority support",
          "White-label options",
          "API access",
        ],
        buttonText: "Go Premium",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
    ],
  };

  // Comparison Table Features
  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { name: "Custom Domain", basic: true, standard: true, premium: true },
        { name: "SSL Certificate", basic: true, standard: true, premium: true },
        { name: "Payment Gateway", basic: true, standard: true, premium: true },
        { name: "Courier Integration", basic: false, standard: true, premium: true },
        { name: "Email & SMS Invoice", basic: false, standard: true, premium: true },
        { name: "Employee Management", basic: false, standard: true, premium: true },
        {
          name: "Mobile Responsive",
          basic: true,
          standard: true,
          premium: true,
        },
      ],
    },
    {
      category: "Analytics & Insights",
      items: [
        { name: "Basic Analytics", basic: true, standard: true, premium: true },
        {
          name: "Advanced Analytics",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "Inventory forecasting & Stock optimization",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "Custom Reports",
          basic: false,
          standard: false,
          premium: true,
        },
      ],
    },
    {
      category: "Admin Dashboad & CMS",
      items: [
        { name: "Landing Page", basic: false, standard: false, premium: true },
        {
          name: "Blogs",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "Advance POS",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "Multi language",
          basic: false,
          standard: false,
          premium: true,
        },
        {
          name: "CMS Premium",
          basic: false,
          standard: false,
          premium: true,
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Community Support",
          basic: true,
          standard: false,
          premium: false,
        },
        { name: "Email Support", basic: false, standard: true, premium: true },
        {
          name: "24/7 Phone Support",
          basic: false,
          standard: false,
          premium: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm mb-6">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Scaling APIs and phoenix in 2024
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-snug heroTitle">
              Start for Free, Scale as You <br className="hidden sm:block" />
              Grow with{" "}
              <span className="bg-yellow-300 px-2 text-gray-700">
                Commeriva
              </span>{" "}
              Postgres
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We only charge for what you use. If you have a quiet month, pay
              less. If your workload spikes, we can handle it. And no matter how
              simple or complex an operation is, it counts as one and costs the
              same.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="inline-flex bg-gray-100 rounded-3xl p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-3xl font-medium transition-all cursor-pointer duration-300 ${
                  selectedCategory === cat
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans[selectedCategory].map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br poppins ${
                    plan.color
                  } border-2 ${plan.borderColor} ${
                    plan.popular
                      ? "ring-2 ring-teal-100 shadow-md"
                      : "shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary-color text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-2xl ${
                        plan.popular ? "bg-blue-100" : "bg-white"
                      } shadow-sm`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          plan.popular ? "text-teal-500" : "text-gray-700"
                        }`}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="md:text-4xl text-2xl font-semibold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <CircleDot className="w-4 h-4 text-gray-800" />
                        </div>
                        <span className="ml-3 text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-200 mt-auto ${
                      plan.popular
                        ? "bg-primary-color text-white shadow-lg hover:shadow-xl"
                        : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 title">
              Compare All Features
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-4  p-6 border-b border-gray-200">
              <div className="font-semibold text-gray-900 text-lg">
                Features
              </div>
              <div className="text-center font-semibold text-gray-900">
                Basic
              </div>
              <div className="text-center font-semibold text-gray-900">
                Standard
              </div>
              <div className="text-center font-semibold text-gray-900">
                Premium
              </div>
            </div>

            {comparisonFeatures.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="bg-slate-50 px-6 py-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {section.category}
                  </h4>
                </div>
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="grid grid-cols-4 p-6 border-b border-gray-100 hover:bg-slate-50 transition-colors duration-150"
                  >
                    <div className="text-gray-700 font-medium">{item.name}</div>
                    <div className="flex justify-center">
                      {item.basic ? (
                        <Check className="w-6 h-6 text-green-500" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.standard ? (
                        <Check className="w-6 h-6 text-green-500" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.premium ? (
                        <Check className="w-6 h-6 text-green-500" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-900 heroTitle mb-1">
            Ready to get started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 poppins">
            Join thousands of satisfied customers who trust our platform
          </p>
          <button className="bg-primary-color text-white px-10 py-3 rounded-md font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
