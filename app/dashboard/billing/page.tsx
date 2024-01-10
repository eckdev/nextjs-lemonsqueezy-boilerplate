import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { formatDate } from "@/lib/utils";
import SubscriptionForm from "./subscription-form";

const Billing = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session) {
    redirect("/login");
  }

  const subscription = await getUserSubscriptionPlan(
    session.user?.email as string,
  );

  return (
    <>
      <div className="grid items-start gap-8">
        <div className="flex items-center justify-between px-2">
          <div className="grid gap-1">
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold">Billing</h1>
            <p className="text-muted-foreground text-lg">
              Manage billing and your subscription plan.
            </p>
          </div>
        </div>
        <SubscriptionForm email={session.user?.email as string} subscriptionPlan={subscription} />
      </div>
    </>
  );
};

export default Billing;
