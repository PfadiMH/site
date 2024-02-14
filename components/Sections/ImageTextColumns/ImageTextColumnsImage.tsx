import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "../Shared/ImageComponent";

export interface ImageTextColumnsImageBuilderProps {
  id: string | null;
}

export async function ImageTextColumnsImageBuilder({
  id,
}: ImageTextColumnsImageBuilderProps) {
  if (id === null) return null;
  const imageInfo = await getFileInfo(id);
  return (
    <ImageComponent
      path={imageInfo.path}
      filenameDisk={imageInfo.filenameDisk || "image"}
    />
  );
}
