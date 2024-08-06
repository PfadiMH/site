import prisma from "@/lib/prisma";
import { ImageTextColumnsBuilder } from "./ImageTextColumns/ImageTextColumns";
import { RichTextBuilder } from "./RichText/RichText";
import { ActivityBuilder } from "./Activity/Activity";
import { ThemeProvider } from "@/lib/ThemeContext";

interface PageSectionsBuilderProps {
  pageId: number;
}

export async function PageSectionsBuilder({
  pageId: pagesId,
}: PageSectionsBuilderProps) {
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

interface GroupSectionsBuilderProps {
  groupId: number;
}

export async function GroupSectionsBuilder({
  groupId: groupsId,
}: GroupSectionsBuilderProps) {
  const pageSectionsItems = await prisma.groupsSections.findMany({
    orderBy: { sort: "asc" },
    where: { groupsId },
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
  return (
    <div>
      {sections.map((section, i) => {
        let sectionBuilder;
        switch (section.collection) {
          case "image_text_columns":
            sectionBuilder = (
              <ImageTextColumnsBuilder
                key={section.id}
                id={Number(section.item)}
              />
            );
            break;
          case "rich_text":
            sectionBuilder = (
              <RichTextBuilder key={section.id} id={Number(section.item)} />
            );
            break;
          case "activities":
            sectionBuilder = (
              <ActivityBuilder key={section.id} id={Number(section.item)} />
            );
            break;
          default:
            sectionBuilder = (
              <div title={JSON.stringify(section, null, 2)}>
                Unknown collection
              </div>
            );
        }

        const theme = i % 2 === 0 ? "mud" : "sun";
        return (
          <div key={section.id} className={`${theme}-theme`}>
            <ThemeProvider key={section.id} theme={theme}>
              {sectionBuilder}
            </ThemeProvider>
          </div>
        );
      })}
    </div>
  );
}
