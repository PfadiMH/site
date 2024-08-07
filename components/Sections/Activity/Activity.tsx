import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./Activity.module.css";
import { LocationBuilder } from "@/components/Location/LocationBuilder";

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
    <section>
      {title && <h1>{title}</h1>}
      {startTime && <p>{startTime.toDateString()}</p>}
      {startLocation && (
        <div className='p-8 h-1/3'>
          <div className='rounded-lg overflow-hidden h-full'>
            <LocationBuilder id={startLocation}></LocationBuilder>
          </div>
        </div>
      )}
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
