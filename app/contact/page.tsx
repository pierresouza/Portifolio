"use client";

import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <FadeIn className="mb-8" direction="down">
        <div className="mb-6 flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">{t("back")}</Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold md:text-4xl">{t("title")}</h1>
        <p className="mt-3 text-base text-foreground/90 md:text-lg">
          {t("description")}
        </p>
      </FadeIn>

      <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
        <FadeIn direction="up">
          <ContactForm />
        </FadeIn>
      </div>
    </main>
  );
}
