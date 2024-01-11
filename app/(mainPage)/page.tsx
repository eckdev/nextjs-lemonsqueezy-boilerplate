import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={"#"}
            className="bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="animate-fade-up font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="animate-fade-up text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacus volutpat, consectetur mauris vitae, lobortis eros. Cras quam nulla, faucibus ut augue ut, tincidunt porta quam
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
