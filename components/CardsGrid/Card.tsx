import React from "react";
import prisma from "@/lib/prisma";

export interface CardProps {
  title: string | null;
  content: string | null;
}

export function Card({ title, content }: CardProps) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
}

interface CardBuilderProps {
  fkCardGrids: number;
}

export async function CardBuilder({ fkCardGrids }: CardBuilderProps) {
  const card = await prisma.cards.findFirst({
    where: {
      fkCardGrids,
    },
  });

  if (card === null) return null;

  return <Card title={card.title} content={card.content} />;
}
