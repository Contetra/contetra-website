import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { MouseFollowerProvider } from "@/components/mouse-follower/mouse-follower-provider";
import { PageTransition } from "./components/page-transition";
import StoreProvider from "@/provider/StoreProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  verification: {
    google: "HhhSdEVpF44KYtPqJX4K8D_ZcU4_Es45Rw9wrkIMmzo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt"></link>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-5B5L9PB';f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5B5L9PB');
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased`}
      >
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B5L9PB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ReactLenis root>
          <MouseFollowerProvider>
            <PageTransition />
            <StoreProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                disableTransitionOnChange
              >
                <main className="min-h-screen">
                  <TooltipProvider>{children}</TooltipProvider>
                </main>
              </ThemeProvider>
            </StoreProvider>
          </MouseFollowerProvider>
        </ReactLenis>
        <Toaster expand position="top-right" richColors visibleToasts={9} />
      </body>
    </html>
  );
}
