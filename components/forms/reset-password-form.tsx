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
import { resetPassword, updatePassword } from "actions/email";
import { toast } from "../ui/toast/use-toast";

type PasswordUpdateFormInputs = z.infer<typeof passwordUpdateSchema>;
interface PasswordUpdateFormProps {
  resetPasswordToken: string;
}
const ResetPasswordForm = ({ resetPasswordToken }: PasswordUpdateFormProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<PasswordUpdateFormInputs>({
    resolver: zodResolver(passwordUpdateSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (formData: PasswordUpdateFormInputs) => {
    const { password, confirmPassword } = formData;
    setLoading(true);
    try {
      const message = await updatePassword({
        password: password,
        confirmPassword: confirmPassword,
        resetPasswordToken,
      });

      switch (message) {
        case "expired":
          toast({
            title: "Token is missing or expired",
            description: "Please try again",
            variant: "destructive",
          });
          router.push("/signin");
          break;
        case "success":
          toast({
            title: "Success!",
            description: "You can now sign in with new password",
          });
          router.push("/signin");
          break;
        default:
          toast({
            title: "Error updating password",
            description: "Please try again",
            variant: "destructive",
          });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      console.error(error);
    }
  };

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
          {loading ? (
            <LoadingDots color="#808080" />
          ) : (
            <p>{"Update Password"}</p>
          )}
        </button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
