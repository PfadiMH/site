import React from "react";
import LocationComponent from "./LocationComponent";
import prisma, { Prisma } from "@/lib/prisma";

export type LocationProps = Prisma.LocationsGetPayload<{}> & {};

type LocationBuilderProps = {
  id: number;
};

export async function LocationComponentBuilder({ id }: LocationBuilderProps) {
  const location = await prisma.locations.findFirst({
    where: { id },
  });
  if (location === null) return null;

  return <LocationComponent {...location} />;
}
