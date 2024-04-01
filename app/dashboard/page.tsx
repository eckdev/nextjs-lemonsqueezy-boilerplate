
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/ui/shell";
import { DashboardHeader } from "@/components/ui/header";
import { Chart } from "@/components/chart";

const Dashboard = async () => {
  const session = await getServerSession(authOptions) as Session;
  if (!session) { redirect("/login"); }
  // #DEMO MODE if (!session.user.subscriptionId) { redirect("/subscription"); }
  
  return (
    <>
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Your main content are in here"
      />
      <div className="grid gap-10">
        <span>Dashboard.</span>
        {/* <Chart /> */}
      </div>
    </DashboardShell>
    </>
  );
};

export default Dashboard;
