import { readItem } from "@directus/sdk";
import directus from "@/lib/directus";
import type Schema from "@/lib/directus-types";

type FooterColumnProps = Schema.FooterColumn;

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

export async function FooterColumnBuilder({ id }: FooterColumnBuilderProps) {
  const footerColumnItem = await directus.request(
    readItem("footer_column", id, {
      fields: ["*"],
      sort: "sort",
    })
  );

  return <FooterColumn {...footerColumnItem} />;
}
