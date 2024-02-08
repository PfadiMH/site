import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import React from "react";
import type Schema from "@/lib/directus-types";

export type NavbarDropdownProps = Schema.NavbarDropdown;

export async function NavbarDropdown({
  title,
  dropdown_items,
}: NavbarDropdownProps) {
  return (
    <div>
      {title}
      <pre>{JSON.stringify(dropdown_items, null, 2)}</pre>
    </div>
  );
}

export interface NavbarDropdownBuilderProps {
  id: string;
}

export async function NavbarDropdownBuilder({
  id,
}: NavbarDropdownBuilderProps) {
  const navbarDropdown = await directus.request(
    readItem("navbar_dropdown", id)
  );

  return <NavbarDropdown {...navbarDropdown} />;
}
