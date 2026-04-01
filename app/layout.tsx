import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pierre Souza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
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
