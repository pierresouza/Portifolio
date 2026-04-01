import Script from "next/script";

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://pierresouza.dev/#person",
        name: "Pierre Souza",
        image: {
          "@type": "ImageObject",
          inLanguage: "pt-BR",
          url: "https://pierresouza.dev/profile_photo.jpeg",
          caption: "Pierre Souza",
        },
        description:
          "Desenvolvedor Full Stack especializado em React, Next.js e Node.js",
        sameAs: [
          "https://www.linkedin.com/in/pierre-souza/",
          "https://github.com/pierresouza",
        ],
        url: "https://pierresouza.dev",
        jobTitle: "Desenvolvedor Full Stack",
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Docker",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://pierresouza.dev/#website",
        url: "https://pierresouza.dev",
        name: "Pierre Souza - Desenvolvedor Full Stack",
        description:
          "Portfólio de Pierre Souza, desenvolvedor Full Stack especializado em React, Next.js e Node.js",
        publisher: {
          "@id": "https://pierresouza.dev/#person",
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": "https://pierresouza.dev/#webpage",
        url: "https://pierresouza.dev",
        name: "Pierre Souza - Desenvolvedor Full Stack",
        isPartOf: {
          "@id": "https://pierresouza.dev/#website",
        },
        about: {
          "@id": "https://pierresouza.dev/#person",
        },
        datePublished: "2024-01-01",
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
}
