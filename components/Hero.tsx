import React from "react";

export interface HeroProps {
  heroTitle: string;
  heroBackground: string | null;
}

export function Hero({ heroTitle, heroBackground }: HeroProps) {
  return (
    <div>
      <h1>{heroTitle}</h1>
    </div>
  );
}
