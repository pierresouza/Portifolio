import type { Metadata } from "next";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

const title = "Certificados";
const description =
  "Certificados e participações em eventos de tecnologia, Inteligência Artificial e desenvolvimento de software de Pierre Souza.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/certificates",
  keywords: [
    "certificados",
    "eventos de tecnologia",
    "Inteligência Artificial",
    "Build With AI",
    "GDG Cloud SP",
    "FIAP Connect Summit",
    "Fórum Abeinfo",
  ],
});

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageJsonLd
        path="/certificates"
        title={`${title} | Pierre Souza`}
        description={description}
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Certificados", path: "/certificates" },
        ]}
      />
      {children}
    </>
  );
}
