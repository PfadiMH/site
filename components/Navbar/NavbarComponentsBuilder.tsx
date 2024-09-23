import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { NavbarItemBuilder } from "./NavbarItem";
import { NavbarDropdownBuilder } from "./NavbarDropdownBuilder";
import { ImageComponent } from "../Shared/ImageComponent";
import { getAssetPath } from "@/lib/getAssetInfo";
import { NavbarComponents } from "./NavbarComponentsComponent";

type NavbarComponentsBuilderProps = Prisma.NavbarGetPayload<{}>;
type NavbarComponentBuilderProps = Prisma.NavbarComponentsGetPayload<{}>;

export async function NavbarComponentsBuilder({
  dateUpdated,
  logo,
  id,
  userUpdated,
}: NavbarComponentsBuilderProps) {
  const navbarComponents = await prisma.navbarComponents.findMany({
    orderBy: {
      sort: "asc",
    },
  });
  const navbarBuiltComponents = navbarComponents.map(NavbarComponentBuilder);
  let navbarInfo: NavbarComponentsBuilderProps = {
    dateUpdated,
    id,
    logo,
    userUpdated,
  };
  if (logo)
    navbarInfo = {
      dateUpdated,
      logo: await getAssetPath(logo),
      id,
      userUpdated,
    };

  return (
    <NavbarComponents componentsSlot={navbarBuiltComponents} {...navbarInfo} />
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
