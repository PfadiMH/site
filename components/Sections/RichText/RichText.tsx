import React from "react";
import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "@/components/Shared/WYSIWYGComponent";
import style from "./RichText.module.css";

export type RichTextProps = Prisma.RichTextGetPayload<{}>;

export function RichText({ content }: RichTextProps) {
  return <WYSIWYG style={style} content={content} />;
}

export interface RichTextBuilderProps {
  id: number;
}

export async function RichTextBuilder({ id }: RichTextBuilderProps) {
  const richText = await prisma.richText.findFirst({ where: { id } });
  if (richText === null) return null;
  return <RichText {...richText} />;
}
