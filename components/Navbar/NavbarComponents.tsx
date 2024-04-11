import React from "react";
import prisma from "@/lib/prisma";
import { NavbarItemBuilder } from "./NavbarItem";
import { NavbarDropdownBuilder } from "./NavbarDropdown";

export async function NavbarComponentsBuilder() {
  const navbarComponents = await prisma.navbarComponents.findMany({
    orderBy: {
      sort: "asc",
    },
  });

  return navbarComponents.map((navbarComponent) => {
    if (navbarComponent.item === null) return null;

    let itemIdInt = Number(navbarComponent.item);

    switch (navbarComponent.collection) {
      case "navbar_item":
        return (
          <NavbarItemBuilder id={itemIdInt} key={String(navbarComponent.id)} />
        );

      case "navbar_dropdown":
        return (
          <NavbarDropdownBuilder id={itemIdInt} key={navbarComponent.id} />
        );

      default:
        return (
          <div title={JSON.stringify(navbarComponent, null, 2)}>
            Unknown collection
          </div>
        );
    }
  });
}
