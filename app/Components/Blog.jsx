"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, userId } from "../page";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return <p className="text-center py-10">Loading blogs...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-500">Failed to load blogs.</p>
    );

  const blogs = data?.data?.slice(0, 6) || [];

  return (
    <section id="blog" className="bg-white py-10 md:pt-28 pt-10 px-6">
      <div className="mx-auto max-w-4xl pb-10 text-center">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold title tracking-tight text-gray-900 sm:text-4xl">
          Insights on Building Your Perfect Store
        </h2>
        <p className="mt-4 text-lg text-gray-600 poppins">
          Discover expert tips, success stories, and the latest trends in custom
          e-commerce solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white overflow-hidden transition-all duration-300"
          >
            <Image
              unoptimized
              width={500}
              height={500}
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 border border-gray-400 rounded-md object-cover"
            />
            <div className="py-5">
              <Link href={`/blogs/${blog.id}`}>
                <h3 className="text-lg font-semibold poppins text-gray-900 hover:text-gray-600 transition">
                  {blog.title}
                </h3>
              </Link>
              {/* <div
                className="mt-2 text-gray-600 text-sm leading-relaxed text-ellipsis hidden line-clamp-3"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              /> */}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-2">
        <Link href="/blogs" className="flex justify-center flex-col">
          <button className="hover:text-blue-600 flex items-center gap-1 justify-center justify-items-center font-medium poppins cursor-pointer hover:underline text-sm text-gray-700 transition">
            View All
            <ArrowRight size={15}></ArrowRight>
          </button>
        </Link>
      </div>
    </section>
  );
}
