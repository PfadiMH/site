import { Prisma } from "@prisma/client";
import { WYSIWYG } from "../Shared/WYSIWYGComponent";
import style from "./FooterColumn.module.css";

type FooterColumnProps = Prisma.FooterColumnsGetPayload<{}>;

export async function FooterColumn({ title, content }: FooterColumnProps) {
  return (
    <div>
      <h2 className="pb-2">{title}</h2>
      {content && <WYSIWYG content={content} style={style} />}
    </div>
  );
}
