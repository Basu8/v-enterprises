import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

export const metadata = {
  title: "Blog | V Enterprises",
  description:
    "Latest hardware insights, industrial safety guides, and product updates from V Enterprises.",
};

const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current)
] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  category,
  mainImage
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-12 pt-24">
          <h1 className="text-3xl font-bold mb-3 text-white">
            Hardware Insights
          </h1>

          <p className="text-gray-300 mb-10">
            Latest updates, buying guides, security trends, and smart hardware
            solutions for modern businesses.
          </p>

          {posts.length === 0 ? (
            <p className="text-lg text-gray-300">No posts found yet.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const imageUrl = post.mainImage?.asset?.url || "/blog.jpg";

                return (
                  <div
                    key={post._id}
                    className="border border-gray-600 rounded-2xl overflow-hidden hover:shadow-lg transition bg-gray-700"
                  >
                    <Link href={`/blog/${post.slug.current}`}>
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/3">
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                            <span className="bg-red-900 text-red-200 px-3 py-1 rounded-full">
                              {post.category || "Hardware"}
                            </span>

                            <span>
                              {new Date(
                                post.publishedAt
                              ).toLocaleDateString()}
                            </span>
                          </div>

                          <h2 className="text-2xl font-bold mb-3 text-white hover:text-red-400 transition">
                            {post.title}
                          </h2>

                          <p className="text-gray-300 mb-5">
                            {post.excerpt ||
                              "Explore expert insights and practical solutions for your business hardware needs."}
                          </p>

                          <span className="text-red-400 font-medium hover:underline">
                            Read Article →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}