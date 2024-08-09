import prisma from "@/lib/prisma";
import { ImageTextColumnsBuilder } from "./ImageTextColumns/ImageTextColumns";
import { RichTextBuilder } from "./RichText/RichText";
import { ActivityBuilder } from "./Activity/Activity";
import { FC } from "react";
import Section from "./Section";
import Sections from "./Sections";

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

interface SectionRef {
  collection: string;
  item: string;
  id: number;
}

interface SectionBuilderProps {
  section: SectionRef;
  index: number;
}

const builders: Record<string, FC<{ id: number }>> = {
  image_text_columns: ImageTextColumnsBuilder,
  rich_text: RichTextBuilder,
  activities: ActivityBuilder,
};

export async function SectionBuilder({ section, index }: SectionBuilderProps) {
  if (!builders[section.collection]) return null;

  const Builder = builders[section.collection];

  return (
    <Section
      index={index}
      contentSlot={<Builder id={Number(section.item)} />}
    />
  );
}

interface SectionsBuilderProps {
  sections: SectionRef[];
}

export async function SectionsBuilder({ sections }: SectionsBuilderProps) {
  return (
    <Sections
      sectionsSlot={sections.map((section, index) => (
        <SectionBuilder key={section.id} index={index} section={section} />
      ))}
    />
  );
}
