"use server"

import crypto from "crypto"

import { getUserByEmail } from "./user"
import {
  emailVerificationSchema,
  type EmailVerificationFormInput,
} from "validations/email"

import prisma from "@/lib/prisma";
import { resend } from "../config/email"
import { VerificationEmail } from "@/components/emails/verification-email"

export async function resendEmailVerificationLink(
  rawInput: EmailVerificationFormInput
): Promise<"invalid-input" | "not-found" | "error" | "success"> {
  try {
    const validatedInput = emailVerificationSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    const user = await getUserByEmail(validatedInput.data.email)
    if (!user) return "not-found"

    const emailVerificationToken = crypto.randomBytes(32).toString("base64url")

    const userUpdated = await prisma.user.update({
      where: {
        email: validatedInput.data.email,
      },
      data: {
        emailVerified: new Date(),
      },
    })

    const emailSent = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM as string,
      to: [validatedInput.data.email],
      subject: "Verify your email address",
      react: VerificationEmail({
        email: validatedInput.data.email,
        emailVerificationToken,
      }),
    })

    return userUpdated && emailSent ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error resending email verification link")
  }
}