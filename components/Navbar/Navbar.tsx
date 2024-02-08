import directus from "@/lib/directus";
import { readSingleton } from "@directus/sdk";
import React from "react";
import { NavbarComponentsBuilder } from "./NavbarComponents";
import type Schema from "@/lib/directus-types";

export type NavbarProps = Schema.Navbar & {
  navbarCompontentsSlot: React.ReactNode;
};

export function Navbar({ title, navbarCompontentsSlot }: NavbarProps) {
  return (
    <nav>
      <h1>{title}</h1>
      <div className="flex space-x-4">{navbarCompontentsSlot}</div>
    </nav>
  );
}

export async function NavbarBuilder() {
  const navbarItem = await directus.request(
    readSingleton("navbar", {
      fields: ["*"],
    })
  );

  return (
    <Navbar
      {...navbarItem}
      navbarCompontentsSlot={<NavbarComponentsBuilder />}
    />
  );
}
