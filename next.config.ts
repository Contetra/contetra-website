import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
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
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
        destination: '/blog/:slug',
        permanent: true, // 301 redirect — good for SEO
      },
      {
        source: "/disclaimer",
        destination: "/terms-and-conditions",
        permanent: true,
      },
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
      {
        source: "/revamping-revenue-unveiling-asc-606-implications-on-acquisition-memo-2",
        destination: "/revamping-revenue-unveiling-asc-606-implications-on-acquisition-memo",
        permanent: true,
      },
      {
        source: "/your-financial-playbook-fy-2025-26-edition-2",
        destination: "/your-financial-playbook-fy-2025-26-edition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
