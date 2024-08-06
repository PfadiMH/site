import React from "react";
import { FooterColumnsBuilder } from "./FooterColumn";
import prisma, { Prisma } from "@/lib/prisma";
import Image from "next/image";
import { ImageComponent } from "../Shared/ImageComponent";
import { getAssetPath } from "@/lib/getAssetInfo";
import { WYSIWYG } from "../Shared/WYSIWYGComponent";
import style from "./Footer.module.css";

export type FooterProps = Prisma.FooterGetPayload<{}> & {
  footerColumnsSlot: React.ReactNode;
};

export async function Footer({ footerColumnsSlot }: FooterProps) {
  return (
    <footer>
      <div className="flex justify-center justify-around">
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
