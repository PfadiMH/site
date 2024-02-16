import { notFound } from "next/navigation";
import prisma, { Prisma } from "@/lib/prisma";
import React from "react";
import { NavbarBuilder } from "./Navbar/Navbar";
import { Hero } from "./Hero";
import { PageSectionsBuilder } from "./Sections/SectionsBuilder";
import { HeroImageBuilder } from "./HeroImage";

export type PageProps = Prisma.PagesGetPayload<{}> & {
  navbarSlot: React.ReactNode;
  sectionsSlot: React.ReactNode;
  footerSlot: React.ReactNode;
  heroBackgroundSlot: React.ReactNode;
};

export async function Page({
  navbarSlot,
  sectionsSlot,
  footerSlot,
  heroTitle,
  title,
  heroBackgroundSlot,
}: PageProps) {
  return (
    <main className="min-h-screen p-24">
      <div>{navbarSlot}</div>
      <Hero
        heroTitle={heroTitle || title}
        backgroundSlot={heroBackgroundSlot}
      />
      <div>{sectionsSlot}</div>
      <div>{footerSlot}</div>
    </main>
  );
}

export interface PageBuilderProps {
  path: string;
}

export async function PageBuilder({ path }: PageBuilderProps) {
  const page = await prisma.pages.findFirst({
    where: {
      path,
    },
  });

  if (page === null) return notFound();

  return (
    <Page
      {...page}
      heroBackgroundSlot={<HeroImageBuilder id={String(page.heroBackground)} />}
      navbarSlot={<NavbarBuilder />}
      sectionsSlot={<PageSectionsBuilder pagesId={page.id} />}
      footerSlot={<div>Footer</div>}
    />
  );
}
