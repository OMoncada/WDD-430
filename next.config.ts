const nextConfig = {
  experimental: {
    ppr: true,
    serverActions: true,
    typedRoutes: true,
    enableUndici: true,
    turbo: {
      loaders: {
        '.ts': 'ts',
        '.tsx': 'tsx',
      },
    },
  },
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined, // ⬅️ Esta línea es CLAVE para Vercel
};

export default nextConfig;
