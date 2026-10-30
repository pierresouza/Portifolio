export const siteConfig = {
  name: "Pierre Souza",
  url: "https://pierresouza.dev.br",
  locale: "pt_BR",
  language: "pt-BR",
  title: "Pierre Souza | Criação de Sites, Landing Pages e Front-End em São Paulo",
  description:
    "Criação de sites profissionais, landing pages de alta conversão e desenvolvimento web para empresas. Páginas ultra-rápidas, modernas e otimizadas para o Google.",
  shortDescription:
    "Criação de sites profissionais, landing pages de alta conversão e soluções web sob medida para empresas em São Paulo.",
  jobTitle: "Desenvolvedor Front-End & Especialista em Criação de Sites",
  location: {
    city: "São Paulo",
    region: "SP",
    country: "Brasil",
    countryCode: "BR",
  },
  email: "pierre.s3@hotmail.com",
  keywords: [
    "criação de sites",
    "criação de landing page",
    "desenvolvedor de sites são paulo",
    "desenvolvedor landing page",
    "criar site para empresa",
    "site institucional",
    "desenvolvedor front-end freelancer",
    "contratar desenvolvedor de sites",
    "reformulação de sites",
    "desenvolvedor web freelancer são paulo",
    "landing page alta conversão",
    "otimização de sites seo",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "São Paulo",
  ],
  author: {
    name: "Pierre Souza",
    url: "https://pierresouza.dev.br",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/pierre-souza/",
    github: "https://github.com/pierresouza",
    whatsapp: "https://wa.me/5511975310001",
  },
  googleSiteVerification: "HPUM3_16vhQ3HIMDB60TXf8P1hR6zZyBExGrCN7Fh88",
  datePublished: "2024-01-01",
} as const;

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/certificates", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export type SiteRoute = (typeof siteRoutes)[number]["path"];
