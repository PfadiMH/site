import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { PageBuilder } from "@/components/Page";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";

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
  const pageItem = await prisma.pages.findFirst({
    where: {
      path,
    },
  });

  if (pageItem === null) return null;

  return pageItem.id;
}

export async function generateMetadata({
  params: { path: pathArray },
}: Props): Promise<Metadata> {
  const path = getPath(pathArray);

  const pageItem = await prisma.pages.findFirst({
    where: {
      path,
    },
  });

  if (pageItem === null) return {};

  return {
    title: pageItem.title,
    description: pageItem.description,
  };
}

export default async function NextPage({ params: { path: pathArray } }: Props) {
  const pageId = await getId(pathArray);
  if (pageId === null) return null;
  return <PageBuilder id={pageId} />;
}
