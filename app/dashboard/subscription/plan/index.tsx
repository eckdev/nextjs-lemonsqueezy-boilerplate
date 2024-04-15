"use client";

import { CreateCheckoutResponse } from "@/app/api/payment/subscribe/route";
import { Icons } from "@/components/icons";
import LoadingDots from "@/components/shared/loading-dots";
import { Button } from "@/components/ui/button";
import { axios } from "@/lib/axios";
import React, { useState } from "react";

type PlanProps = {
  name: string;
  email: string;
  variantId: string;
  price: number;
  hasTrial?: boolean;
  trialInterval?: number;
};

export const Plan = ({
  name,
  email,
  variantId,
  price,
  hasTrial,
  trialInterval,
}: PlanProps) => {
  const [loading, setLoading] = useState(false);
  const Icon = Icons["check"];
  const onPlanClick = async () => {
    try {
      setLoading(true);
      const { checkoutURL } = await axios.post<any, CreateCheckoutResponse>(
        "/api/payment/subscribe",
        { email, variantId },
      );

      window.location.href = checkoutURL;
    } catch (err) {
      //
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mb-4 grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        <h3 className="text-xl font-bold sm:text-2xl">
          What&apos;s included in the {name} plan
        </h3>
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="flex items-center">
            <Icon className="mr-2 h-4 w-4" /> Free Trial {trialInterval} Days
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
          <h4 className="text-7xl font-bold">${price}</h4>
          <p className="text-sm font-medium text-muted-foreground">
            Billed {name}
          </p>
        </div>
        <Button
          variant={"default"}
          size={"default"}
          className={
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "w-full"
          }
          onClick={onPlanClick}
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Upgrade"}</p>}
        </Button>
      </div>
    </div>
  );
};
