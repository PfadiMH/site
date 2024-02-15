import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { ImageTextColumnsImageBuilder } from "./ImageTextColumnsImage";

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
      {leftImageComponent}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {rightImageComponent}
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
    where: { id },
  });
  if (imageTextColumns === null) return null;

  return (
    <ImageTextColumns
      {...imageTextColumns}
      leftImageComponent={
        <ImageTextColumnsImageBuilder id={imageTextColumns.leftImage} />
      }
      rightImageComponent={
        <ImageTextColumnsImageBuilder id={imageTextColumns.rightImage} />
      }
    />
  );
}
