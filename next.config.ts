import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/comp-service-website",
  assetPrefix: "/comp-service-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;