import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/register-form";
import { Logo } from "@/components/logo";

export default function Register() {
  return (
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-border bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <Logo />
          <h3 className="text-xl font-semibold pt-4">Sign Up</h3>
          <p className="text-sm text-muted-foreground">
            Create an account with your email and password
          </p>
        </div>
        <RegisterForm />
      </div>
  );
}