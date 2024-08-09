"use client";

import type { LocationProps } from "./LocationComponentBuilder";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function LocationComponent({ coordinates }: LocationProps) {
  const center: google.maps.LatLngLiteral = {
    lat: parseFloat(JSON.stringify((coordinates as any)["coordinates"][0])),
    lng: parseFloat(JSON.stringify((coordinates as any)["coordinates"][1])),
  };

  return (
    <>
      {center && (
        <APIProvider apiKey={"AIzaSyBxF48DO6GpNH2yrM0XpzwjIZH7HoQQyXU"}>
          {center && (
            <Map
              defaultCenter={center}
              defaultZoom={10}
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
