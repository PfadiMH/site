import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import React from "react";
import { NavbarItemBuilder } from "./NavbarItem";
import { NavbarDropdownBuilder } from "./NavbarDropdown";

export async function NavbarComponentsBuilder() {
  const navbarItemItems = await directus.request(
    readItems("navbar_navbar_components", {
      fields: ["*"],
      sort: "sort",
    })
  );

  return navbarItemItems.map((navbarItemItem) => {
    switch (navbarItemItem.collection) {
      case "navbar_item":
        return (
          <NavbarItemBuilder
            id={String(navbarItemItem.item)}
            key={String(navbarItemItem.id)}
          />
        );

      case "navbar_dropdown":
        return (
          <NavbarDropdownBuilder
            id={String(navbarItemItem.item)}
            key={String(navbarItemItem.id)}
          />
        );
      default:
        return (
          <div title={JSON.stringify(navbarItemItem, null, 2)}>
            Unknown collection
          </div>
        );
    }
  });
}
