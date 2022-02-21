/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_RAPIDAPI_KEY: process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    NEXT_PUBLIC_RAPIDAPI_HOST: process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
};

module.exports = nextConfig;
