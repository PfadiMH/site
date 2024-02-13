import prisma from "@/lib/prisma";
import { ImageTextColumnsBuilder } from "./ImageTextColumns";
import { RichTextBuilder } from "./RichText";
interface PageSectionsBuilder {
  pagesId: number;
}

export async function PageSectionsBuilder({ pagesId }: PageSectionsBuilder) {
  const pageSectionsItems = await prisma.pagesSections.findMany({
    orderBy: { sort: "asc" },
    where: { pagesId: pagesId },
  });
  return (
    <SectionsBuilder
      sections={pageSectionsItems.map(({ collection, item, id }) => ({
        collection: String(collection),
        item: String(item),
        id: id,
      }))}
    />
  );
}

interface SectionsBuilderProps {
  sections: { collection: string; item: string; id: number }[];
}

export async function SectionsBuilder({ sections }: SectionsBuilderProps) {
  return (
    <div>
      {sections.map((section, index) => {
        switch (section.collection) {
          /*      
Example:
     case "grid_cards":
            return <GridCardsBuilder key={section.id} id={section.item} />; 
            */

          case "image_text_columns":
            return (
              <ImageTextColumnsBuilder
                key={section.id}
                id={Number(section.item)}
              />
            );

          case "rich_text":
            return (
              <RichTextBuilder key={section.id} id={Number(section.item)} />
            );

          default:
            return (
              <div title={JSON.stringify(section, null, 2)}>
                Unknown collection
              </div>
            );
        }
      })}
    </div>
  );
}
