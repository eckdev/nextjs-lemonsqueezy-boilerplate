import { Plan } from "./plan";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { getUserByEmail } from "actions/user";
import { client } from "@/lib/lemon";

export default async function SubscriptionPage() {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session) {
    redirect("/login");
  }

  const user = await getUserByEmail(session.user?.email as string);
  if (user?.subscriptionId) {
    redirect("/dashboard");
  }

  const variants = await client.listAllVariants();
  console.log(variants.data)
  const packages = variants.data.filter(
    (v) => v.attributes.status === "published",
  );

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] ">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      {packages &&
        packages.map((item) => (
          <Plan
            key={item.id}
            name={item.attributes.name}
            variantId={item.id}
            email={session.user?.email as string}
            price={(item.attributes.price / 100)}
            trialInterval={item.attributes.trial_interval_count}
          />
        ))}
    </section>
  );
}
