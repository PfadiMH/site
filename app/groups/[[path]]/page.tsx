import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { PageBuilder } from "@/components/Page";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";
import { GroupBuilder } from "@/components/Group";

interface Props {
  params: {
    path?: string;
  };
}

async function getId(pathName?: string) {
  const groupsItem = await prisma.groups.findFirst({
    where: {
      pathName,
    },
  });

  if (groupsItem === null) return null;

  return groupsItem.id;
}

export async function generateMetadata({
  params: { path },
}: Props): Promise<Metadata> {
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

export default async function NextPage({ params: { path: pathName } }: Props) {
  const groupsId = await getId(pathName);
  if (groupsId === null) return null;
  return <GroupBuilder id={groupsId} />;
}
