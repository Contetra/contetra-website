import type React from "react";

type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<string, React.ReactNode> = {
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </>
    ),
    send: <path d="m3 11 18-8-8 18-2-8-8-2Z" />,
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4M7 11h8M11 7v8" />
      </>
    ),
    chart: <path d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4" />,
    sparkles: (
      <>
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" />
      </>
    ),
    radar: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12 19 8M12 3v3M12 18v3M3 12h3M18 12h3" />
      </>
    ),
    calendar: (
      <>
        <path d="M7 2v4M17 2v4M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
        <path d="m8 15 3 3 5-6" />
      </>
    ),
    presentation: <path d="M4 4h16v11H4ZM12 15v5M8 20h8M8 8h8M8 12h5" />,
    banknote: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M6 9v.01M18 15v.01" />
      </>
    ),
    shield: <path d="M12 2 20 5v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5Z" />,
    line: <path d="M4 19h16M5 15l4-4 4 3 6-8" />,
    inbox: <path d="M4 13 7 4h10l3 9v6H4Zm0 0h5l2 3h2l2-3h5" />,
    route: <path d="M5 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm8 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM8 9v3a3 3 0 0 0 3 3h4" />,
    headset: <path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v5H4Zm13 0h3v5h-3ZM15 21h-3a4 4 0 0 1-4-4" />,
    clipboard: <path d="M9 4h6l1 2h3v16H5V6h3Zm0 0h6M9 14l2 2 4-5" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    unlock: <path d="M7 11V8a5 5 0 0 1 9.6-2M6 11h12v10H6Zm6 4v2" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  };

  return <svg {...common}>{paths[name] ?? paths.sparkles}</svg>;
}
