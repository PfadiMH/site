import React from "react";
import { readSingleton } from "@directus/sdk";
import directus from "@/lib/directus";
import { FooterColumnBuilder } from "./FooterColumn";
import type Schema from "@/lib/directus-types";

export type FooterProps = Schema.Footer & {
  footerColumnsSlot: React.ReactNode;
};

export async function Footer({ content, footerColumnsSlot }: FooterProps) {
  return (
    <footer>
      <div>Footer</div>
      <div className="grid grid-cols-2 gap-4">{footerColumnsSlot}</div>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </footer>
  );
}

export async function FooterBuilder() {
  const footerItem = await directus.request(
    readSingleton("footer", {
      fields: ["*"],
    })
  );

  return (
    <Footer
      {...footerItem}
      footerColumnsSlot={footerItem.columns.map((columnId) => (
        <FooterColumnBuilder key={columnId} id={columnId} />
      ))}
    />
  );
}
