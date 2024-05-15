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
import { toast } from "../ui/toast/use-toast";
import { Button } from "../ui/button";

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
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        form.reset()
        const { error } = await res.json();
        return toast({
          title: "Something went wrong.",
          description: error,
          variant: "destructive",
        })
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16"
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
        <Button
          variant={"default"}
          size={"default"}
          type="submit"
          className={
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "w-full"
          }
        >
          {loading ? <LoadingDots color="#808080" /> : <p>{"Sign Up"}</p>}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
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
