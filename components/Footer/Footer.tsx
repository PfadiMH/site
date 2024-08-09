import React from "react";
import { FooterColumnsBuilder } from "./FooterColumns";
import prisma, { Prisma } from "@/lib/prisma";

export type FooterProps = Prisma.FooterGetPayload<{}> & {
  footerColumnsSlot: React.ReactNode;
};

export async function Footer({ footerColumnsSlot }: FooterProps) {
  return (
    <footer>
      <div className="flex justify-around bg-current gap-5 flex-wrap lg:flex-nowrap">
        {footerColumnsSlot}
      </div>
    </footer>
  );
}

export async function FooterBuilder() {
  const footer = await prisma.footer.findFirst();
  if (footer === null) return null;
  return (
    <Footer
      {...footer}
      footerColumnsSlot={<FooterColumnsBuilder id={footer.id} />}
    />
  );
}
