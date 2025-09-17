import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"], // cho phép Next.js load ảnh từ domain này
  },
};

export default nextConfig;
