import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://pierresouza.dev"),
  title: "Pierre Souza - Desenvolvedor Full Stack | Portfólio",
  description:
    "Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Veja meus projetos, experiência e entre em contato para oportunidades de desenvolvimento.",
  keywords: [
    "desenvolvedor web",
    "full stack",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "frontend",
    "backend",
    "portfólio de desenvolvedor",
  ],
  authors: [{ name: "Pierre Souza", url: "https://pierresouza.dev" }],
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
    url: "https://pierresouza.dev",
    title: "Pierre Souza - Desenvolvedor Full Stack | Portfólio",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Veja meus projetos, experiência e entre em contato.",
    siteName: "Pierre Souza",
    images: [
      {
        url: "https://pierresouza.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pierre Souza - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Souza - Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js e Node.js",
    images: ["https://pierresouza.dev/og-image.png"],
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
    canonical: "https://pierresouza.dev",
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
