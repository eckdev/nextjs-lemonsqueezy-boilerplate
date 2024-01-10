"use client";

import { CreateCheckoutResponse } from "@/app/api/payment/subscribe/route";
import { Icons } from "@/components/icons";
import LoadingDots from "@/components/shared/loading-dots";
import { axios } from "@/lib/axios";
import React, { useState } from "react";

type PlanProps = {
    name: string
    email:string
    variantId: string
};

export const Plan = ({
    name,
    email,
    variantId
}: PlanProps) => {
    const [loading, setLoading] = useState(false)
  const Icon = Icons["check"];
  const onPlanClick = async () => {
    try {
        setLoading(true)
        const { checkoutURL }= await axios.post<any, CreateCheckoutResponse>(
        "/api/payment/subscribe",
        { email, variantId },
      );

      window.location.href = checkoutURL;
    } catch (err) {
      //
    }
    finally {
        setLoading(false)
    }
  }
  return (
    <div className="mb-4 grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        <h3 className="text-xl font-bold sm:text-2xl">
          What&apos;s included in the {name} plan
        </h3>
        <ul className="text-muted-foreground grid gap-3 text-sm sm:grid-cols-2">
          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Unlimited Posts
          </li>
          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Unlimited Users
          </li>

          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Custom domain
          </li>
          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Dashboard Analytics
          </li>
          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Access to Discord
          </li>
          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Premium Support
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div>
          <h4 className="text-7xl font-bold">$10</h4>
          <p className="text-muted-foreground text-sm font-medium">
            Billed {name}
          </p>
        </div>
        <button
          disabled={loading}
          onClick={onPlanClick}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Get Started"}</p>}
        </button>
      </div>
    </div>
  );
};
