
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
    redirect("/login");
  }
  
  const key = process.env.LEMONSQUEEZY_API_KEY as string
  const orders = await listAllOrders({
    apiKey: key
  });
  const isSubscribed = orders.data.find(x => x.attributes.user_email === session.user?.email && x.attributes.status === 'paid')
  return (
    <>
      <span>dashboard</span>
    </>
  );
};

export default Dashboard;
