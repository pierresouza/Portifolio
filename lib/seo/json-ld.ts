import { siteConfig } from "./site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    image: {
      "@type": "ImageObject",
      inLanguage: siteConfig.language,
      url: `${siteConfig.url}/profile_photo.jpeg`,
      caption: siteConfig.author.name,
    },
    description: siteConfig.description,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
    url: siteConfig.url,
    jobTitle: siteConfig.jobTitle,
    email: siteConfig.email,
    telephone: "+5511975310001",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: "SP",
      addressCountry: siteConfig.location.countryCode,
    },
    knowsAbout: [
      "Criação de Sites",
      "Landing Pages",
      "Sites Institucionais",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SEO",
      "UX/UI",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
    inLanguage: siteConfig.language,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/projects?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getWebPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    datePublished: siteConfig.datePublished,
    inLanguage: siteConfig.language,
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.author.name} - Criação de Sites e Landing Pages`,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile_photo.jpeg`,
    telephone: "+5511975310001",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: "SP",
      addressCountry: siteConfig.location.countryCode,
    },
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.location.city,
      },
      {
        "@type": "Country",
        name: siteConfig.location.country,
      },
    ],
    provider: {
      "@id": `${siteConfig.url}/#person`,
    },
    serviceType: [
      "Criação de Sites",
      "Criação de Landing Pages",
      "Sites Institucionais",
      "Desenvolvimento Front-End",
      "Otimização de SEO e Performance",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Desenvolvimento Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criação de Landing Pages de Alta Conversão",
            description:
              "Landing pages modernas, responsivas e focadas em conversão de leads e vendas para tráfego pago e orgânico.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento de Sites Institucionais",
            description:
              "Sites empresariais completos com arquitetura moderna, autoridade de marca e otimização para celular.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Otimização de Performance e SEO",
            description:
              "Auditoria e aceleração de carregamento para atingir nota máxima no Google PageSpeed e melhorar o ranqueamento orgânico.",
          },
        },
      ],
    },
    knowsLanguage: ["pt-BR", "en", "es"],
  };
}

export function buildSchemaGraph(schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
