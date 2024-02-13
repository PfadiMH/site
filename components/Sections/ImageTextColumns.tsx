import { getImageInfo } from "@/lib/getAssetInfo";
import prisma, { Prisma } from "@/lib/prisma";
import Image from "next/image";
import React from "react";

// ToDo: It crashes when the leftImage or rightImage is null

export type ImageTextColumnsProps = Prisma.ImageTextColumnsGetPayload<{}>;

export async function ImageTextColumns({
  title,
  content,
  leftImage,
  rightImage,
}: ImageTextColumnsProps) {
  const infoLeft = await getImageInfo(String(leftImage))
    .then((res) => res)
    .catch((err) => null);
  const infoRight = await getImageInfo(String(rightImage))
    .then((res) => res)
    .catch((err) => null);
  return (
    <div>
      {title && <h1>{title}</h1>}
      {infoLeft && (
        <Image
          src={infoLeft.path}
          alt={infoLeft.filename}
          width={100}
          height={100}
        />
      )}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {infoRight && (
        <Image
          src={infoRight.path}
          alt={infoRight.filename}
          width={100}
          height={100}
        />
      )}
    </div>
  );
}

interface ImageTextColumnsBuilderProps {
  id: number;
}

export async function ImageTextColumnsBuilder({
  id,
}: ImageTextColumnsBuilderProps) {
  const imageTextColumnsItem = await prisma.imageTextColumns.findFirst({
    where: { id: id },
  });
  if (imageTextColumnsItem === null) return null;

  return <ImageTextColumns {...imageTextColumnsItem} />;
}
