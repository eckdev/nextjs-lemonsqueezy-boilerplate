import type { CreateCheckoutResult } from "lemonsqueezy.ts/dist/types";
import { NextResponse } from "next/server";
import { axios } from "@/lib/axios";
import { client } from "@/lib/lemon";
import prisma from "@/lib/prisma";

export type CreateCheckoutResponse = {
  checkoutURL: string;
};

export async function POST(request: Request) {
  try {
    const { email, variantId } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });

    if (!user)
      return NextResponse.json(
        { message: "Your account was not found" },
        { status: 404 },
      );
    if (!variantId) {
      return NextResponse.json(
        { error: true, message: "No variant ID was provided." },
        { status: 400 },
      );
    }
    const attributes = {
        checkout_options: {
            'embed': true,
            'media': false,
            'button_color': '#fde68a'
        },
        checkout_data: {
            'email': email, // Displays in the checkout form
            'custom': {
                'user_id': user.id // Sent in the background; visible in webhooks and API calls
            }
        },
        product_options: {
            'enabled_variants': [variantId], // Only show the selected variant in the checkout
            'redirect_url': `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
            'receipt_link_url': `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
            'receipt_button_text': 'Go to your account',
            'receipt_thank_you_note': 'Thank you for signing up to Lemonstand!'
        }
    }
  
    try {
      const checkout = await client.createCheckout({
          store: (process.env.LEMONSQUEEZY_STORE_ID as string),
          variant: variantId,
          checkout_data: {
              email: user.email,
              custom: [user.id]
          },
      })
      console.log(checkout)
      
      return NextResponse.json({ checkoutURL: checkout.data.attributes.url }, { status: 201 });
    } catch (e:any) {
        console.log(e)
      return NextResponse.json({'error': true, 'message': e.message}, {status: 400})
    }
    

  }
  catch(err:any) {
    return NextResponse.json({ message: err.message || err }, { status: 500 });
  }
}