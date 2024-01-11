"use client";
import React, { useState } from "react";
import { axios } from "@/lib/axios";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/toast/use-toast";
import { LoadingCircle, LoadingSpinner } from "@/components/shared/icons";
import { Icons } from "@/components/icons";

type SubscriptionsProps = {
  email: string;
  subscriptionPlan: any;
};

const SubscriptionForm = ({ email, subscriptionPlan }: SubscriptionsProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const cancelSubscription = async () => {
    try {
      setLoading(true);
      const res = await axios.post<any, any>(
        "/api/payment/cancel-subscription",
        {
          email,
        },
      );

      router.refresh();
      return toast({
        title: "Your subscription has been cancelled",
        description: res.message,
      });
    } catch (err) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resumeSubscription = async () => {
    try {
      setLoading(true);
      const res = await axios.post<any, any>(
        "/api/payment/resume-subscription",
        {
          email,
        },
      );

      router.refresh();
      return toast({
        title: res.message,
      });
    } catch (err) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const changeYearlySubscription = async (variantId: string) => {
    try {
      setLoading(true);
      const res = await axios.post<any, any>(
        "/api/payment/change-subscription",
        {
          email,
          variantId,
        },
      );

      router.refresh();
      return toast({
        title: "You are currently on the yearly plan.",
        description: res.message,
      });
    } catch (err) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            You are currently on the{" "}
            <strong>{subscriptionPlan.name.toUpperCase()}</strong> plan.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          <div className="flex flex-row">
            {!subscriptionPlan.isCanceled && (
              <button
                type="submit"
                className="focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 mr-2 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                onClick={cancelSubscription}
              >
                Cancel Subscription
                {isLoading && (
                  <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
                )}
              </button>
            )}
            {subscriptionPlan.isCanceled && (
              <button
                type="submit"
                className="focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 mr-2 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                onClick={resumeSubscription}
              >
                Resume Subscription
                {isLoading && (
                  <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
                )}
              </button>
            )}
            {!subscriptionPlan.isCanceled &&
              subscriptionPlan.variantId !==
                Number(
                  process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID,
                ) && (
                <button
                  type="submit"
                  className="focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    changeYearlySubscription(
                      process.env
                        .NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID as string,
                    )
                  }
                >
                  Upgrade to Yearly Plan
                  {isLoading && (
                    <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
                  )}
                </button>
              )}
          </div>

          <p className="rounded-full text-xs font-medium">
            {subscriptionPlan.isCanceled
              ? "Your plan will be canceled on "
              : "Your plan renews on "}
            {formatDate(subscriptionPlan.currentPeriodEnd as number)}.
          </p>
        </CardFooter>
      </Card>
    </>
    // <>
    //   <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
    //     <div className="flex flex-col space-y-1.5 p-6">
    //       <h3 className="text-lg font-semibold leading-none tracking-tight">
    //         Subscription Plan
    //       </h3>
    //       <p className="text-muted-foreground text-sm">
    //         You are currently on the{" "}
    //         <strong>{subscriptionPlan.name.toUpperCase()}</strong> plan.
    //       </p>
    //     </div>
    //     <div className="flex flex-col items-start space-y-2 p-6 pt-0 md:flex-row md:justify-between md:items-baseline md:space-x-0">
    //       <div className="flex flex-row">
    //       {!subscriptionPlan.isCanceled && (
    //         <button
    //           type="submit"
    //           className="mr-2 focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    //           onClick={cancelSubscription}
    //         >
    //           Cancel Subscription
    //         </button>
    //       )}
    //       {subscriptionPlan.isCanceled && (
    //         <button
    //           type="submit"
    //           className="mr-2 focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    //           onClick={resumeSubscription}
    //         >
    //           Resume Subscription
    //         </button>
    //       )}
    //       {!subscriptionPlan.isCanceled && subscriptionPlan.variantId !== Number(process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID ) && <button
    //         type="submit"
    //         className="focus-visible:ring-ring ring-offset-background text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    //         onClick={() =>
    //           changeYearlySubscription(
    //             process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID as string,
    //           )
    //         }
    //       >
    //         Upgrade to Yearly Plan
    //       </button>}
    //       </div>

    //       <p className="rounded-full text-xs font-medium">
    //         {subscriptionPlan.isCanceled
    //           ? "Your plan will be canceled on "
    //           : "Your plan renews on "}
    //         {formatDate(subscriptionPlan.currentPeriodEnd as number)}.
    //       </p>
    //     </div>
    //   </div>
    // </>
  );
};

export default SubscriptionForm;
