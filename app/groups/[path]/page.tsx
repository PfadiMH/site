import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { GroupBuilder } from "@/components/Group";
import { notFound } from "next/navigation";

interface Props {
  params: {
    path: string;
  };
}

async function getId(pathName: string) {
  const groupsItem = await prisma.groups.findFirst({
    where: {
      pathName,
    },
  });

  if (groupsItem === null) return null;

  return groupsItem.id;
}

export async function generateMetadata({
  params: { path: pathName },
}: Props): Promise<Metadata> {
  const group = await prisma.groups.findFirst({
    where: {
      pathName,
    },
  });

  if (group === null) return {};

  return {
    title: group.title,
  };
}

export default async function NextPage({ params: { path: pathName } }: Props) {
  const groupId = await getId(pathName);
  if (groupId === null) return notFound();
  return <GroupBuilder id={groupId} />;
}
