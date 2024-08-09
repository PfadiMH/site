import prisma, { Prisma } from "@/lib/prisma";
import { ImageComponent } from "./Shared/ImageComponent";
import type { FileInfoProps } from "@/lib/getAssetInfo";
import { getFileInfo } from "@/lib/getAssetInfo";

export interface HeroBuilderProps {
  id: number;
}

export type HeroProps = Prisma.PagesGetPayload<{}> & {
  heroBackgroundFileInfo: FileInfoProps | null;
};

function Hero({ heroBackgroundFileInfo }: HeroProps) {
  return (
    <div className="w-full h-32">
      {heroBackgroundFileInfo && (
        <ImageComponent
          path={heroBackgroundFileInfo.path}
          title={
            heroBackgroundFileInfo.title ||
            heroBackgroundFileInfo.filenameDisk ||
            "image"
          }
        />
      )}
    </div>
  );
}

export async function HeroBuilder({ id }: HeroBuilderProps) {
  const hero = await prisma.pages.findFirst({
    where: { id },
  });

  const heroBackgroundFileInfo =
    hero?.heroBackground && (await getFileInfo(hero.heroBackground));

  return <Hero {...hero} heroBackgroundFileInfo={heroBackgroundFileInfo} />;
}
