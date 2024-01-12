"use client";
import React, { useState } from "react";
import type { z } from "zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import LoadingDots from "../shared/loading-dots";
import FormInput from "../ui/form/input";
import { passwordResetSchema } from "validations/auth";

type PasswordResetFormInputs = z.infer<typeof passwordResetSchema>

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<PasswordResetFormInputs>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      email: ""
    },
  });

  const onSubmit = (formData: PasswordResetFormInputs) => {
    const { email } = formData
    setLoading(true);
    alert('Success!.Check your email for a password reset link')

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
        <FormInput type="text" name="email" label="Email" control={form.control} />
        <button
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-border bg-primary text-primary-foreground hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Reset Password"}</p>}
        </button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
