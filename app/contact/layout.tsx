import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Solicitar Orçamento & Contato";
const description =
  "Solicite um orçamento gratuito para criação de sites institucionais, landing pages de alta conversão ou projetos front-end com Pierre Souza.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
  keywords: [
    "orçamento criação de site",
    "contratar desenvolvedor de sites",
    "orçamento landing page",
    "contato Pierre Souza",
    "freelancer front-end São Paulo",
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
