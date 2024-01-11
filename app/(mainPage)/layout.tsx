import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default async function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <Nav />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
    </div>
    </>
  );
}
