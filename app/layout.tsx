import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { rootMetadata } from "@/lib/seo/metadata";
import {
  buildSchemaGraph,
  getPersonSchema,
  getProfessionalServiceSchema,
  getWebPageSchema,
  getWebSiteSchema,
} from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const homeSchema = buildSchemaGraph([
  getPersonSchema(),
  getWebSiteSchema(),
  getProfessionalServiceSchema(),
  getWebPageSchema({
    path: "/",
    title: siteConfig.title,
    description: siteConfig.description,
  }),
]);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        <JsonLd data={homeSchema} />
        <meta
          name="google-site-verification"
          content={siteConfig.googleSiteVerification}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <Header />
            <div id="main-content">{children}</div>
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
