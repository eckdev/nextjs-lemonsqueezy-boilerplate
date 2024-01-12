"use client";
import React, { useState } from "react";
import prisma from "@/lib/prisma";
import type { z } from "zod";
import { hash } from "bcrypt";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import LoadingDots from "../shared/loading-dots";
import FormInput from "../ui/form/input";
import { passwordUpdateSchema } from "validations/auth";
import { getUserByResetPasswordToken } from "actions/user";

type PasswordUpdateFormInputs = z.infer<typeof passwordUpdateSchema>
interface PasswordUpdateFormProps {
    resetPasswordToken: string
  }
const ResetPasswordForm = ({resetPasswordToken}:PasswordUpdateFormProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<PasswordUpdateFormInputs>({
    resolver: zodResolver(passwordUpdateSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = async (formData: PasswordUpdateFormInputs) => {
    const { password } = formData
    setLoading(true);
    // const user = await getUserByResetPasswordToken(resetPasswordToken)
    // if (!user) { return; }
    // const resetPasswordExpiry = user.resetPasswordTokenExpiry
    // if (!resetPasswordExpiry || resetPasswordExpiry < new Date()) {return;}

    // const passwordHash = await hash(password, 10)
    // await prisma.user.update({
    //     where: {
    //       id: user.id,
    //     },
    //     data: {
    //       password: passwordHash,
    //       resetPasswordToken: null,
    //       resetPasswordTokenExpiry: null,
    //     },
    //   })

    setTimeout(() => {
        router.push("/login")
    }, 1000);
  }


  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      >
        <FormInput
          type="password"
          name="password"
          label="Password"
          control={form.control}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          control={form.control}
        />
        <button
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-border bg-primary text-primary-foreground hover:bg-background hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Update Password"}</p>}
        </button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
