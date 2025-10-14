/** @type {import('next').NextConfig} */
const nextConfig = {
  // output 'standalone' ayuda a que Next.js funcione correctamente en Render/servidores Node
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {},
    },
  },
};

export default nextConfig;
