import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "./Sections/Shared/ImageComponent";

export interface HeroImageBuilderProps {
  id: string;
}

export async function HeroImageBuilder({ id }: HeroImageBuilderProps) {
  const imageInfo = await getFileInfo(id);
  return (
    <ImageComponent
      path={imageInfo.path}
      title={imageInfo.title || imageInfo.filenameDisk || "image"}
    />
  );
}
