import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Sirab is a separate static site (D:/Projects/sirab-expeditions, `npm run build:portfolio`) served from public/sirab.
  async rewrites() {
    return [{ source: "/sirab", destination: "/sirab/index.html" }];
  },
  // Concept demos for prospects (public/demos) are unlisted: keep them out of search.
  async headers() {
    return [
      {
        source: "/demos/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
