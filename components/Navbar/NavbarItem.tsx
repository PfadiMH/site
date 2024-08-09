import React from "react";
import prisma, { Prisma } from "@/lib/prisma";

export type NavbarItemProps = Prisma.NavbarItemsGetPayload<{}>;

export async function NavbarItem({ title, url }: NavbarItemProps) {
  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden bg-primary  w-full p-3 flex justify-center">
        <a
          href={url || undefined}
          className="text-brand-yellow text-2xl font-rockingsoda"
        >
          {title}
        </a>
      </div>
      {/* DESKTOP */}
      <a
        className="hidden md:block text-black text-2xl font-rockingsoda"
        href={url || undefined}
      >
        {title}
      </a>
    </>
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
