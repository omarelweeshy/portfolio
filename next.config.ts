import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Sirab, SYNC and BOUNTY are separate static sites (D:/Projects/sirab-expeditions, sync-escape and
  // bounty-garage, `npm run build:portfolio` in each) served from public/sirab, public/sync and public/bounty.
  // /sirab/<name> and /sync/<name> are per-prospect links to the same page, so Web Analytics shows which
  // prospect's link was opened. Real files under public/ are served first, so these never shadow assets.
  async rewrites() {
    return [
      { source: "/sirab", destination: "/sirab/index.html" },
      { source: "/sirab/:ref", destination: "/sirab/index.html" },
      { source: "/sync", destination: "/sync/index.html" },
      { source: "/sync/:ref", destination: "/sync/index.html" },
      { source: "/bounty", destination: "/bounty/index.html" },
    ];
  },
  // Concept demos for prospects (public/demos) are unlisted: keep them out of search.
  // Sirab is sent to prospects, so no other site may embed it in a frame and pass it off as its own
  // (`:path*` also matches /sirab itself).
  async headers() {
    return [
      {
        source: "/demos/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/sirab/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
