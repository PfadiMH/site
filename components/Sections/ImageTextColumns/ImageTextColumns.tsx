import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { FileInfoProps, getAssetPath, getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "@/components/Shared/ImageComponent";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./ImageTextColumns.module.css";

export type ImageTextColumnsProps = Prisma.ImageTextColumnsGetPayload<{}> & {
  rightImageInfo: FileInfoProps | null;
  leftImageInfo: FileInfoProps | null;
};

export async function ImageTextColumns({
  title,
  content,
  rightImageInfo,
  leftImageInfo,
}: ImageTextColumnsProps) {
  return (
    <section className="bg-background">
      {title && <h1>{title}</h1>}
      <div className="flex flex-col md:flex-row md:justify-center items-stretch gap-4 font-poppins">
        {leftImageInfo && (
          <div className={`rounded-lg overflow-hidden md:basis-[30%]`}>
            <ImageComponent
              path={leftImageInfo.path}
              title={leftImageInfo.title}
            />
          </div>
        )}
        <div className="bg-accent rounded-lg p-4 shrink min-w-0">
          {content && <WYSIWYG content={content} style={style} />}
        </div>
        {rightImageInfo && (
          <div className={`rounded-lg overflow-hidden md:basis-[30%]`}>
            <ImageComponent
              path={rightImageInfo.path}
              title={rightImageInfo.title}
            />
          </div>
        )}
      </div>
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

  const rightImageInfo = imageTextColumns.rightImage
    ? await getFileInfo(imageTextColumns.rightImage)
    : null;
  const leftImageInfo = imageTextColumns.leftImage
    ? await getFileInfo(imageTextColumns.leftImage)
    : null;

  return (
    <ImageTextColumns
      rightImageInfo={rightImageInfo}
      leftImageInfo={leftImageInfo}
      {...imageTextColumns}
    />
  );
}
