import React from "react";
import prisma, { Prisma } from "@/lib/prisma";

export type RichTextProps = Prisma.RichTextGetPayload<{}>;

export function RichText({ content }: RichTextProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

interface RichTextBuilderProps {
  id: number;
}

export async function RichTextBuilder({ id }: RichTextBuilderProps) {
  const richText = await prisma.richText.findFirst({ where: { id: id } });
  if (richText === null) return null;
  return <RichText {...richText} />;
}
