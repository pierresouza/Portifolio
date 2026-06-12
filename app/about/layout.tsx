import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Sobre Mim";
const description =
  "Conheça Pierre Souza: desenvolvedor front-end em São Paulo, especializado em React, Next.js, TypeScript e interfaces acessíveis para empresas e freelas.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  keywords: [
    "sobre",
    "desenvolvedor front-end",
    "programador",
    "React",
    "Next.js",
    "habilidades",
    "experiência",
  ],
  openGraphType: "profile",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        path="/about"
        title={`${title} | Pierre Souza`}
        description={description}
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/about" },
        ]}
      />
      {children}
    </>
  );
}
