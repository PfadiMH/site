import React from "react";
import prisma, { Prisma } from "@/lib/prisma";

export type NavbarItemProps = Prisma.NavbarItemsGetPayload<{}>;

export async function NavbarItem({ title, url }: NavbarItemProps) {
  return (
    <a
      className="text-black text-2xl font-rockingsoda "
      href={url || undefined}
    >
      {title}
    </a>
  );
}

export interface NavbarItemBuilderProps {
  id: number;
}

export async function NavbarItemBuilder({ id }: NavbarItemBuilderProps) {
  const navbarItem = await prisma.navbarItems.findFirst({
    where: {
      id,
    },
  });

  if (navbarItem === null) return null;

  return <NavbarItem {...navbarItem} />;
}
