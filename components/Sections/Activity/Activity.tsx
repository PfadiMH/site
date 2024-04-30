import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./Activities.module.css";

export type ActivityProps = Prisma.ActivitiesGetPayload<{}> & {};

export async function Activity({
  title,
  startTime,
  startLocation,
  endLocation,
  endTime,
  description,
}: ActivityProps) {
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

type ActivityBuilderProps = {
  id: number;
};

export async function ActivityBuilder({ id }: ActivityBuilderProps) {
  const activities = await prisma.activities.findFirst({
    where: { id },
  });
  if (activities === null) return null;

  return <Activity {...activities} />;
}
