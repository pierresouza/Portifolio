import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://pierresouza.dev.br"),
  title: "Pierre Souza | Front-End, Freelance e Produto Digital",
  description:
    "Desenvolvedor front-end focado em freelas, sites institucionais, landing pages e interfaces para empresas. Experiência com Next.js, React, TypeScript e SEO.",
  keywords: [
    "desenvolvedor web",
    "full stack",
    "freelance front-end",
    "landing page",
    "site institucional",
    "desenvolvedor para empresas",
    "contratar desenvolvedor",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "frontend",
    "backend",
    "portfólio de desenvolvedor",
    "SEO",
    "UX",
  ],
  authors: [{ name: "Pierre Souza", url: "https://pierresouza.dev.br" }],
  creator: "Pierre Souza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pierresouza.dev.br",
    title: "Pierre Souza | Front-End, Freelance e Produto Digital",
    description:
      "Desenvolvedor front-end focado em freelas, sites institucionais, landing pages e interfaces para empresas.",
    siteName: "Pierre Souza",
    images: [
      {
        url: "https://pierresouza.dev.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pierre Souza - Front-End, Freelance e Produto Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Souza | Front-End, Freelance e Produto Digital",
    description:
      "Desenvolvedor front-end focado em freelas, sites institucionais, landing pages e interfaces para empresas.",
    images: ["https://pierresouza.dev.br/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://pierresouza.dev.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <StructuredData />
        <meta
          name="google-site-verification"
          content="HPUM3_16vhQ3HIMDB60TXf8P1hR6zZyBExGrCN7Fh88"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <Header />
            {children}
            <Script
              src="https://cdn.himetrica.com/tracker.js"
              data-api-key="hm_c4dcdbeefbdce2039aa0d02327677c405ed03fcc7fba1bbd"
              strategy="afterInteractive"
            />
            <Script
              src="https://cdn.himetrica.com/vitals.js"
              data-api-key="hm_c4dcdbeefbdce2039aa0d02327677c405ed03fcc7fba1bbd"
              strategy="afterInteractive"
            />
            <Script
              src="https://cdn.himetrica.com/errors.js"
              data-api-key="hm_c4dcdbeefbdce2039aa0d02327677c405ed03fcc7fba1bbd"
              strategy="afterInteractive"
            />
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
