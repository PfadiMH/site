import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./Activity.module.css";

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
    <section className='bg-background'>
      {title && <h1>{title}</h1>}
      {startTime && <p>{startTime.toDateString()}</p>}
      {startLocation && <p>{startLocation}</p>}
      {endLocation && <p>{endLocation}</p>}
      {endTime && <p>{endTime.toDateString()}</p>}
      {description && <WYSIWYG style={style} content={description} />}
    </section>
  );
}

type ActivityBuilderProps = {
  id: number;
};

export async function ActivityBuilder({ id }: ActivityBuilderProps) {
  const activity = await prisma.activities.findFirst({
    where: { id },
  });
  if (activity === null) return null;

  return <Activity {...activity} />;
}
