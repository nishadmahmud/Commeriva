'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRocket, FaCode, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Timeline() {
  const events = [
    {
      title: "Project Started",
      subtitle: "January 2025",
      description: "We began the journey to build something amazing.",
      icon: <FaRocket />,
      image: "/ourP.png",
    },
    {
      title: "Development Phase",
      subtitle: "February 2025",
      description: "The core features were developed and tested.",
      icon: <FaCode />,
      image: "/cloud.png",
    },
    {
      title: "Launch Day",
      subtitle: "March 2025",
      description: "We officially launched our product to the public!",
      icon: <FaCheckCircle />,
      image: "/cloud-supply.png",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-tight">
        Project Timeline
      </h1>

      <VerticalTimeline lineColor="#e5e7eb" animate={false}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            position={index % 2 === 0 ? "left" : "right"}
            contentStyle={{
             
              color: "#000",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            date={
              <div className="relative w-52 h-40 rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            }
            iconStyle={{
              background: "#f9fafb",
              color: "#000",
              boxShadow: "0 0 0 4px #fff, 0 4px 8px rgba(0,0,0,0.08)",
            }}
            icon={event.icon}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2">{event.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
