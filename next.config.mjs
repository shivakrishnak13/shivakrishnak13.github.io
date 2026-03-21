/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/shivakrishnak13.github.io",
  trailingSlash: true,
  images: {
    unoptimized: true, // ← required for static export, Next Image won't work otherwise
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
