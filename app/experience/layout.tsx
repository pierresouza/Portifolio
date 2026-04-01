import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência Profissional - Pierre Souza | Desenvolvedor",
  description:
    "Veja minha experiência profissional, educação, certificações e trajetória como desenvolvedor Full Stack.",
  keywords: [
    "experiência",
    "carreira",
    "educação",
    "certificações",
    "desenvolvedor",
    "profissional",
  ],
  openGraph: {
    title: "Experiência Profissional - Pierre Souza | Desenvolvedor",
    description:
      "Veja minha experiência profissional e educação no desenvolvimento web.",
    type: "website",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
