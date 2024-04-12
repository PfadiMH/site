import React from "react";
import { FooterColumnsBuilder } from "./FooterColumn";
import prisma, { Prisma } from "@/lib/prisma";
import Image from "next/image";
import { ImageComponent } from "../Shared/ImageComponent";
import { getAssetPath } from "@/lib/getAssetInfo";

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
      <div className="grid grid-cols-2 gap-4">{footerColumnsSlot}</div>
      {logo && <ImageComponent path={await getAssetPath(logo)} title="Logo" />}
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
