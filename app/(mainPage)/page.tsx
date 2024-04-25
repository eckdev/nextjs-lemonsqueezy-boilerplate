import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full dark:bg-primary bg-background  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primary bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={"https://twitter.com/ecankayadarcin"}
            className="flex bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on  <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799" className="w-4 ml-2"><path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"></path></svg>
          </Link>
          <h1 className="animate-fade-up font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">Next.JS SaaS Boilerplate</span> for building awesome applications 🚀
          </h1>
          <p className="animate-fade-up text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
            Speed up your saas development and save months of work.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get started
            </Link>
          </div>
        </div>
        <div className="container relative mt-12 rounded-2xl p-0">
          <Image src={'/mockup.png'} alt="site mockup" width={1900} height={1000}/>
        </div>
      </section>
    </div>
  );
}
