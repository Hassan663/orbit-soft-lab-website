/** @type {import('next').NextConfig} */
const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // photos are self-hosted in public/images; this allows direct Unsplash URLs if they are ever used in data/site.ts
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      { source: "/_next/static/:path*", headers: immutable },
      // files in /images are cached for a year: give a replaced image a new file name
      { source: "/images/:path*", headers: immutable },
      { source: "/icons.svg", headers: [{ key: "Cache-Control", value: "public, max-age=86400" }] },
    ];
  },
};
export default nextConfig;
