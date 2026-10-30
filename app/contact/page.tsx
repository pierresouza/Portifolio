"use client";

import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiCheckCircle, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/lib/i18n";

export default function ContactPage() {
  const t = useTranslations("contact");

  const whatsappUrl = `https://wa.me/5511975310001?text=${encodeURIComponent(
    "Olá Pierre! Vi sua página de Contato e gostaria de solicitar um orçamento.",
  )}`;

  return (
    <main
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <FadeIn className="mb-10" direction="down">
        <Badge variant="outline" className="mb-3">
          {t("badge")}
        </Badge>
        <h1
          id="contact-heading"
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
        >
          {t("title")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t("subtitle")}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Channels & Trust Highlights */}
        <FadeIn
          direction="right"
          className="flex flex-col gap-6 lg:col-span-5"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
              {t("otherContactMethods")}
            </h2>

            {/* WhatsApp Priority Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-500/10 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                  <FaWhatsapp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground sm:text-base">
                    {t("whatsappLabel")} • (11) 97531-0001
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t("whatsappDesc")}
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-5 w-5 text-emerald-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* Email Card */}
            <a
              href="mailto:pierre.s3@hotmail.com"
              className="group flex items-start justify-between rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground sm:text-base">
                    {t("emailLabel")} • pierre.s3@hotmail.com
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t("emailDesc")}
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/pierre-souza/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground sm:text-base">
                    {t("linkedinLabel")} • /in/pierre-souza
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t("linkedinDesc")}
                  </p>
                </div>
              </div>
              <FiArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>

            {/* Location Card */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-muted/20 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                <FiMapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  {t("locationLabel")}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {t("locationDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Trust Checklist */}
          <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
            <h3 className="text-sm font-bold">{t("trustTitle")}</h3>
            <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground sm:text-sm">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{t("trust1")}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{t("trust2")}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{t("trust3")}</span>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Right Column: Contact Form */}
        <FadeIn direction="left" className="lg:col-span-7">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-md sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-extrabold sm:text-xl">
                {t("formTitle")}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {t("formSubtitle")}
              </p>
            </div>
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
