import prisma from "@/lib/prisma";

export interface HeroBuilderProps {
  id: number;
}

export type HeroProps {
  id: number;
}

function Hero() {
  return <div className="w-full"></div>;
}

export async function HeroBuilder({ id }: HeroBuilderProps) {
  const hero = await prisma.pages.findFirst({
    where: { id },
  });

  return <Hero />;
}
