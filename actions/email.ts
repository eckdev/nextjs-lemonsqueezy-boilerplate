"use server";

import crypto from "crypto";

import { getUserByEmail, getUserByResetPasswordToken } from "./user";

import prisma from "@/lib/prisma";
import { resend } from "../config/email";
import { ResetPasswordEmail } from "@/components/emails/reset-password-email";
import {
  PasswordResetFormInput,
  PasswordUpdateFormInputExtended,
  passwordResetSchema,
  passwordUpdateSchemaExtended,
} from "validations/auth";
import { hash } from "bcrypt";

export async function resetPassword(
  rawInput: PasswordResetFormInput,
): Promise<"invalid-input" | "not-found" | "error" | "success"> {
  try {
    const validatedInput = passwordResetSchema.safeParse(rawInput);
    if (!validatedInput.success) return "invalid-input";

    const user = await getUserByEmail(validatedInput.data.email);
    if (!user) return "not-found";

    const today = new Date();
    const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
    const resetPasswordTokenExpiry = new Date(
      today.setDate(today.getDate() + 1),
    ); // 24 hours from now

    const userUpdated = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetPasswordToken,
        resetPasswordTokenExpiry,
      },
    });

    const emailSent = await resend.emails.send({
      from: 'Hello <onboarding@resend.dev>',
      to: [validatedInput.data.email],
      subject: "Reset your password",
      react: ResetPasswordEmail({
        email: validatedInput.data.email,
        resetPasswordToken,
      }),
    });

    return userUpdated && emailSent ? "success" : "error";
  } catch (error) {
    console.error(error);
    return "error";
  }
}

export async function updatePassword(
  rawInput: PasswordUpdateFormInputExtended,
): Promise<"invalid-input" | "not-found" | "expired" | "error" | "success"> {
  try {
    const validatedInput = passwordUpdateSchemaExtended.safeParse(rawInput);
    if (
      !validatedInput.success ||
      validatedInput.data.password !== validatedInput.data.confirmPassword
    )
      return "invalid-input";

    const user = await getUserByResetPasswordToken(
      validatedInput.data.resetPasswordToken,
    );
    if (!user) return "not-found";

    const resetPasswordExpiry = user.resetPasswordTokenExpiry;
    if (!resetPasswordExpiry || resetPasswordExpiry < new Date())
      return "expired";

    const passwordHash = await hash(validatedInput.data.password, 10);

    const userUpdated = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: passwordHash,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      },
    });

    return userUpdated ? "success" : "error";
  } catch (error) {
    console.error(error);
    throw new Error("Error updating password");
  }
}
