import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "../Shared/WYSIWYGComponent";
import style from "./FooterColumn.module.css";

type FooterColumnProps = Prisma.FooterColumnsGetPayload<{}>;

export async function FooterColumn({ title, content }: FooterColumnProps) {
  return (
    <div className="">
      <h2>{title}</h2>
      {content && <WYSIWYG content={content} style={style} />}
    </div>
  );
}

interface FooterColumnsBuilderProps {
  id: number;
}

export async function FooterColumnsBuilder({ id }: FooterColumnsBuilderProps) {
  const footerColumns = await prisma.footerColumns.findMany({
    where: { fkFooter: id },
  });

  return footerColumns.map((footerColumn) => (
    <FooterColumn {...footerColumn} key={footerColumn.id} />
  ));
}
