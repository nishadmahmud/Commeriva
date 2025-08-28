'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is Commeriva?",
      answer: "Commeriva is a smart digital platform that helps businesses build a strong online presence with company websites, e-commerce stores, landing pages, and funnel websites – all in one place."
    },
    {
      question: "Who can use Commeriva?",
      answer: "Our solutions are designed for startups, small businesses, and enterprises across industries like retail, fashion, electronics, corporate services, and personal branding."
    },
    {
      question: "What type of websites does Commeriva build?",
      answer: "We specialize in Corporate & Company Websites, scalable Next.js powered e-commerce stores, landing pages for campaigns, funnel websites for sales & lead generation, and portfolio & personal branding websites."
    },
    {
      question: "Is Commeriva suitable for e-commerce businesses?",
      answer: "Yes ✅. Commeriva provides scalable e-commerce solutions with product management, payment gateways, inventory control, order tracking, and SEO-friendly design."
    },
    {
      question: "Can I accept online payments through Commeriva websites?",
      answer: "Yes. We integrate secure payment gateways like Stripe, PayPal, SSLCOMMERZ, bKash, Nagad, and more depending on your location."
    },
    {
      question: "Do I need technical skills to manage my website?",
      answer: "No. Commeriva websites come with an easy-to-use content management system (CMS) so you can update content, products, and images without coding knowledge."
    },
    {
      question: "Can Commeriva integrate with third-party tools?",
      answer: "Yes. We support integrations with Google Analytics, Meta Pixel, CRMs, live chat, email marketing tools, and more to grow your business."
    },
    {
      question: "Are Commeriva websites mobile-friendly?",
      answer: "Absolutely ✅. All websites are fully responsive, ensuring a smooth user experience on mobile, tablet, and desktop."
    },
    {
      question: "How long does it take to build a website with Commeriva?",
      answer: "Project timelines vary depending on complexity. A basic website can be ready in 1–2 weeks, while a custom e-commerce solution may take longer."
    },
    {
      question: "Does Commeriva provide ongoing support?",
      answer: "Yes. We provide technical support, maintenance, and scaling services to keep your website secure, updated, and ready for growth."
    }
  ];

  return (
    <div className="min-h-screen md:py-16 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 title">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl md:flex items-center gap-2 justify-center font-semibold text-gray-900"
          >
            Frequently asked
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" text-gray-500"
            >
              questions
            </motion.h1>
          </motion.h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-b border-gray-200 overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 cursor-pointer py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 poppins"
              >
                <h3 className="md:text-lg font-semibold text-gray-900 pr-8">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems[index] ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 text-white" />
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openItems[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeInOut",
                      opacity: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
