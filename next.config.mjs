/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/vanguardbyvelorian",
  assetPrefix: "/vanguardbyvelorian/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/vanguardbyvelorian",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
