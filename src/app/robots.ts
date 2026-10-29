import type { MetadataRoute } from "next";

/** A recreation of a real studio's site: no search engine should index it. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
