import prisma from "./prisma";
import { client } from "./lemon";

export async function getUserSubscriptionPlan(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      subscriptionId: true,
      currentPeriodEnd: true,
      customerId: true,
      variantId: true,
    },
  });

  if (!user) throw new Error("User not found");
  if (!user?.subscriptionId) {
    return;
  }

  // Check if user is on a pro plan.
  const isPro =
    user.variantId &&
    user.currentPeriodEnd &&
    user.currentPeriodEnd.getTime() + 86_400_000 > Date.now();

  const subscription = await client.retrieveSubscription({
    id: (user?.subscriptionId) as string,
  });

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false;

  if (isPro && user.subscriptionId) {
    isCanceled = subscription.data.attributes.cancelled;
  }

  const monthlyVariantId = process.env.NEXT_PUBLIC_LEMONSQUEEZY_MONTH_PRODUCT_ID
  const yearlyVariantId = process.env.NEXT_PUBLIC_LEMONSQUEEZY_YEAR_PRODUCT_ID

  console.log(monthlyVariantId)


  return {
    ...user,
    currentPeriodEnd: subscription.data.attributes.renews_at,
    isCanceled,
    isPro,
    updatePaymentMethodURL:
      subscription.data.attributes.urls.update_payment_method,
    name: subscription.data.attributes.variant_id === Number(monthlyVariantId) ? 'Monthly' : subscription.data.attributes.variant_id === Number(yearlyVariantId) ? 'Yearly' : ''
  };
}
