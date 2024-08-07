import React from "react";
import Location from "../Shared/LocationComponent";
import prisma, { Prisma } from "@/lib/prisma";

export type LocationProps = Prisma.LocationsGetPayload<{}> & {};

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
