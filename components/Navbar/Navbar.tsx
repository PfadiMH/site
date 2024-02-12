import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { NavbarComponentsBuilder } from "./NavbarComponents";

export type NavbarProps = Prisma.NavbarGetPayload<{}> & {
  navbarCompontentsSlot: React.ReactNode;
};

export function Navbar({ title, navbarCompontentsSlot }: NavbarProps) {
  return (
    <nav>
      <h1>{title}</h1>
      <div className="flex space-x-4">{navbarCompontentsSlot}</div>
    </nav>
  );
}

export async function NavbarBuilder() {
  const navbar = await prisma.navbar.findFirst();

  if (navbar === null) return null;

  return (
    <Navbar {...navbar} navbarCompontentsSlot={<NavbarComponentsBuilder />} />
  );
}
