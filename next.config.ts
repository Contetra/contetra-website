import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contetra.b-cdn.net',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      }
    ];
  },

  async redirects() {
    return [
      {
        source: "/business-insights-into-ifrs-16-3",
        destination: "/business-insights-into-ifrs-16",
        permanent: true,
      },
      {
        source: "/interview-prep-guide-for-careers-in-financial-reporting-2",
        destination: "/interview-prep-guide-for-careers-in-financial-reporting",
        permanent: true,
      },
      {
        source: "/top-20-questions-your-fy-22-23-business-plan-must-answer-3",
        destination: "/top-20-questions-your-fy-22-23-business-plan-must-answer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
