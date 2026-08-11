import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Default: URLs with a trailing slash redirect to the non-slash version.
  trailingSlash: false,
  experimental: {
    serverActions: {
      allowedOrigins: ["contetra.com", "www.contetra.com"],
    },
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

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
        source: "/your-business-at-a-glance",
        destination: "https://splendorous-truffle-7a75b1.netlify.app/",
        permanent: true,
      },
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
      {
        source: "/automation",
        destination: "/services/agentic-ai-and-process-automation/process-automation",
        permanent: true,
      },
      {
        source: "/services/digital-transformation/erp-diagnostic-review",
        destination: "/services/digital-transformation/erp-diagnostic-review-and-health-check",
        permanent: true,
      },
      {
        source: "/services/accounting-reporting/financial-statement-preparation",
        destination: "/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
        permanent: true,
      },
      {
        source: "/services/accounting-reporting/gaap-conversion",
        destination: "/services/accounting-reporting/ind-as-ifrs-and-us-gaap-conversion",
        permanent: true,
      },
      {
        source: "/services/accounting-reporting/financial-due-diligence",
        destination: "/services/accounting-reporting/financial-due-diligence-and-quality-of-earnings",
        permanent: true,
      },
      {
        source: "/services/agentic-ai-and-process-automation/ai-agent-development",
        destination: "/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
        permanent: true,
      },
      {
        source: "/services/agentic-ai-and-process-automation/finance-reporting-automation",
        destination: "/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
        permanent: true,
      },
      {
        source: "/services/agentic-ai-and-process-automation/sales-marketing-automation",
        destination: "/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
        permanent: true,
      },
      {
        source: "/services/agentic-ai-and-process-automation/operations-project-automation",
        destination: "/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
        permanent: true,
      },
      {
        source: "/services/agentic-ai-and-process-automation/automation-opportunity-assessment",
        destination: "/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
        permanent: true,
      },
      // 301: strip trailing slash (except homepage "/"). Query string is preserved.
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
