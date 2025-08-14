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
    img: '/blog01.jpg',
  },
  {
    title: "HealthTech",
    description:
      "Build HIPAA-compliant, scalable health apps with reliable realtime functionality. Keep teams connected while ensuring strict data privacy and compliance.",
    img: '/blog01.jpg',
  },
  {
    title: "Crypto Trading",
    description:
      "Trade cryptocurrency securely and efficiently with real-time confirmations and smooth UI interactions.",
    img: '/blog01.jpg',
  },
  {
    title: "Collaboration Tools",
    description:
      "Enable smooth collaboration with shared boards, live editing, and instant updates for distributed teams.",
    img: '/blog01.jpg',
  },
  {
    title: "Sports & Gaming",
    description:
      "Deliver immersive sports and gaming experiences with low latency and interactive engagement tools.",
    img: '/blog01.jpg',
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <Image
              width={500}
              height={500}
              src={blog.img} // ✅ no public in path
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
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
