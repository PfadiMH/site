import { notFound } from "next/navigation";
import prisma, { Prisma } from "@/lib/prisma";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";

export type PageProps = Prisma.PagesGetPayload<{}> & {
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
  id: number;
}

export async function PageBuilder({ id }: PageBuilderProps) {
  const page = await prisma.pages.findFirst({
    where: {
      id,
    },
  });

  if (page === null) return notFound();

  return (
    <Page
      {...page}
      navbarSlot={<NavbarBuilder />}
      sectionsSlot={<PageSectionsBuilder pagesId={page.id} />}
      footerSlot={<div>Footer</div>}
    />
  );
}
