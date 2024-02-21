import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "@/components/Shared/ImageComponent";

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
      title={imageInfo.title || imageInfo.filenameDisk || "image"}
    />
  );
}
