import { notFound } from "next/navigation";
import prisma, { Prisma } from "@/lib/prisma";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import { GroupSectionsBuilder } from "./Sections/SectionsBuilder";

export type PageProps = Prisma.GroupsGetPayload<{}> & {
  navbarSlot: React.ReactNode;
  sectionsSlot: React.ReactNode;
  footerSlot: React.ReactNode;
};

export async function Group({
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

export interface GroupBuilderProps {
  id: number;
}

export async function GroupBuilder({ id }: GroupBuilderProps) {
  const group = await prisma.groups.findFirst({
    where: {
      id,
    },
  });

  if (group === null) return null;

  return (
    <Group
      {...group}
      navbarSlot={<NavbarBuilder />}
      sectionsSlot={<GroupSectionsBuilder groupId={group.id} />}
      footerSlot={<div>Footer</div>}
    />
  );
}
