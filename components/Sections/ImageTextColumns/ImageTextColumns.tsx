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
      <div className='grid grid-cols-1 lg:grid-cols-3 p-4 gap-4'>
        {leftImageInfo && (
          <div className='h-[30vh] lg:h-auto relative overflow-hidden rounded-lg'>
            <ImageComponent
              path={leftImageInfo.path}
              title={leftImageInfo.title || ""}
            />
          </div>
        )}
        <div className=''>
          {content && (
            <div className='overflow-hidden bg-primary rounded-lg p-4'>
              <WYSIWYG content={content} style={style}></WYSIWYG>
            </div>
          )}
        </div>
        {rightImageInfo && (
          <div className='p-4 h-[30vh] lg:h-auto relative overflow-hidden rounded-lg '>
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
