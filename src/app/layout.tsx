import type { Metadata } from "next";
import "renui/style.css";
import "./globals.css";

import { Poppins } from "next/font/google";

import Provider from "@/components/Provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RenUI",
  description: "RenUI - A React New UI Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased dark:bg-gray-950 transition`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
