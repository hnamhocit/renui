"use client";

import { ReactNode } from "react";
import { ToastProvider } from "renui";

import DefaultLayout from "@/layouts/Default";
import { ThemeProvider } from "@/context/ThemeProvider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ToastProvider>
      <ThemeProvider>
        <DefaultLayout>{children}</DefaultLayout>
      </ThemeProvider>
    </ToastProvider>
  );
};

export default Provider;
