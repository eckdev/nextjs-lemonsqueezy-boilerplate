"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);

  return (
    <>
      <Link href="/" className="flex items-center font-display text-2xl">
        <Image
          src="/logo.png"
          alt="Precedent logo"
          width="30"
          height="30"
          className="mr-2 rounded-sm"
        ></Image>
        <p>Logo</p>
      </Link>
      <div>
        {session ? (
          <UserDropdown session={session} />
        ) : (
          <>
            <Link href={"/login"}>
              <button className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
