"use client";
import React, { useState } from "react";
import type { z } from "zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { signInWithPasswordSchema } from "validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import LoadingDots from "../shared/loading-dots";
import { signIn } from "next-auth/react";
import FormInput from "../ui/form/input";
import { Session } from "next-auth";
import { Google } from "@/components/shared/icons";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/toast/use-toast";
import { useRouter } from "next/navigation";


type SignInWithEmailFormInputs = z.infer<typeof signInWithPasswordSchema>;

const LoginForm = ({ session }: { session: Session | null }) => {
  const [loading, setLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const router = useRouter();
  const form = useForm<SignInWithEmailFormInputs>({
    resolver: zodResolver(signInWithPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: SignInWithEmailFormInputs) => {
    const { email, password } = formData;
    setLoading(true);
    const signInResult = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    setLoading(false);
    if (signInResult?.error) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      })
    }
    else{
      router.push(signInResult?.url as string)
    }
  };

  return (
    <>
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
          {loading ? <LoadingDots color="#808080" /> : <p>{"Sign In"}</p>}
        </Button>
          <div className="grid w-full text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
            <div>
              <span className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-gray-800 hover:underline"
                >
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
        <div className="bg-white text-center pb-8">
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }))}
            onClick={() => {
              setIsGoogleLoading(true)
              signIn("google",{
                callbackUrl: '/dashboard'
              });
            }}
            disabled={loading || isGoogleLoading}
          >
            {isGoogleLoading ? (
              <LoadingDots color="#808080" />
            ) : (
              <Google className="h-5 w-5 mr-2" />
            )}{" "}
            Sign In with Google
          </button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
