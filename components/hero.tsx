import React from "react";
import { Prisma } from "@prisma/client";

export interface HeroProps {
  heroTitle: string;
}

export function Hero({ heroTitle }: HeroProps) {
  return (
    <div>
      <h1>{heroTitle}</h1>
    </div>
  );
}
