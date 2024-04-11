import React from "react";
import prisma, { Prisma } from "@/lib/prisma";

export type NavbarDropdownProps = Prisma.NavbarDropdownsGetPayload<{}>;

export async function NavbarDropdown({ title, items }: NavbarDropdownProps) {
  return <div title={JSON.stringify(items, null, 2)}>{title}</div>;
}

export interface NavbarDropdownBuilderProps {
  id: number;
}

export async function NavbarDropdownBuilder({
  id,
}: NavbarDropdownBuilderProps) {
  const navbarDropdown = await prisma.navbarDropdowns.findFirst({
    where: {
      id,
    },
  });

  if (navbarDropdown === null) return null;

  return <NavbarDropdown {...navbarDropdown} />;
}
