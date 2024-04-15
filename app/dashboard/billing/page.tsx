import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import SubscriptionForm from "./subscription-form";
import { DashboardShell } from "@/components/ui/shell";
import { DashboardHeader } from "@/components/ui/header";

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
      <DashboardShell>
        <DashboardHeader
          heading="Billing"
          text="Manage billing and your subscription plan."
        />
        <div className="grid gap-8">
          <SubscriptionForm
            email={session.user?.email as string}
            subscriptionPlan={subscription}
          />
        </div>
      </DashboardShell>
    </>
  );
};

export default Billing;
