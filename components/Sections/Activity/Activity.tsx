import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./Activity.module.css";
import { LocationComponentBuilder } from "@/components/Shared/Location/LocationComponentBuilder";

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
        <div className='p-4'>
          <div className='h-96 w-svh rounded-lg overflow-hidden p-4 bg-accent md:w-96 md:h-44'>
            <LocationComponentBuilder id={startLocation} />
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
