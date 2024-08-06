"use client";

import React, { useEffect, useRef } from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { Loader } from "@googlemaps/js-api-loader";

export type LocationProps = Prisma.LocationsGetPayload<{}> & {};

export async function Location({ coordinates }: LocationProps) {
  return (
    <section>
      {coordinates && <h1>{JSON.stringify(coordinates["coordinates"][0])}</h1>}
    </section>
  );
}

type LocationBuilderProps = {
  id: number;
};

export async function LocationBuilder({ id }: LocationBuilderProps) {
  const location = await prisma.locations.findFirst({
    where: { id },
  });
  if (location === null) return null;
  2;
  return <Location {...location} />;
}
