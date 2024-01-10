/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/infinite-clicks" : undefined,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/infinite-clicks/" : undefined,
};

module.exports = nextConfig;
