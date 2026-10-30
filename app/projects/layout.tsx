import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Projetos & Cases de Sites";
const description =
  "Portfólio de sites institucionais, landing pages de alta conversão e sistemas web desenvolvidos por Pierre Souza para empresas reais.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/projects",
  keywords: [
    "portfólio de sites",
    "cases de sites institucionais",
    "exemplos de landing pages",
    "criação de sites para empresas",
    "desenvolvedor React Next.js",
    "freelance front-end",
  ],
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        path="/projects"
        title={`${title} | Pierre Souza`}
        description={description}
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Projetos", path: "/projects" },
        ]}
      />
      {children}
    </>
  );
}
