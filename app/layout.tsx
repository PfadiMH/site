import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarBuilder } from "@/components/Navbar/Navbar";
import { FooterBuilder } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <NavbarBuilder />
        {children}
        <FooterBuilder />
      </body>
    </html>
  );
}
