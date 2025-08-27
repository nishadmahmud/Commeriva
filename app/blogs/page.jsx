'use client'

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, userId } from "../page";

export default function BlogsPage() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return <p className="text-center py-10">Loading blogs...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load blogs.</p>;

  const blogs = data?.data || [];

  return (
    <section className="bg-white pb-20 pt-8 px-6">
      <div className="mx-auto max-w-4xl pb-10 text-center">
        <h1 className="md:text-5xl text-3xl font-semibold tracking-tight text-gray-900">Commeriva Blogs</h1>
        <p className="text-gray-600 text-lg mt-2 w-lg mx-auto text-center">Guides, announcements and articles about Prisma, databases and the data access layer.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white overflow-hidden transition-all duration-300">
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
                <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition">
                  {blog.title}
                </h3>
              </Link>
              <div
                className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
