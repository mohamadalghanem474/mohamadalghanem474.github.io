/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/mohamadalghanem474.github.io', // ✅ هذا يقبل وضروري للGitHub Pages
}

module.exports = nextConfig
