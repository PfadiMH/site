import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { ImageTextColumnsImageBuilder } from "./ImageTextColumnsImage";

export type ImageTextColumnsProps = Prisma.ImageTextColumnsGetPayload<{}> & {
  leftImageSlot: React.ReactNode;
  rightImageSlot: React.ReactNode;
};

export async function ImageTextColumns({
  title,
  content,
  leftImageSlot,
  rightImageSlot,
}: ImageTextColumnsProps) {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {leftImageSlot}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {rightImageSlot}
    </section>
  );
}

interface ImageTextColumnsBuilderProps {
  id: number;
}

export async function ImageTextColumnsBuilder({
  id,
}: ImageTextColumnsBuilderProps) {
  const imageTextColumns = await prisma.imageTextColumns.findFirst({
    where: { id },
  });
  if (imageTextColumns === null) return null;

  return (
    <ImageTextColumns
      {...imageTextColumns}
      leftImageSlot={
        imageTextColumns.leftImage && (
          <ImageTextColumnsImageBuilder id={imageTextColumns.leftImage} />
        )
      }
      rightImageSlot={
        imageTextColumns.rightImage && (
          <ImageTextColumnsImageBuilder id={imageTextColumns.rightImage} />
        )
      }
    />
  );
}
