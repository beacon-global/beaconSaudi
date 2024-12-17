/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, 
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    webpack(config) {
      // Optimize chunking
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 30000,  // Minimum chunk size in bytes
        maxSize: 200000, // Maximum chunk size in bytes
      };
      return config;
    },
    
  };
  
  module.exports = nextConfig;
  