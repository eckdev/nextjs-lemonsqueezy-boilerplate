import * as React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps): JSX.Element {
  return (
    <>
    <div className="w-full dark:bg-primary bg-background  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primary bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex h-auto min-h-screen w-full items-center justify-center">
        {children}
      </div>
      </div>
    </>
  );
}
