import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <FadeIn className="mb-8" direction="down">
        <div className="mb-6 flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">← Voltar</Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold md:text-4xl">Entre em Contato</h1>
        <p className="mt-3 text-base text-foreground/90 md:text-lg">
          Tem uma proposta, feedback ou quer conversar? Envie uma mensagem e
          entrarei em contato em breve!
        </p>
      </FadeIn>

      <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
        <FadeIn direction="up">
          <ContactForm />
        </FadeIn>
      </div>

      <FadeIn className="mt-8" direction="up">
        <div className="rounded-lg bg-muted p-6">
          <h2 className="font-semibold">Outras formas de contato</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              📧{" "}
              <a
                href="mailto:pierre.s3@hotmail.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                pierre.s3@hotmail.com
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://wa.me/5511975310001"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                WhatsApp: (11) 97531-0001
              </a>
            </li>
            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/pierre-souza/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </FadeIn>
    </main>
  );
}
