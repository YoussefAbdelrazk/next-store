/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "pldbjxhkrlailuixuvhz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "imjjljbyczcwxpgscnnj.supabase.co", // Added the correct hostname
      },
    ],
  },
};

export default nextConfig;
