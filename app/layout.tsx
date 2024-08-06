import clsx from "clsx";
import "./globals.css";
import { NavbarBuilder } from "@/components/Navbar/Navbar";
import { FooterBuilder } from "@/components/Footer/Footer";
import { poppins, rockingsodaPlus } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={clsx(rockingsodaPlus.variable, poppins.variable)}>
        <NavbarBuilder />
        {children}
        <FooterBuilder />
      </body>
    </html>
  );
}
