"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Logo } from "../logo";
import { Button } from "../ui/button";

export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);

  return (
    <>
      <Link href="/" className="font-display flex items-center text-2xl">
        <Logo />
        <p>Logo</p>
      </Link>
      <div>
        {session ? (
          <UserDropdown session={session} />
        ) : (
          <>
            <Link href={"/login"}>
              <Button
                variant={"default"}
                size={"default"}
                type="submit"
                className={"w-full"}
              >
                {"Sign In"}
              </Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
