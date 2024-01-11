"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SubscriptionNavBar() {


  return (
    <>
      <Link href="/" className="font-display flex items-center text-2xl">
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
        <button
          className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}
