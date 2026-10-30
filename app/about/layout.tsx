import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Sobre Pierre Souza";
const description =
  "Conheça Pierre Souza: desenvolvedor front-end e especialista em criação de sites e landing pages em São Paulo, atuando com Next.js, React, TypeScript e SEO.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  keywords: [
    "sobre Pierre Souza",
    "desenvolvedor front-end São Paulo",
    "especialista em criação de sites",
    "programador React Next.js",
    "freelancer web",
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
