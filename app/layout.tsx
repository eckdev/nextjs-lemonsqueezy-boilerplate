/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import { sfPro, inter } from "./fonts";
import { Toaster } from "@/components/ui/toast/toaster";
import { cn } from "@/lib/utils";
import { siteConfig } from "config/site";

export const metadata = {
  title: siteConfig.name,
  description:siteConfig.description,
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sfPro.variable,
          inter.variable,
        )}
      >
        {children}
        <Toaster />
        <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="eckdev" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </body>
    </html>
  );
}
