import React from "react";
import { Prisma } from "@prisma/client";

export type HeroProps = Prisma.PagesGetPayload<{}>;

export function Hero({ heroTitle }: HeroProps) {
  return (
    <div>
      <h1>{heroTitle}</h1>
    </div>
  );
}
