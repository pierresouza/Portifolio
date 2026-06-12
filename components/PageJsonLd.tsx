import JsonLd from "@/components/JsonLd";
import {
  buildSchemaGraph,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/seo/json-ld";

type PageJsonLdProps = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
};

export default function PageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
}: PageJsonLdProps) {
  const data = buildSchemaGraph([
    getWebPageSchema({ path, title, description }),
    getBreadcrumbSchema(breadcrumbs),
  ]);

  return <JsonLd data={data} />;
}
