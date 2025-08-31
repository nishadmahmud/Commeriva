"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Globe from "./Globe";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Code } from "lucide-react";
import { MdOutlineDocumentScanner, MdScanner } from "react-icons/md";
import { Truck } from "lucide-react";
import { TbTruckDelivery } from "react-icons/tb";

const features = [
  {
    icon: <Code size={60}></Code>,
    title: "Web Order Management",
    description:
      "Simplify order management with Web Order Monitoring. Track sales orders and KPIs effortlessly.",
  },
  {
    icon: <MdOutlineDocumentScanner size={60}></MdOutlineDocumentScanner>,
    title: "Scan & Trace Technology",
    description:
      "Elevate your warehouse experience with Scan & Trace Technology. Enjoy superior inventory control.",
  },
  {
    icon: <TbTruckDelivery size={60}></TbTruckDelivery>,
    title: "Delivery Management",
    description:
      "Elevate your delivery operations with Dispatch & Delivery Management and save your valuable time.",
  },
];

export default function SupplyChain() {
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  const feature1InView = useInView(feature1Ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });
  const feature2InView = useInView(feature2Ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });
  const feature3InView = useInView(feature3Ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const featureRefs = [feature1Ref, feature2Ref, feature3Ref];
  const featureInView = [feature1InView, feature2InView, feature3InView];

  return (
    <div className="md:w-10/12 w-11/12 mx-auto min-h-screen bg-white md:mt-24 mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl title font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Boost your supply chain efficiency
        </h2>
        <p className="mt-4 md:text-lg poppins text-gray-600">
          Comprehensive android app for distribution management: orders, SKU
          scanning, tracking, metrics, and vehicle monitoring in one solution
        </p>
      </div>
      <div className="flex mt-10 justify-between md:flex-row-reverse items-center flex-col-reverse">
        {/* Left Side - Scrollable Content */}
        <div className="overflow-y-auto">
          <div className="max-w-xl w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                ref={featureRefs[index]}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                animate={
                  featureInView[index]
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 0, x: -50, scale: 0.9 }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="group md:p-6 p-4 border-b last:border-b-0"
              >
                <div className="md:flex md:items-center justify-start space-x-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        featureInView[index]
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="rounded-full flex items-center md:justify-center transition-shadow duration-300 primary-text-color"
                    >
                      {feature.icon}
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        featureInView[index]
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.4,
                      }}
                      className="text-xl md:text-2xl font-semibold text-gray-900 my-2 text-start transition-colors duration-300 poppins"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        featureInView[index]
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.5,
                      }}
                      className="text-gray-600 leading-relaxed text-base mb-3 text-start max-w-lg"
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Sticky Image */}
        <div className="md:w-1/2 md:sticky top-0">
          <div className="md:flex items-center justify-center md:overflow-hidden">
            {/* Background Pattern */}
            <div>
              <Globe></Globe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
