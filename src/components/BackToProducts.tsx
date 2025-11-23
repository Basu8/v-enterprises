"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function BackToProducts({ className, children }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/products")}
      className={className}
      aria-label="Back to products"
    >
      {children}
    </button>
  );
}
