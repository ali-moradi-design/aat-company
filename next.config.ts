import type { NextConfig } from "next";

// The site runs as a Next.js server in a container (output: "standalone"),
// behind Nginx on the VPS. Only the build output goes into the image.
const headers = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  // A recreation of a real studio's site: keep it out of search results.
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  // Nginx on the server gzips responses: no second compression in Node.
  compress: false,
  async headers() {
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
