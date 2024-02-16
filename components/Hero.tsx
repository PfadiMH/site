import React from "react";

export interface HeroProps {
  heroTitle: string;
  backgroundSlot: React.ReactNode;
}

export function Hero({ heroTitle, backgroundSlot }: HeroProps) {
  return (
    <div>
      {<h1>{heroTitle}</h1>}
      {backgroundSlot}
    </div>
  );
}
