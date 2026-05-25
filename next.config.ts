import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/flora",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
