import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "Pierre Souza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`antialiased`}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
