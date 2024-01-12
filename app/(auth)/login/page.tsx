import Image from "next/image";
import LoginForm from "@/components/forms/login-form"
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Login() {
  const session = await getServerSession(authOptions);
  return (
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-border bg-background px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-muted-foreground">
            Use your email and password to sign in
          </p>
        </div>
        <LoginForm session={session} />
      </div>
  );
}