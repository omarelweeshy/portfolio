import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Sirab, SYNC and BOUNTY are separate static sites (D:/Projects/sirab-expeditions, sync-escape and
  // bounty-garage, `npm run build:portfolio` in each) served from public/sirab, public/sync and public/bounty.
  async rewrites() {
    return [
      { source: "/sirab", destination: "/sirab/index.html" },
      { source: "/sync", destination: "/sync/index.html" },
      { source: "/bounty", destination: "/bounty/index.html" },
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
