import prisma, { Prisma } from "@/lib/prisma";
import { FooterColumn } from "./FooterColumn";

interface FooterColumnsBuilderProps {
  id: number;
}

export async function FooterColumnsBuilder({ id }: FooterColumnsBuilderProps) {
  const footerColumns = await prisma.footerColumns.findMany({
    where: { fkFooter: id },
  });
  return footerColumns.map((footerColumn) => (
    <FooterColumn {...footerColumn} />
  ));
}
