import prisma from "@/lib/prisma";
import env from "@/lib/env";

export async function getAssetPath(id: string) {
  const directusFile = await prisma.directusFiles.findFirst({
    where: { id },
  });
  if (directusFile === null) throw new Error("No directusFile found");
  return `${env.DIRECTUS_URL}assets/${directusFile.id}/${directusFile.filenameDownload}?access_token=${env.DIRECTUS_TOKEN}`;
}

export async function getFileInfo(id: string) {
  const directusFile = await prisma.directusFiles.findFirst({
    where: { id },
  });
  if (directusFile === null) throw new Error("No directusFile found");
  return {
    path: await getAssetPath(directusFile.id),
    blurDataURL: await getBlurURL(directusFile.id),
    ...directusFile,
  };
}

async function getBlurURL(id: string) {
  const path = await getAssetPath(id);
  return encodeImageAsBase64(`${path}&height=200&width=200&quality=25`);
}

async function encodeImageAsBase64(url: string) {
  const image = await fetch(url);
  const contentType = image.headers.get("Content-type");
  const imageBuffer = await image.arrayBuffer();

  return `data:${contentType};base64,${Buffer.from(imageBuffer).toString(
    "base64"
  )}`;
}
