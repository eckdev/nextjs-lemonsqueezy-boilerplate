import "./globals.css";
import { sfPro, inter } from "./fonts";
import { Toaster } from "@/components/ui/toast/toaster";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Site Title",
  description:
    "Site Description",
  metadataBase: new URL("https://precedent.dev"),
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
