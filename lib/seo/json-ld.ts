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
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.countryCode,
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SEO",
      "UX",
      "Landing Pages",
      "Sites Institucionais",
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
    name: `${siteConfig.author.name} - Desenvolvimento Front-End`,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile_photo.jpeg`,
    areaServed: {
      "@type": "Country",
      name: siteConfig.location.country,
    },
    provider: {
      "@id": `${siteConfig.url}/#person`,
    },
    serviceType: [
      "Desenvolvimento Front-End",
      "Landing Pages",
      "Sites Institucionais",
      "Interfaces Web",
    ],
    knowsLanguage: ["pt-BR", "en", "es"],
  };
}

export function buildSchemaGraph(schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
