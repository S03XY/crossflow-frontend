import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/banner";
import { BottomNavigation } from "@/components/bottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krossflow",
  description:
    "Send and receive cross chain payment in the easiest way possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${inter.className} h-screen w-full max-w-[650px] mx-auto bg-primary/[100] border-x border-white/30 relative`}
      >
        <Banner />
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
