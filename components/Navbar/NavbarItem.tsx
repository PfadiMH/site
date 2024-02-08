import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import React from "react";
import type Schema from "@/lib/directus-types";

export type NavbarItemProps = Schema.NavbarItem;

export async function NavbarItem({ title, url }: NavbarItemProps) {
  return (
    <a className="text-blue-500 underline" href={url || undefined}>
      {title}
    </a>
  );
}

export interface NavbarItemBuilderProps {
  id: string;
}

export async function NavbarItemBuilder({ id }: NavbarItemBuilderProps) {
  const navbarItem = await directus.request(readItem("navbar_item", id));

  return <NavbarItem {...navbarItem} />;
}
