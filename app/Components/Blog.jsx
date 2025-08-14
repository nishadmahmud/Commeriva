import Image from "next/image";
import React from "react";

const blogs = [
  {
    title: "Fan Engagement",
    description:
      "Support high-traffic, high-excitement moments with realtime fan experiences. Boost engagement and ROI with interactive, always-on applications.",
    img: '/blog01.jpg', // ✅ just use root path
  },
  {
    title: "CXTech",
    description:
      "Deliver faster support, stronger relationships, and higher retention through realtime interactions. Power responsive CX platforms that meet user expectations instantly.",
    img: '/blog02.jpg',
  },
  {
    title: "HealthTech",
    description:
      "Build HIPAA-compliant, scalable health apps with reliable realtime functionality. Keep teams connected while ensuring strict data privacy and compliance.",
    img: '/blog03.jpg',
  },
  {
    title: "Crypto Trading",
    description:
      "Trade cryptocurrency securely and efficiently with real-time confirmations and smooth UI interactions.",
    img: '/blog04.jpg',
  },
  {
    title: "Collaboration Tools",
    description:
      "Enable smooth collaboration with shared boards, live editing, and instant updates for distributed teams.",
    img: '/blog03.jpg',
  },
  {
    title: "Sports & Gaming",
    description:
      "Deliver immersive sports and gaming experiences with low latency and interactive engagement tools.",
    img: '/blog05.jpg',
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-10 px-6">
       <div className="mx-auto max-w-4xl pb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Insights on Building Your Perfect Store
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover expert tips, success stories, and the latest trends in custom e-commerce solutions. Learn how to design, build, and scale an online store tailored to your unique brand and business goals.
          </p>
          
        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden transition-all duration-300"
          >
            <Image
            unoptimized
              width={500}
              height={500}
              src={blog.img} // ✅ no in path
              alt={blog.title}
              className="w-full h-52 border border-gray-400 rounded-md object-cover"
            />
            <div className="py-5">
              <h3 className="text-lg font-bold text-gray-900">{blog.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
