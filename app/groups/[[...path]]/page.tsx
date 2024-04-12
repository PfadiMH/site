import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { PageBuilder } from "@/components/Page";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";
import { GroupsBuilder } from "@/components/groups";

interface Props {
  params: {
    path?: string[];
  };
}

function getPath(pathArray?: string[]) {
  return pathArray !== undefined ? pathArray.join("/") : "";
}

async function getId(pathArray?: string[]) {
  const path = getPath(pathArray);
  const groupsItem = await prisma.groups.findFirst({
    where: {
      path,
    },
  });

  if (groupsItem === null) return null;

  return groupsItem.id;
}

export async function generateMetadata({
  params: { path: pathArray },
}: Props): Promise<Metadata> {
  const path = getPath(pathArray);

  const groupsItem = await prisma.groups.findFirst({
    where: {
      path,
    },
  });

  if (groupsItem === null) return {};

  return {
    title: groupsItem.title,
  };
}

export default async function NextPage({ params: { path: pathArray } }: Props) {
  const groupsId = await getId(pathArray);
  if (groupsId === null) return null;
  return <GroupsBuilder id={groupsId} />;
}
