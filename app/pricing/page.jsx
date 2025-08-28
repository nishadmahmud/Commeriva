"use client";
import React from "react";

export default function PrismaPricing() {
  const pricingPlans = [
    {
      name: "Free",
      description: "For hobby and side projects",
      price: "$0",
      period: "/month",
      features: [
        "500 MB storage included",
        "10 connections",
        "5 branches",
        "Community support",
        "No credit card required",
      ],
      buttonText: "Start Building",
      buttonStyle:
        "border border-gray-300 text-gray-700 hover:border-gray-600 hover:text-gray-600",
    },
    {
      name: "Starter",
      description: "Perfect for small applications",
      price: "$10",
      period: "/month",
      features: [
        "Unlimited storage included",
        "100 connections up to 5 GB",
        "Up to 10 branches",
        "5 GB",
        "Community support",
        "Unlimited branches",
      ],
      buttonText: "Start Building",
      buttonStyle:
        "border border-gray-300 text-gray-700 hover:border-gray-600 hover:text-gray-600",
    },
    {
      name: "Pro",
      description: "For production workloads",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        "25 GB storage included",
        "500 connections up to 25 GB",
        "Branches included",
        "25 GB",
        "Support via Slack",
        "Daily backups stored for 7 days",
      ],
      buttonText: "Start Building",
      buttonStyle: "bg-gray-600 text-white hover:bg-gray-700",
    },
    {
      name: "Business",
      description: "Enterprise",
      price: "$129",
      period: "/month",
      features: [
        "50 GB storage included",
        "2000 connections up to 50 GB",
        "Branches included",
        "50 GB",
        "Priority support via email",
        "Daily backups stored for 30 days",
      ],
      buttonText: "Start Building",
      buttonStyle:
        "border border-gray-300 text-gray-700 hover:border-gray-600 hover:text-gray-600",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Managed Connection Pooler",
      features: [
        {
          name: "Connection limit (pooled)",
          free: "10",
          starter: "100",
          pro: "500",
          business: "2000",
        },
        {
          name: "Connection limit (direct)",
          free: "10",
          starter: "10",
          pro: "50",
          business: "100",
        },
        {
          name: "Auto-scaling",
          free: "-",
          starter: "-",
          pro: "✓",
          business: "✓",
        },
        {
          name: "Auto-suspend",
          free: "✓",
          starter: "✓",
          pro: "-",
          business: "-",
        },
      ],
    },
    {
      category: "Operation response time guarantee",
      features: [
        {
          name: "",
          free: "24Hrs",
          starter: "24Hrs",
          pro: "10/48s",
          business: "1/8Ms",
        },
      ],
    },
    {
      category: "Operation duration for hot queries",
      features: [
        {
          name: "",
          free: "30s",
          starter: "10s",
          pro: "20s",
          business: "60s",
        },
      ],
    },
    {
      category: "Operation duration for interactive queries",
      features: [
        {
          name: "",
          free: "30s",
          starter: "10s",
          pro: "30s",
          business: "60s",
        },
      ],
    },
    {
      category: "Global Cache",
      features: [
        {
          name: "Cache log memcached",
          free: "-",
          starter: "-",
          pro: "512 per endpoint, max 50 GiB total",
          business: "max 500 GiB per day",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm mb-6">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
            Scaling APIs and phoenix in 2024
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-snug">
            Start for Free, Scale as You <br className="hidden sm:block" />
            Grow with Commeriva Postgres
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We only charge for what you use. If you have a quiet month, pay
            less. If your workload spikes, we can handle it. And no matter how
            simple or complex an operation is, it counts as one and costs the
            same.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors w-full sm:w-auto">
              Start Building
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-600 hover:text-gray-600 transition-colors w-full sm:w-auto">
              Book your free database
            </button>
            <span className="text-gray-500 text-sm sm:text-base">free</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-2xl p-6 sm:p-8 ${
                plan.popular
                  ? "border-gray-500 border-2 shadow-lg transform scale-105"
                  : "border-gray-200 hover:shadow-lg hover:-translate-y-1"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-sm sm:text-base"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                        01-1.414 0l-4-4a1 1 0 
                        011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                        011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Compare Plans */}
        <div className="mb-16 overflow-x-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare plans
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8">
              All of the features below are included with Prisma Postgres
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 min-w-[600px] bg-gray-50 p-4 sm:p-6 border-b border-gray-200 text-xs sm:text-sm">
              <div></div>
              <div className="text-center font-semibold text-gray-900">Free</div>
              <div className="text-center font-semibold text-gray-900">
                Starter
              </div>
              <div className="text-center font-semibold text-gray-900">Pro</div>
              <div className="text-center font-semibold text-gray-900">
                Business
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonFeatures.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 text-sm sm:text-base">
                  <h4 className="font-semibold text-gray-900">
                    {section.category}
                  </h4>
                </div>
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="grid grid-cols-5 min-w-[600px] p-4 sm:p-6 border-b border-gray-100 hover:bg-gray-50 text-xs sm:text-sm"
                  >
                    <div className="font-medium text-gray-900">
                      {feature.name}
                    </div>
                    <div className="text-center text-gray-600">
                      {feature.free}
                    </div>
                    <div className="text-center text-gray-600">
                      {feature.starter}
                    </div>
                    <div className="text-center text-gray-600">
                      {feature.pro}
                    </div>
                    <div className="text-center text-gray-600">
                      {feature.business}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
