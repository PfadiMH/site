import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "../Sections/Shared/ImageComponent";

export interface CardImageBuilderProps {
  id: string;
}

export async function CardImageBuilder({ id }: CardImageBuilderProps) {
  const imageInfo = await getFileInfo(id);
  return (
    <ImageComponent
      path={imageInfo.path}
      altText={imageInfo.title || imageInfo.filenameDisk || "Image"}
    />
  );
}
