export const siteConfig = {
  name: "Pierre Souza",
  url: "https://pierresouza.dev.br",
  locale: "pt_BR",
  language: "pt-BR",
  title: "Pierre Souza | Front-End, Freelance e Produto Digital",
  description:
    "Desenvolvedor front-end focado em freelas, sites institucionais, landing pages e interfaces para empresas. Experiência com Next.js, React, TypeScript e SEO.",
  shortDescription:
    "Desenvolvedor front-end focado em freelas, sites institucionais, landing pages e interfaces para empresas.",
  jobTitle: "Desenvolvedor Front-End",
  location: {
    city: "São Paulo",
    country: "Brasil",
    countryCode: "BR",
  },
  email: "pierre.s3@hotmail.com",
  keywords: [
    "desenvolvedor front-end",
    "desenvolvedor web",
    "freelance front-end",
    "landing page",
    "site institucional",
    "desenvolvedor para empresas",
    "contratar desenvolvedor",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "portfólio de desenvolvedor",
    "SEO",
    "UX",
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
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export type SiteRoute = (typeof siteRoutes)[number]["path"];
