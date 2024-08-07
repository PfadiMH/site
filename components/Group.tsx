import { notFound } from "next/navigation";
import prisma, { Prisma } from "@/lib/prisma";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import { GroupSectionsBuilder } from "./Sections/SectionsBuilder";

export type PageProps = Prisma.GroupsGetPayload<{}> & {
  sectionsSlot: React.ReactNode;
};

export async function Group({ sectionsSlot }: PageProps) {
  return (
    <main className="text-center">
      <div>{sectionsSlot}</div>
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
      sectionsSlot={<GroupSectionsBuilder groupId={group.id} />}
    />
  );
}
