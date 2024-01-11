"use client";
import React, { useState } from "react";
import type { z } from "zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { signInWithPasswordSchema } from "validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import LoadingDots from "../shared/loading-dots";
import { signIn } from "next-auth/react";
import FormInput from "../ui/form/input";
import { Session } from "next-auth";

type SignInWithEmailFormInputs = z.infer<typeof signInWithPasswordSchema>;

const LoginForm = ({ session }: { session: Session | null }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<SignInWithEmailFormInputs>({
    resolver: zodResolver(signInWithPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData: SignInWithEmailFormInputs) => {
    const { email, password } = formData;
    setLoading(true);
    signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: session?.user.subscriptionId ?  "/dashboard" : "/subscription",
    })
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      >
        <FormInput
          type="text"
          name="email"
          label="Email"
          control={form.control}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          control={form.control}
        />
        <button
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Sign In"}</p>}
        </button>
        <div className="text-muted-foreground grid w-full text-sm max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <span className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-gray-800 hover:underline">
                Sign up
              </Link>{" "}
              for free.
            </span>
          </div>
          <div>
            <span>Forgot your password? </span>
            <Link
              aria-label="Reset password"
              href="/login/forgot-password"
              className="font-semibold text-gray-800 hover:underline"
            >
              Reset now
              <span className="sr-only">Reset Password</span>
            </Link>
            .
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
