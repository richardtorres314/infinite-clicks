/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/richardtorres314.github.io/infinite-clicks"
      : undefined,
};

module.exports = nextConfig;
