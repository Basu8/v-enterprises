import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio"],
      },
    ],
    sitemap: "https://www.venterprises.in/sitemap.xml",
  };
}