import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // cho phép Next.js load ảnh từ cloudinary
  },
};

export default nextConfig;
