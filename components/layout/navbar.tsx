"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Logo } from "../logo";

export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);

  return (
    <>
      <Link href="/" className="flex items-center font-display text-2xl">
       <Logo />
        <p>Logo</p>
      </Link>
      <div>
        {session ? (
          <UserDropdown session={session} />
        ) : (
          <>
            <Link href={"/login"}>
              <button className="rounded-full border border-border bg-primary text-primary-foreground p-1.5 px-4 text-sm transition-all hover:bg-background hover:text-black">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
