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

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  verification: {
    google: "HhhSdEVpF44KYtPqJX4K8D_ZcU4_Es45Rw9wrkIMmzo",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased`}
      >
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
