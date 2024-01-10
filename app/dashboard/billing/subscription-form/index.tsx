"use client";
import { axios } from "@/lib/axios";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type SubscriptionsProps = {
  email: string;
  subscriptionPlan: any;
};

const SubscriptionForm = ({ email, subscriptionPlan }: SubscriptionsProps) => {
  console.log(subscriptionPlan)
  const router = useRouter();
  const cancelSubscription = async () => {
    try {
      const res = await axios.post<any, any>(
        "/api/payment/cancel-subscription",
        {
          email,
        },
      );

      router.refresh()
      alert(res.message);
    } catch (err) {
      //
    }
  };

  const resumeSubscription = async () => {
    try {
      const res = await axios.post<any, any>(
        "/api/payment/resume-subscription",
        {
          email,
        },
      );

      router.refresh()
      alert(res.message);
      console.log(res);
    } catch (err) {
      //
    }
  };

  const changeYearlySubscription = async (variantId: string) => {
    try {
      const res = await axios.post<any, any>(
        "/api/payment/change-subscription",
        {
          email,
          variantId,
        },
      );

      alert(res.message);
      router.refresh()

    } catch (err) {
      //
    }
  };

  return (
    <>
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Subscription Plan
          </h3>
          <p className="text-muted-foreground text-sm">
            You are currently on the{" "}
            <strong>{subscriptionPlan.name.toUpperCase()}</strong> plan.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-2 p-6 pt-0 md:flex-row md:justify-between md:items-baseline md:space-x-0">
          <div className="flex flex-row">
          {!subscriptionPlan.isCanceled && (
            <button
              type="submit"
              className="mr-2 focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              onClick={cancelSubscription}
            >
              Cancel Subscription
            </button>
          )}
          {subscriptionPlan.isCanceled && (
            <button
              type="submit"
              className="mr-2 focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              onClick={resumeSubscription}
            >
              Resume Subscription
            </button>
          )}
          {!subscriptionPlan.isCanceled && subscriptionPlan.variantId !== Number(process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID ) && <button
            type="submit"
            className="focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() =>
              changeYearlySubscription(
                process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID as string,
              )
            }
          >
            Upgrade to Yearly Plan
          </button>}
          </div>

          <p className="rounded-full text-xs font-medium">
            {subscriptionPlan.isCanceled
              ? "Your plan will be canceled on "
              : "Your plan renews on "}
            {formatDate(subscriptionPlan.currentPeriodEnd as number)}.
          </p>
        </div>
      </div>
    </>
  );
};

export default SubscriptionForm;
