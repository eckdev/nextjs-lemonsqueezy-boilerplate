
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions) as Session;
  if (!session) {
    redirect("/login");
  }
  
  return (
    <>
      <span>dashboard</span>
    </>
  );
};

export default Dashboard;
