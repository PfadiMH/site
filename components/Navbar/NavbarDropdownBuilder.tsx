import prisma, { Prisma } from "@/lib/prisma";
import { NavbarDropdown, NavbarDropdownProps } from "./NavbarDropdownComponent";

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
