import prisma from "@/lib/prisma";
import env from "@/lib/env";

export async function getAssetPath(id: string) {
  const directusFile = await prisma.directusFiles.findFirst({
    where: { id },
  });
  if (directusFile === null) throw new Error("No directusFile found");
  return `${env.DIRECTUS_URL}assets/${directusFile.id}/${directusFile.filenameDownload}`;
}

export async function getFileInfo(id: string) {
  const directusFile = await prisma.directusFiles.findFirst({
    where: { id },
  });
  if (directusFile === null) throw new Error("No directusFile found");
  return {
    path: await getAssetPath(directusFile.id),
    ...directusFile,
  };
}
