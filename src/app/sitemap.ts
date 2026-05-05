import { MetadataRoute } from "next";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  publishedAt
}`;

type Post = {
  slug: string;
  publishedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  const blogUrls = posts.map((post) => ({
    url: `https://www.venterprises.in/blog/${post.slug}`,
    lastModified: post.publishedAt
      ? new Date(post.publishedAt)
      : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.venterprises.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.venterprises.in/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.venterprises.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.venterprises.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...blogUrls,
  ];
}
