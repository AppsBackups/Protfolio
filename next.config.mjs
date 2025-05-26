const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Prevents Next.js from breaking image paths
  },
  assetPrefix: '/', // Ensures assets are correctly referenced
};

export default nextConfig;
