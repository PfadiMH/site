import { notFound } from "next/navigation";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import { FooterBuilder } from "./Footer/Footer";
import type Schema from "@/lib/directus-types";

export type PageProps = Schema.Page & {
  navbarSlot: React.ReactNode;
  sectionsSlot: React.ReactNode;
  footerSlot: React.ReactNode;
};

export async function Page({
  navbarSlot,
  sectionsSlot,
  footerSlot,
}: PageProps) {
  return (
    <main className="min-h-screen p-24">
      <div>{navbarSlot}</div>
      <div>{sectionsSlot}</div>
      <div>{footerSlot}</div>
    </main>
  );
}

export interface PageBuilderProps {
  path: string;
}

export async function PageBuilder({ path }: PageBuilderProps) {
  const pageItems = await directus.request(
    readItems("page", {
      fields: ["*"],
      filter: {
        path: {
          _eq: path,
        },
      },
      limit: 1,
    })
  );

  if (pageItems.length === 0) {
    return notFound();
  }

  const pageItem = pageItems[0];

  return (
    <Page
      {...pageItem}
      navbarSlot={<NavbarBuilder />}
      sectionsSlot={<div>Sections</div>}
      footerSlot={<FooterBuilder />}
    />
  );
}
