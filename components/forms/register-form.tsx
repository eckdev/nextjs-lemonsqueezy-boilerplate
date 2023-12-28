"use client";
import React, { useState } from "react";
import type { z } from "zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { signUpWithPasswordSchema } from "validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoadingDots from "../shared/loading-dots";
import FormInput from "../ui/form/input";

type SignUpWithEmailFormInputs = z.infer<typeof signUpWithPasswordSchema>;

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<SignUpWithEmailFormInputs>({
    resolver: zodResolver(signUpWithPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (formData: SignUpWithEmailFormInputs):void => {
    const { email, password } = formData
    setLoading(true);
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(async (res) => {
      setLoading(false);
      if (res.status === 200) {
        //toast.success("Account created! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        const { error } = await res.json();
        //toast.error(error);
      }
    });
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
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Sign Up"}</p>}
        </button>
        <p className="text-center text-sm text-gray-600">
          Do you have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
