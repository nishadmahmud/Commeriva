'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
      question: "What makes your custom e-commerce solution different from platforms like Shopify or WooCommerce?",
      answer: "Our custom e-commerce solution is built specifically for your business needs, offering unlimited customization, better performance, and complete control over your data. Unlike template-based platforms, we create a unique system that scales with your business and integrates seamlessly with your existing workflows and third-party tools."
    },
    {
      question: "How long does it take to develop a custom e-commerce website?",
      answer: "Development time varies based on complexity and features required. A basic custom e-commerce site typically takes 8-12 weeks, while more complex solutions with advanced features, integrations, and custom functionality can take 16-24 weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Can you integrate payment gateways and shipping providers?",
      answer: "Yes, we can integrate multiple payment gateways including Stripe, PayPal, Square, and regional providers. We also integrate with major shipping carriers like FedEx, UPS, DHL, and local delivery services. Our solutions support multiple currencies and international shipping calculations."
    },
    {
      question: "Do you provide inventory management and order tracking systems?",
      answer: "Absolutely. Our custom solutions include comprehensive inventory management with real-time stock tracking, low stock alerts, automated reordering, and multi-warehouse support. We also provide complete order management with tracking, automated notifications, and integration with fulfillment centers."
    },
    {
      question: "Can you migrate data from our existing e-commerce platform?",
      answer: "Yes, we handle complete data migration including products, customer information, order history, and reviews. We ensure zero data loss and minimal downtime during the migration process. We also provide data mapping and cleanup services to optimize your new system."
    },
    {
      question: "What ongoing support and maintenance do you provide?",
      answer: "We offer comprehensive support packages including regular security updates, performance optimization, bug fixes, and feature enhancements. Our team provides 24/7 monitoring, backup services, and technical support to ensure your e-commerce site runs smoothly at all times."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 font-semibold text-lg tracking-wider uppercase mb-4"
          >
            DISCOVER YOUR SOLUTIONS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl flex items-center gap-2 justify-center font-bold text-gray-900 mb-4"
          >
            Frequently asked
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" text-gray-400"
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
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
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