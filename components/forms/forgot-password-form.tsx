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
import { toast } from "../ui/toast/use-toast";
import { resetPassword } from "actions/email";
import { Button } from "../ui/button";

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

  const onSubmit = async (formData: PasswordResetFormInputs) => {
    try {
      setLoading(true)
      const message = await resetPassword({
        email: formData.email,
      })
      alert(message)

      switch (message) {
        case "success":
          toast({
            title: "Success!",
            description: "Check your inbox and verify your email address",
          })
          router.push("/login")
          break
        default:
          toast({
            title: "Error sending verification link",
            description: "Please try again",
            variant: "destructive",
          })
          router.push("/register")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      })
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16"
      >
        <FormInput type="text" name="email" label="Email" control={form.control} />
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
          {loading ? <LoadingDots color="#808080" /> : <p>{"Reset Password"}</p>}
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
