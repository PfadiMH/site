import { notFound } from "next/navigation";
import prisma, { Prisma } from "@/lib/prisma";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import { PageSectionsBuilder } from "./Sections/SectionsBuilder";

export type PageProps = Prisma.GroupsGetPayload<{}> & {
  navbarSlot: React.ReactNode;
  sectionsSlot: React.ReactNode;
  footerSlot: React.ReactNode;
};

export async function Groups({
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

export async function GroupsBuilder({ id }: PageBuilderProps) {
  const groups = await prisma.groups.findFirst({
    where: {
      id,
    },
  });

  if (groups === null) return notFound();

  return (
    <Groups
      {...groups}
      navbarSlot={<NavbarBuilder />}
      sectionsSlot={<PageSectionsBuilder pagesId={groups.id} />}
      footerSlot={<div>Footer</div>}
    />
  );
}
