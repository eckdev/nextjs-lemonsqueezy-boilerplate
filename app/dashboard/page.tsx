import React, { useLayoutEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div
      className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
      style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
    >
      Dashboard
    </div>
  );
};

export default Dashboard;
