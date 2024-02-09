import { Metadata, ResolvingMetadata } from "next";
import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";
import { PageBuilder } from "@/components/Page";

interface Props {
  params: {
    path: string[];
  };
}

function getPath(pathArray: string[]) {
  return "/" + (pathArray !== undefined ? pathArray.join("/") : "");
}

export async function generateMetadata({
  params: { path: pathArray },
}: Props): Promise<Metadata> {
  const path = getPath(pathArray);

  const pageItems = await directus.request(
    readItems("page", {
      fields: ["*"],
      filter: {
        path: {
          _eq: path,
        },
      },
      limit: 1,
    })
  );

  if (pageItems.length === 0) {
    return {};
  }

  const pageItem = pageItems[0];

  return {
    title: pageItem.title,
    description: pageItem.description,
  };
}

export default async function NextPage({ params: { path: pathArray } }: Props) {
  return <PageBuilder path={getPath(pathArray)} />;
}
