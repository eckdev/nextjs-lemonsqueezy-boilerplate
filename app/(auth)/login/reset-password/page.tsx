import ResetPasswordForm from "@/components/forms/reset-password-form";
import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

interface PasswordUpdatePageProps {
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function ResetPassword({
    searchParams,
  }: PasswordUpdatePageProps) {
  return (
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-background px-4 py-6 pt-8 text-center sm:px-16">
        <Logo />
          <h3 className="text-xl font-semibold pt-4">Password Reset</h3>
          <p className="text-sm text-gray-500">
            Enter your email to receive a reset link
          </p>
        </div>
        <ResetPasswordForm resetPasswordToken={(searchParams?.token as string) ?? ''} />
      </div>
  );
}