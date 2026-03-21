/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://shivakrishnak13.github.io"
      : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
