import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ContextTest } from "./useCauses";
import Aside from "@/ui/components/Aside/Aside";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shoppingify",
  description: "Admin of products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} flex`}>
        <Aside />
        <ContextTest>{children}</ContextTest>
      </body>
    </html>
  );
}
