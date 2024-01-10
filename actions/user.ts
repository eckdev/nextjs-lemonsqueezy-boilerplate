"use server"

import prisma from "@/lib/prisma";
import { type User } from "@prisma/client"


export async function getUserByResetPasswordToken(
    resetPasswordToken: string
  ): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: {
          resetPasswordToken,
        },
      })
    } catch (error) {
      console.error(error)
      throw new Error("Error getting user by reset password token")
    }
  }

  export async function getUserByEmail(
    email: string
  ): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: {
          email,
        },
      })
    } catch (error) {
      console.error(error)
      throw new Error("Error getting user by reset password token")
    }
  }