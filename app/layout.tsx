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
      </body>
    </html>
  );
}
