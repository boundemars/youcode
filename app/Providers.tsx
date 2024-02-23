"use client";

import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes/dist";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster />
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
