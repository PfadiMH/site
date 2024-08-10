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
      <div className='grid grid-rows-1 md:grid-cols-2 gap-4 p-4'>
        {title && (
          <h1 className='md:col-span-2 p-4 bg-accent rounded-lg'>{title}</h1>
        )}
        {description && (
          <div
            className={`md:row-span-${
              endLocation ? 4 : 3
            } p-4 bg-accent rounded-lg`}
          >
            <WYSIWYG style={style} content={description} />
          </div>
        )}
        {startTime && (
          <div className='p-4 bg-accent rounded-lg'>
            <h3>Start Time</h3>
            <p>{startTime.toDateString()}</p>
          </div>
        )}
        {startLocation && (
          <p className='p-4 h-[200px] bg-accent rounded-lg'>{startLocation}</p>
        )}
        {endTime && (
          <div className='p-4 bg-accent rounded-lg'>
            <h3>End Time</h3>
            <p>{endTime.toDateString()}</p>
          </div>
        )}
        {endLocation && (
          <p className='p-4 h-[200px] bg-accent rounded-lg'>{endLocation}</p>
        )}
      </div>
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
