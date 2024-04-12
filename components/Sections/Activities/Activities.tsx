import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./Activities.module.css";

export type ActivitiesProps = Prisma.ActivitiesGetPayload<{}> & {};

export async function Activities({
  title,
  startTime,
  startLocation,
  endLocation,
  endTime,
  description,
}: ActivitiesProps) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {startTime && <p>{startTime.toDateString()}</p>}
      {startLocation && <p>{startLocation}</p>}
      {endLocation && <p>{endLocation}</p>}
      {endTime && <p>{endTime.toDateString()}</p>}
      {description && <WYSIWYG style={style} content={description} />}
    </div>
  );
}

type ActivitiesBuilderProps = {
  id: number;
};

export async function ActivitiesBuilder({ id }: ActivitiesBuilderProps) {
  const activities = await prisma.activities.findFirst({
    where: { id },
  });
  if (activities === null) return null;

  return <Activities {...activities} />;
}
