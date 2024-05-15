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
      <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 rounded-full bg-primary p-2 text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Logo</span>
      </a>
      {!session ? (
        <>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <a className="mr-5 hover:text-gray-900" href="#">
              First Link
            </a>
            <a className="mr-5 hover:text-gray-900" href="#">
              Second Link
            </a>
            <a className="mr-5 hover:text-gray-900" href="#">
              Third Link
            </a>
            <a className="mr-5 hover:text-gray-900" href="#">
              Fourth Link
            </a>
          </nav>
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
      ) : (
        <UserDropdown session={session} />
      )}
    </>
  );
}
