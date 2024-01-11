"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { CreditCard, LayoutDashboard, LogOut } from "lucide-react";
import Popover from "@/components/shared/popover";
import { Session } from "next-auth";
import Link from "next/link";
import { UserAvatar } from "../shared/user-avatar";

export default function UserDropdown({ session }: { session: Session }) {
  const { email, subscriptionId } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            <div className="p-2">
              {session?.user?.name && (
                <p className="truncate text-sm font-medium text-gray-900">
                  {session?.user?.name}
                </p>
              )}
              <p className="truncate text-sm text-gray-500">
                {session?.user?.email}
              </p>
            </div>
            {
              !subscriptionId && (
                <button
                className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
                disabled
              >
                <CreditCard className="h-4 w-4" />
                <Link href="/subscription" className="text-sm">
                  Subscription
                </Link>
              </button>
              )
            }
            {subscriptionId && (
              <>
                <button
                  className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
                  disabled
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <Link href="/dashboard" className="text-sm">
                    Dashboard
                  </Link>
                </button>
                <button
                  className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
                  disabled
                >
                  <CreditCard className="h-4 w-4" />
                  <Link href="/dashboard/billing" className="text-sm">
                    Billing
                  </Link>
                </button>
              </>
            )}

            <button
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="h-4 w-4" />
              <p className="text-sm">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <UserAvatar className="h-8 w-8" />
        </button>
      </Popover>
    </div>
  );
}
