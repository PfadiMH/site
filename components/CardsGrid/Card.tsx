import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { CardImageBuilder } from "./CardImage";

export interface CardProps {
  title: string | null;
  content: string | null;
  backgroundSlot: React.ReactNode;
}

export function Card({ title, content, backgroundSlot }: CardProps) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {backgroundSlot}
    </div>
  );
}

type CardBuilderProps = Prisma.CardsGetPayload<{}>;

export async function CardBuilder({
  title,
  content,
  background,
}: CardBuilderProps) {
  return (
    <Card
      title={title}
      content={content}
      backgroundSlot={<CardImageBuilder id={String(background)} />}
    />
  );
}
