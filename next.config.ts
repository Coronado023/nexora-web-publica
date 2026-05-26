import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oculta el header X-Powered-By para una salida mas limpia en produccion.
  poweredByHeader: false,
};

export default nextConfig;
