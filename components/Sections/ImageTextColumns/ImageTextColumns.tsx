import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { FileInfoProps, getAssetPath, getFileInfo } from "@/lib/getAssetInfo";
import { ImageComponent } from "@/components/Shared/ImageComponent";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./ImafeTextColumn.module.css";

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
    <section className='bg-background place-items-center'>
      {title && <h1>{title}</h1>}
      <div className='grid grid-rows-[auto_1fr_auto] md:grid-rows-[max-content] md:grid-cols-[auto_max-content_auto] gap-5'>
        {leftImageInfo && (
          <div className='relative w-full overflow-hidden rounded-lg'>
            <ImageComponent
              path={leftImageInfo.path}
              title={leftImageInfo.title || ""}
            />
          </div>
        )}
        <div className='overflow-hidden bg-accent h-[max-content] rounded-lg p-4'>
          {content && <WYSIWYG content={content} style={style}></WYSIWYG>}
        </div>
        {rightImageInfo && (
          <div className='relative w-full overflow-hidden rounded-lg '>
            <ImageComponent
              path={rightImageInfo.path}
              title={rightImageInfo.title || ""}
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
    <>
      <ImageTextColumns
        rightImageInfo={rightImageInfo}
        leftImageInfo={leftImageInfo}
        {...imageTextColumns}
      />
    </>
  );
}
