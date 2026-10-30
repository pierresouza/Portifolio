import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiFolder, FiMessageSquare } from "react-icons/fi";
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
    <main className="mx-auto flex min-h-[65vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border/70 bg-card/80 p-10 shadow-lg sm:p-14">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          Erro 404
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          O endereço que você tentou acessar não existe ou foi movido. Que tal
          explorar meus projetos ou entrar em contato?
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="gap-2 rounded-xl">
            <Link href="/">
              <FiArrowLeft className="h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-xl">
            <Link href="/projects">
              <FiFolder className="h-4 w-4" />
              Ver Projetos
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-xl">
            <Link href="/contact">
              <FiMessageSquare className="h-4 w-4" />
              Contato
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
