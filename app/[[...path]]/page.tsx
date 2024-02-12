import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { PageBuilder } from "@/components/Page";

interface Props {
  params: {
    path?: string[];
  };
}

function getPath(pathArray?: string[]) {
  return "/" + (pathArray !== undefined ? pathArray.join("/") : "");
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
  return <PageBuilder path={getPath(pathArray)} />;
}
