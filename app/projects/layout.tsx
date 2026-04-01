import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos - Pierre Souza | Portfólio de Desenvolvedor",
  description:
    "Veja meus projetos profissionais e de estudo. Projetos em React, Next.js, TypeScript, Node.js e muito mais.",
  keywords: [
    "projetos",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "full stack",
    "desenvolvimento web",
  ],
  openGraph: {
    title: "Projetos - Pierre Souza | Portfólio de Desenvolvedor",
    description:
      "Veja meus projetos profissionais e de estudo com tecnologias modernas.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
