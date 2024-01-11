import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Toaster } from "@/components/ui/toast/toaster";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
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
      <body className={cx(sfPro.variable, inter.variable)}>
        {children}
        <Toaster />
        <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
      </body>
    </html>
  );
}
