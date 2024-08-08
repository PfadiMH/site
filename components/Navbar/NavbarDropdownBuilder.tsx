import prisma, { Prisma } from "@/lib/prisma";
import { NavbarDropdown, NavbarDropdownProps } from "./NavbarDropdown";
import { z } from "zod";

const navbarDropdownItemSchema = z.object({
  title: z.string().nullish(),
  groups_with: z.string().nullish(),
  url: z.string().nullish(),
});

const navbarDropdownItemsSchema = z.array(navbarDropdownItemSchema);

export type NavbarDropdownItem = z.infer<typeof navbarDropdownItemSchema>;

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

  return (
    <NavbarDropdown
      {...navbarDropdown}
      items={navbarDropdownItemsSchema.parse(navbarDropdown.items)}
    />
  );
}
