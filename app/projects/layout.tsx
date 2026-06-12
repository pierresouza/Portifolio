import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Projetos";
const description =
  "Portfólio de projetos de Pierre Souza: aplicações em React, Next.js, TypeScript e Node.js. Projetos de estudo e freelas com deploy e repositório.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/projects",
  keywords: [
    "projetos",
    "portfólio",
    "React",
    "Next.js",
    "TypeScript",
    "desenvolvimento web",
    "freelance",
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
