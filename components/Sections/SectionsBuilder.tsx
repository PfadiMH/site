import prisma from "@/lib/prisma";

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
      default:
        return (
          <div title={JSON.stringify(section, null, 2)}>Unknown collection</div>
        );
    }
  });
}
