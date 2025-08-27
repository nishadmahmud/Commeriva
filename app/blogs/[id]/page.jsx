'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher, userId } from "../../page";

export default function BlogDetails() {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return <p className="text-center py-10">Loading blog...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load blog.</p>;

  const blog = data?.data?.find((b) => String(b.id) === id);

  if (!blog) return <p className="text-center py-10">Blog not found.</p>;

  return (
    <section className="bg-white pb-20">
        <Image
          unoptimized
          width={1000}
          height={1000}
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover mb-6"
        />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 my-8">{blog.title}</h1>
        <div
          className="text-gray-700 leading-relaxed prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </section>
  );
}
