import { Buffer } from "buffer";
import crypto from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import rawBody from "raw-body";
import { Readable } from "stream";
import { client } from "@/lib/lemon";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await rawBody(Readable.from(Buffer.from(await request.text())));
  const headersList = headers();
  const payload = JSON.parse(body.toString());
  const sigString = headersList.get("x-signature");
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET as string;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
  const signature = Buffer.from(
    Array.isArray(sigString) ? sigString.join("") : sigString || "",
    "utf8"
  );
  console.log(payload)

  // validate signature
  if (!crypto.timingSafeEqual(digest, signature)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
  }

  const userId = payload.meta.custom_data[0];
  const email = payload.data.attributes.user_email;

  // Check if custom defined data i.e. the `userId` is there or not
  if (!userId) {
    return NextResponse.json({ message: "No userId provided" }, { status: 403 });
  }

  switch (payload.meta.event_name) {
    case "subscription_created": {
      const subscription = await client.retrieveSubscription({ id: payload.data.id });

      await prisma.user.update({
        where: { email },
        data: {
          subscriptionId: `${subscription.data.id}`,
          customerId: `${payload.data.attributes.customer_id}`,
          variantId: subscription.data.attributes.variant_id,
          currentPeriodEnd: subscription.data.attributes.renews_at
        },
      });
    }

    case "subscription_updated": {
      const subscription = await client.retrieveSubscription({ id: payload.data.id });

      const user = await prisma.user.findUnique({
        where: { email },
        select: { subscriptionId: true },
      });

      if (!user || !user.subscriptionId) return;

      await prisma.user.update({
        where: { email },
        data: {
          variantId: subscription.data.attributes.variant_id,
          currentPeriodEnd: subscription.data.attributes.renews_at,
        },
      });
    }

    default: {
      return new Response('Done');
    }
  }

}