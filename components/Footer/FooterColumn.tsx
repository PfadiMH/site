import prisma, { Prisma } from "@/lib/prisma";
import { WYSIWYG } from "../Shared/WYSIWYGComponent";
import type Schema from "@/lib/directus-types";

type FooterColumnProps = Prisma.FooterColumnsGetPayload<{}>;

export async function FooterColumn({ title, content }: FooterColumnProps) {
  return (
    <footer>
      <h2>{title}</h2>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </footer>
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
