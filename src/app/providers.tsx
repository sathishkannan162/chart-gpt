"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { authClient } from "@/lib/auth-client";
import CountProvider from "@/store/CountProvider";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <CountProvider>
      <AuthUIProvider
        authClient={authClient}
        navigate={router.push}
        replace={router.replace}
        onSessionChange={() => {
          // Clear router cache (protected routes)
          router.refresh();
        }}
        Link={Link}
      >
        {children}
      </AuthUIProvider>
    </CountProvider>
  );
}
