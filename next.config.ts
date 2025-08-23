import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "metal-alloys.technocast.dz",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
