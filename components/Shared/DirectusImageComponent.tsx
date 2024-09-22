import { FileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "./ImageComponent";

export function DirectusImageComponent({
  path,
  title,
  filenameDownload,
}: FileInfo) {
  return <ImageComponent path={path} title={title || filenameDownload} />;
}
