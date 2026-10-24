import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Sirab and SYNC are separate static sites (D:/Projects/sirab-expeditions and D:/Projects/sync-escape,
  // `npm run build:portfolio` in each) served from public/sirab and public/sync.
  async rewrites() {
    return [
      { source: "/sirab", destination: "/sirab/index.html" },
      { source: "/sync", destination: "/sync/index.html" },
    ];
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
