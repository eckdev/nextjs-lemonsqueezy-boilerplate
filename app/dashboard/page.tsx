
import React, { useLayoutEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Script from "next/script";
import Button from "./button";
import { LemonsqueezyClient } from "lemonsqueezy.ts";
import { retrieveOrder, listAllOrders } from "lemonsqueezy.ts/order";

const Dashboard = async () => {
  const session = await getServerSession(authOptions) as Session;
  if (!session) {
    redirect("/");
  }
  
  const key = process.env.LEMONSQUEEZY_API_KEY as string
  const orders = await listAllOrders({
    apiKey: key
  });
  const isSubscribed = orders.data.find(x => x.attributes.user_email === session.user?.email && x.attributes.status === 'paid')
  return (
    <>
      <div
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
          <Button subscribed={isSubscribed} />
      </div>
    </>
  );
};

export default Dashboard;
