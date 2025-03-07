import type { NextConfig } from "next";

const env = process.env.NODE_ENV || "development";

const nextConfig: NextConfig = {
  output: "export",
  basePath: (env == "production") ? '/CS4227-Restaurant-Management-System' : ""
};

export default nextConfig;
