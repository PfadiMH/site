import prisma from "@/lib/prisma";
import { ImageTextColumnsBuilder } from "./ImageTextColumns/ImageTextColumns";
import { RichTextBuilder } from "./RichText/RichText";
import { ActivitiesBuilder } from "./Activities/Activities";

interface PageSectionsBuilder {
  pagesId: number;
}

export async function PageSectionsBuilder({ pagesId }: PageSectionsBuilder) {
  const pageSectionsItems = await prisma.pagesSections.findMany({
    orderBy: { sort: "asc" },
    where: { pagesId },
  });
  return (
    <SectionsBuilder
      sections={pageSectionsItems.map(({ collection, item, id }) => ({
        collection: String(collection),
        item: String(item),
        id,
      }))}
    />
  );
}

interface SectionsBuilderProps {
  sections: { collection: string; item: string; id: number }[];
}

export async function SectionsBuilder({ sections }: SectionsBuilderProps) {
  return sections.map((section) => {
    switch (section.collection) {
      case "image_text_columns":
        return (
          <ImageTextColumnsBuilder key={section.id} id={Number(section.item)} />
        );

      case "rich_text":
        return <RichTextBuilder key={section.id} id={Number(section.item)} />;
      case "activities":
        return <ActivitiesBuilder key={section.id} id={Number(section.item)} />;

      default:
        return (
          <div title={JSON.stringify(section, null, 2)}>Unknown collection</div>
        );
    }
  });
}
