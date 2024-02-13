import prisma from "@/lib/prisma";
import { env } from "process";

export async function getAssetPath(id: string) {
  const directusFileItem = await prisma.directusFiles.findFirst({
    where: { id },
  });
  if (directusFileItem === null) throw new Error("No directusFilesItem found");
  return (
    env.DIRECTUS_URL +
    "assets/" +
    directusFileItem.id +
    "/" +
    directusFileItem.filenameDownload
  );
}

export interface GetImageInfo {
  path: string;
  id: string;
  filename: string;
}

export async function getImageInfo(id: string) {
  if (id === "") throw new Error("No id found");
  const directusImagesItem = await prisma.directusFiles.findFirst({
    where: { id },
    select: { id: true, filenameDownload: true },
  });
  if (directusImagesItem === null)
    throw new Error("No directusImagesItem found");
  return {
    path:
      env.DIRECTUS_URL +
      "assets/" +
      directusImagesItem.id +
      "/" +
      directusImagesItem.filenameDownload,
    id: directusImagesItem.id,
    filename: directusImagesItem.filenameDownload,
  };
}
