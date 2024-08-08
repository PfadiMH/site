import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { NavbarItemBuilder } from "./NavbarItem";
import { NavbarDropdownBuilder } from "./NavbarDropdownBuilder";
import { getAssetPath } from "@/lib/getAssetInfo";
import { NavbarComponents } from "./NavbarComponents";
type NavbarComponentsBuilderProps = Prisma.NavbarGetPayload<{}>;
type NavbarComponentBuilderProps = Prisma.NavbarComponentsGetPayload<{}>;

export async function NavbarComponentsBuilder({
  logo,
  ...navbar
}: NavbarComponentsBuilderProps) {
  const navbarComponents = await prisma.navbarComponents.findMany({
    orderBy: {
      sort: "asc",
    },
  });
  const navbarBuiltComponents = navbarComponents.map((navbarComponent) => (
    <NavbarComponentBuilder {...navbarComponent} />
  ));

  const logoPath = logo && (await getAssetPath(logo));

  return (
    <NavbarComponents
      componentsSlot={navbarBuiltComponents}
      {...navbar}
      logo={logoPath}
    />
  );
}

const NavbarComponentBuilder = (
  navbarComponent: NavbarComponentBuilderProps
) => {
  if (navbarComponent.item === null) return null;

  let itemIdInt = Number(navbarComponent.item);

  switch (navbarComponent.collection) {
    case "navbar_items":
      return (
        <NavbarItemBuilder id={itemIdInt} key={String(navbarComponent.id)} />
      );

    case "navbar_dropdowns":
      return <NavbarDropdownBuilder id={itemIdInt} key={navbarComponent.id} />;

    default:
      return (
        <div title={JSON.stringify(navbarComponent, null, 2)}>
          Unknown collection
        </div>
      );
  }
};
