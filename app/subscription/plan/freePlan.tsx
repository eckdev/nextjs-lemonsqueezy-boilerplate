"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const FreePlanButton = () => {
  const router = useRouter();
  return (
    <div className="text-end">
      <Button
        variant={"default"}
        size={"default"}
        className="h-10 w-40 border border-border hover:bg-background hover:text-black"
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Free Plan
      </Button>
    </div>
  );
};

export default FreePlanButton;
