import React from "react";
import { getFileInfo } from "@/lib/getAssetInfo";
import { ImageTextColumnsImageBuilder } from "./ImageTextColumnsImage";
import prisma, { Prisma } from "@/lib/prisma";

export type ImageTextColumnsProps = Prisma.ImageTextColumnsGetPayload<{}> & {
  leftImageComponent: React.ReactNode;
  rightImageComponent: React.ReactNode;
};

export async function ImageTextColumns({
  title,
  content,
  leftImage,
  rightImage,
  leftImageComponent,
  rightImageComponent,
}: ImageTextColumnsProps) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {leftImage && leftImageComponent}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {rightImage && rightImageComponent}
    </div>
  );
}

interface ImageTextColumnsBuilderProps {
  id: number;
}

export async function ImageTextColumnsBuilder({
  id,
}: ImageTextColumnsBuilderProps) {
  const imageTextColumns = await prisma.imageTextColumns.findFirst({
    where: { id: id },
  });
  if (imageTextColumns === null) return null;

  return (
    <ImageTextColumns
      {...imageTextColumns}
      leftImageComponent={
        <ImageTextColumnsImageBuilder id={String(imageTextColumns.leftImage)} />
      }
      rightImageComponent={
        <ImageTextColumnsImageBuilder
          id={String(imageTextColumns.rightImage)}
        />
      }
    />
  );
}
