import { LocationComponentBuilder } from "@/components/Shared/Location/LocationComponentBuilder";
import { Prisma } from "@prisma/client";

export type LocationProps = Prisma.LocationsGetPayload<{}> & {
  locationSlot: React.ReactNode;
};

export async function Location({ title, locationSlot }: LocationProps) {
  return (
    <section>
      {title && <h1>{title}</h1>}
      <div>{locationSlot}</div>
    </section>
  );
}

export async function LocationBuilder() {
  const location = await prisma.locations.findFirst();
  if (location == null) return null;
  return (
    <Location
      {...location}
      locationSlot={<LocationComponentBuilder id={location.id} />}
    />
  );
}
