/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    typedRoutes: true,
    serverActions: {}, // ✅ debe ser un objeto, no un booleano
  },
  turbopack: {
    rules: {
      '*.ts': [],
      '*.tsx': [],
    },
  },
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
};

export default nextConfig;
