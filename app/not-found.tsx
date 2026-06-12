import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Página não encontrada",
  description:
    "A página que você procurou não existe. Volte ao portfólio de Pierre Souza.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">404</h1>
      <p className="mt-4 text-muted-foreground">
        A página que você procurou não foi encontrada.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </main>
  );
}
