"use client";

import type { LocationProps } from "../Location/LocationBuilder";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Location({ coordinates }: LocationProps) {
  const center: google.maps.LatLngLiteral = {
    lat: parseFloat(JSON.stringify((coordinates as any)["coordinates"][0])),
    lng: parseFloat(JSON.stringify((coordinates as any)["coordinates"][1])),
  };

  return (
    <>
      {coordinates && (
        <APIProvider apiKey={"AIzaSyBxF48DO6GpNH2yrM0XpzwjIZH7HoQQyXU"}>
          {center && (
            <Map
              mapTypeControl
              defaultCenter={center}
              defaultZoom={3}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <Marker position={center} />
            </Map>
          )}
        </APIProvider>
      )}
    </>
  );
}
