import React from "react";
import prisma from "@/lib/prisma";
import { Card } from "./Card";

export interface CardGridProps {
  title: string | null;
  description: string | null;
  CardSlot: React.ReactNode;
}

export function CardGrid({ title, description, CardSlot }: CardGridProps) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {CardSlot && <div>{CardSlot}</div>}
    </div>
  );
}

export interface CardGridBuilderProps {
  id: number;
}

export async function CardGridBuilder({ id }: CardGridBuilderProps) {
  const cardGrid = await prisma.cardGrids.findFirst({
    where: { id },
  });
  const cards = await prisma.cards.findMany({
    where: { fkCardGrids: id },
  });

  if (cardGrid === null) return null;

  return (
    <CardGrid
      title={cardGrid.title}
      description={cardGrid.description}
      CardSlot={cards.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
    />
  );
}
