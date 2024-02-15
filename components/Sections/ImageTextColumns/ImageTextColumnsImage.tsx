import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "../Shared/ImageComponent";

export interface ImageTextColumnsImageBuilderProps {
  id: string;
}

export async function ImageTextColumnsImageBuilder({
  id,
}: ImageTextColumnsImageBuilderProps) {
  const imageInfo = await getFileInfo(id);
  return (
    <ImageComponent
      path={imageInfo.path}
      altText={imageInfo.title || imageInfo.filenameDisk || "image"}
    />
  );
}
