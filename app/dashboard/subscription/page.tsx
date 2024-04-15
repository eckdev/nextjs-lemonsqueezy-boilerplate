import { Plan } from "./plan";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getUserByEmail } from "actions/user";
import { client } from "@/lib/lemon";
import { DashboardShell } from "@/components/ui/shell";
import { DashboardHeader } from "@/components/ui/header";

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
  const packages = variants.data.filter(
    (v) => v.attributes.status === "published",
  );

  return (
    <DashboardShell>
    <DashboardHeader
      heading="Subscription"
      text="Change Subscription Plan"
    />
    <div className="grid gap-10">
    {packages &&
        packages.map((item) => (
          <Plan
            key={item.id}
            name={item.attributes.name}
            variantId={item.id}
            email={session.user?.email as string}
            price={item.attributes.price / 100}
            trialInterval={item.attributes.trial_interval_count}
          />
        ))}
    </div>
  </DashboardShell>
  );
}
