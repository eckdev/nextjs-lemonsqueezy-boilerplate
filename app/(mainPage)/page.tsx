import TechList from "@/components/shared/tech-list";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "config/site";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="relative w-full bg-background  bg-grid-black/[0.06] dark:bg-primary dark:bg-grid-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-primary"></div>
      <section className="relative z-20 space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={"https://twitter.com/ecankayadarcin"}
            className="flex rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 462.799"
              className="ml-2 w-4"
            >
              <path
                fillRule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              ></path>
            </svg>
          </Link>
          <h1
            className="animate-fade-up font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">
              Next.JS SaaS Boilerplate
            </span>{" "}
            for building awesome applications 🚀
          </h1>
          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Speed up your saas development and save months of work.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="container relative mt-12 rounded-2xl p-0">
          <Image
            src={"/mockup.png"}
            alt="site mockup"
            width={1900}
            height={1000}
          />
        </div>
      </section>
      <section className="mt-4">
        <div className="container mx-auto w-full max-w-[64rem]">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-4 text-dark text-3xl font-black tracking-[-.5px] sm:text-4xl md:text-[44px]/[50px] dark:text-white">
              Start a SaaS venture utilizing cutting-edge technology to conserve
              hundreds of hours.
            </h2>
            <p className="text-muted-foreground dark:text-gray-4 text-base ">
              SaaSBoilerplate offers distinctive features and benefits that
              distinguish it from the ordinary. With us, you can kickstart your
              SaaS venture or web application within a day, leveraging the most
              current technologies and tools.
            </p>
          </div>
          <TechList />
        </div>
      </section>
    </div>
  );
}
