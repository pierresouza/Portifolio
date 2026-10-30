export interface CertificateItem {
  id: string;
  translationKey: string;
  title: string;
  issuer: string;
  date: string;
  workload: string;
  image: string;
  fileUrl: string;
  fileType: "pdf" | "image";
  tags: string[];
}

export const certificatesMock: CertificateItem[] = [
  {
    id: "fiap-summit",
    translationKey: "fiapSummit",
    title: "FIAP Connect Summit 2026 – Orquestração Humano-IA no Trabalho",
    issuer: "FIAP",
    date: "22/08/2026",
    workload: "3h",
    image: "/certificados/certificado fiap summit.jpg",
    fileUrl: "/certificados/certificado fiap summit.jpg",
    fileType: "image",
    tags: ["Inteligência Artificial", "FIAP", "Inovação"],
  },
  {
    id: "buildwithai-usp",
    translationKey: "buildwithaiUsp",
    title: "Build With AI Colab DASI USP",
    issuer: "Google Developer Groups (GDG Cloud SP) & DASI USP",
    date: "19/06/2026",
    workload: "3.5h",
    image: "/certificados/certificado-build-withai.png",
    fileUrl: "/certificados/certificado-build-withai.pdf",
    fileType: "pdf",
    tags: ["Inteligência Artificial", "GDG Cloud SP", "USP", "Google Cloud"],
  },
  {
    id: "buildwithai-esquenta",
    translationKey: "buildwithaiEsquenta",
    title: "Esquenta Build With AI",
    issuer: "Google Developer Groups (GDG Cloud SP)",
    date: "09/05/2026",
    workload: "6h",
    image: "/certificados/certificado buildwithai.png",
    fileUrl: "/certificados/certificado buildwithai.pdf",
    fileType: "pdf",
    tags: ["Inteligência Artificial", "GDG Cloud SP", "Google Cloud"],
  },
  {
    id: "forum-abeinfo",
    translationKey: "forumAbeinfo",
    title: "Fórum Abeinfo 2026",
    issuer: "IIMA & ABEINFO",
    date: "05/05/2026",
    workload: "7h",
    image: "/certificados/certificado abeinfo.png",
    fileUrl: "/certificados/certificado abeinfo.pdf",
    fileType: "pdf",
    tags: ["Gestão da Informação", "Inteligência Artificial", "LGPD", "Governança"],
  },
];
