import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
interface PageSectionsBuilder {
  pageId: number;
}

export async function PageSectionsBuilder({ pageId }: PageSectionsBuilder) {
  const pageSectionsItems = await directus.request(
    readItems("page_sections", {
      fields: ["*"],
      sort: "sort",
      filter: {
        page_id: {
          _eq: pageId,
        },
      },
    })
  );

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
