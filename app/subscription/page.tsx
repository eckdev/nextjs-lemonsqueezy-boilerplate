import { Plan } from "./plan";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { getUserByEmail } from "actions/user";

export default async function SubscriptionPage() {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session) {
    redirect("/login");
  }

  const user = await  getUserByEmail(session.user?.email as string)
  if (user?.subscriptionId) {
    redirect("/dashboard");
  }

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      <Plan
        name="Monthly"
        variantId={
          process.env.NEXT_PUBLIC_LEMONSQUEEZY_MONTH_PRODUCT_ID as string
        }
        email={session.user?.email as string}
      />
      <Plan
        name="Yearly"
        variantId={
          process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID as string
        }
        email={session.user?.email as string}
      />
    </section>
  );
}
