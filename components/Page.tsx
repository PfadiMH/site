import { notFound } from "next/navigation";
import prisma, { Prisma } from "@/lib/prisma";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import { FooterBuilder } from "./Footer/Footer";
import { PageSectionsBuilder } from "./Sections/SectionsBuilder";

export type PageProps = Prisma.PagesGetPayload<{}> & {
  sectionsSlot: React.ReactNode;
};

export async function Page({ sectionsSlot }: PageProps) {
  return (
    <main className="relative">
      <div>{sectionsSlot}</div>
    </main>
  );
}

export interface PageBuilderProps {
  id: number;
}

export async function PageBuilder({ id }: PageBuilderProps) {
  const page = await prisma.pages.findFirst({
    where: {
      id,
    },
  });

  if (page === null) return null;

  return (
    <Page {...page} sectionsSlot={<PageSectionsBuilder pageId={page.id} />} />
  );
}
