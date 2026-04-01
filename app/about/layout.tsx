import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim - Pierre Souza | Desenvolvedor Full Stack",
  description:
    "Conheça minha jornada como desenvolvedor, minhas habilidades técnicas em React, Next.js, Node.js, e como posso ajudar seu projeto.",
  keywords: [
    "sobre",
    "desenvolvedor",
    "programador",
    "React",
    "Next.js",
    "Node.js",
    "skills",
    "experiência",
  ],
  openGraph: {
    title: "Sobre Mim - Pierre Souza | Desenvolvedor Full Stack",
    description:
      "Conheça minha jornada como desenvolvedor, minhas habilidades técnicas e experiência.",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
