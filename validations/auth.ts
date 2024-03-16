
import * as z from "zod"
import { emailSchema } from "./email"

const passwordSchema = z
  .string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .min(8, {
    message: "Password must be made of at least 8 characters",
  })
  .max(256, {
    message: "Password must be made of at most 256 characters",
  })

export const signUpWithPasswordSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema.regex(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/,
      {
        message:
          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
      }
    ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export const signInWithEmailSchema = z.object({
  email: emailSchema,
})

export const signInWithPasswordSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const passwordResetSchema = z.object({
  email: emailSchema,
})

export const passwordUpdateSchema = z
  .object({
    password: passwordSchema.regex(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/,
      {
        message:
          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
      }
    ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export const emailVerificationSchema = z.object({
  email: emailSchema,
})

export type PasswordResetFormInput = z.infer<typeof passwordResetSchema>

export const passwordUpdateSchemaExtended = z
  .object({
    password: passwordSchema.regex(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/,
      {
        message:
          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
      }
    ),
    confirmPassword: z.string(),
    resetPasswordToken: z
      .string({
        required_error: "Reset password token is required",
        invalid_type_error: "Reset password token must be a string",
      })
      .min(16)
      .max(256),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

  export type PasswordUpdateFormInputExtended = z.infer<
  typeof passwordUpdateSchemaExtended
>