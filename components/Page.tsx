import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import type Schema from "@/lib/directus-types";
import { PageSectionsBuilder } from "./Sections/SectionsBuilder";

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
    <div>
      <div>{navbarSlot}</div>
      <div>{sectionsSlot}</div>
      <div>{footerSlot}</div>
    </div>
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
  const pageItem = pageItems[0];

  return (
    <Page
      {...pageItem}
      navbarSlot={<NavbarBuilder />}
      sectionsSlot={<PageSectionsBuilder pageId={pageItem.id} />}
      footerSlot={<div>Footer</div>}
    />
  );
}
