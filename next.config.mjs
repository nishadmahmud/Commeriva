/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.outletexpense.xyz",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
