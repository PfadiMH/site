import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "../Shared/ImageComponent";

export async function ImageTextColumnsImageBuilder({ id }: { id: string }) {
  const imageInfo = await getFileInfo(id);
  return (
    <ImageComponent
      path={imageInfo.path}
      filenameDisk={imageInfo.filenameDisk || "image"}
    />
  );
}
