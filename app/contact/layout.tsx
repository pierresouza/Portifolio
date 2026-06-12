import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Contato";
const description =
  "Entre em contato com Pierre Souza para propostas de freelas, sites institucionais, landing pages e projetos front-end. Resposta em breve.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
  keywords: [
    "contato",
    "freelance",
    "contratar desenvolvedor",
    "orçamento",
    "proposta",
    "desenvolvedor front-end",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        path="/contact"
        title={`${title} | Pierre Souza`}
        description={description}
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
