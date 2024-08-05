import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { NavbarComponentsBuilder } from "./NavbarComponents";

export type NavbarProps = {
  navbarCompontentsSlot: React.ReactNode;
};

export function Navbar({ navbarCompontentsSlot }: NavbarProps) {
  return <nav className="bg-white p-4">{navbarCompontentsSlot}</nav>;
}

export async function NavbarBuilder() {
  const navbar = await prisma.navbar.findFirst();

  if (navbar === null) return null;

  return (
    <Navbar navbarCompontentsSlot={<NavbarComponentsBuilder {...navbar} />} />
  );
}
