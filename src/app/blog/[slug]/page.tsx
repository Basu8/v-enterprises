import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/sanity/client";

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const POST_META_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  title,
  excerpt,
  category,
  image
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_META_QUERY, { slug }, options);

  if (!post) {
    return {
      title: "Post not found | V Enterprises",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).url()
    : "/blog.jpg";

  return {
    title: `${post.title} | V Enterprises`,
    description: post.excerpt || `Read ${post.title} on V Enterprises.`,
    openGraph: {
      title: `${post.title} | V Enterprises`,
      description: post.excerpt || `Read ${post.title} on V Enterprises.`,
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | V Enterprises`,
      description: post.excerpt || `Read ${post.title} on V Enterprises.`,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  if (!post) notFound();

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(630).url()
    : "/blog.jpg";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 pt-28 pb-16">
        <article className="w-full">

          {/* Back */}
          <Link
            href="/blog"
            className="mb-6 inline-block text-sm text-red-400 hover:text-red-300"
          >
            ← Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
            <span className="bg-red-900/60 text-red-300 px-3 py-1 rounded-full text-xs uppercase">
              {post.category || "Hardware"}
            </span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="border-l-4 border-red-600 pl-4 text-gray-300 mb-8 leading-7">
              {post.excerpt}
            </p>
          )}

          {/* Image */}
          <div className="mb-10 overflow-hidden rounded-xl">
            <Image
              src={postImageUrl ?? "/blog.jpg"}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          
          {Array.isArray(post.body) && (
            <div
              className="
                prose prose-invert max-w-none

                [&>*]:my-4

                [&>h1]:mt-8 [&>h1]:mb-4
                [&>h2]:mt-8 [&>h2]:mb-3
                [&>h3]:mt-6 [&>h3]:mb-2

                [&>h2+*]:mt-0
                [&>h3+*]:mt-0

                [&>p]:text-gray-300
                [&>p]:leading-8

                [&>ul]:pl-5 [&>ul]:space-y-1
                [&>ol]:pl-5 [&>ol]:space-y-1

                [&>blockquote]:border-l-4 [&>blockquote]:border-red-500
                [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-400

                [&>code]:bg-gray-700 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded
              "
            >
              <PortableText value={post.body} />
            </div>
          )}

          {/* Divider */}
          <hr className="border-gray-700 my-12" />

          {/* CTA */}
          <section className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-2">
              Need Reliable Hardware Solutions?
            </h2>
            <p className="text-gray-300 mb-5 leading-7">
              From CCTV systems to networking infrastructure and enterprise
              hardware, V Enterprises helps businesses choose the right
              solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium"
            >
              Contact V Enterprises →
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}

