import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Experiência & Trajetória";
const description =
  "Trajetória profissional, atuação em startups, projetos comerciais e formação acadêmica de Pierre Souza em desenvolvimento web, Next.js e TypeScript.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/experience",
  keywords: [
    "experiência Pierre Souza",
    "carreira desenvolvedor front-end",
    "desenvolvedor Next.js",
    "freelancer web São Paulo",
    "formação em TI",
  ],
});

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        path="/experience"
        title={`${title} | Pierre Souza`}
        description={description}
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Experiência", path: "/experience" },
        ]}
      />
      {children}
    </>
  );
}
