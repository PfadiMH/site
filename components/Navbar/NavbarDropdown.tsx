import React from "react";
import prisma, { Prisma } from "@/lib/prisma";

export type NavbarDropdownProps = Omit<
  Prisma.NavbarDropdownsGetPayload<{}>,
  "items"
> & {
  items: {
    title: string;
    groups_with: string;
    url: string;
  }[];
};

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

  const navbarDropdownPropperlyTyped: NavbarDropdownProps = {
    ...navbarDropdown,
    items: navbarDropdown.items as NavbarDropdownProps["items"],
  };
  return <NavbarDropdown {...navbarDropdownPropperlyTyped} />;
}
