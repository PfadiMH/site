import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "../Shared/WYSIWYGComponent";
import style from "./FooterColumn.module.css";

type FooterColumnProps = Prisma.FooterColumnsGetPayload<{}>;

export async function FooterColumn({ title, content }: FooterColumnProps) {
  return (
    <div>
      <h2>{title}</h2>
      {content && <WYSIWYG content={content} style={style} />}
    </div>
  );
}

interface FooterColumnBuilderProps {
  id: number;
}

export async function FooterColumnsBuilder({ id }: FooterColumnBuilderProps) {
  const footerColumns = await prisma.footerColumns.findMany({
    where: { fkFooter: id },
  });

  return footerColumns.map((footerColumn) => (
    <FooterColumn {...footerColumn} />
  ));
}
