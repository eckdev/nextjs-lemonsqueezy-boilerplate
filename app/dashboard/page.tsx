import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/ui/shell";
import { DashboardHeader } from "@/components/ui/header";
import InfoCards from "@/components/pages/dashboard/infoCards";
import Main from "@/components/pages/dashboard/main";


const Dashboard = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          text="Your main content are in here"
        />
          <div>
            <InfoCards />
            <Main />
        </div>
      </DashboardShell>
    </>
  );
};

export default Dashboard;
