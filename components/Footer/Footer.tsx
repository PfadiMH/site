import React from "react";
import { FooterColumnsBuilder } from "./FooterColumn";
import prisma, { Prisma } from "@/lib/prisma";

export type FooterProps = Prisma.FooterGetPayload<{}> & {
  footerColumnsSlot: React.ReactNode;
};

export async function Footer({
  logo,
  content,
  footerColumnsSlot,
}: FooterProps) {
  return (
    <footer>
      <div>Footer</div>
      <div className="grid grid-cols-2 gap-4">{footerColumnsSlot}</div>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </footer>
  );
}

export async function FooterBuilder() {
  let footer = await prisma.footer.findFirst();
  if (footer === null) return null;
  return (
    <Footer
      {...footer}
      footerColumnsSlot={
        <FooterColumnsBuilder id={footer.id} key={footer.id} />
      }
    />
  );
}
