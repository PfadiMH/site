import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarBuilder } from "@/components/Navbar/Navbar";
import { FooterBuilder } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pfadi MH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarBuilder />
        {children}
        <FooterBuilder />
      </body>
    </html>
  );
}
