"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiLocationPin } from "react-icons/tfi";
import {
  FaGithub,
  FaGlobeEurope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiGithub,
  FiLayout,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { SiMicrosoftoutlook } from "react-icons/si";

import Profilephoto from "../public/profile_photo.jpeg";
import { Badge } from "../components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { freelanceProject } from "./projects/mockProjects";
import FadeIn from "@/components/fade-in";
import { useTranslations } from "@/lib/i18n";

export default function Home() {
  const featured = freelanceProject.slice(0, 3);
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const tp = useTranslations("projectItems");

  const whatsappQuoteUrl = `https://wa.me/5511975310001?text=${encodeURIComponent(
    "Olá Pierre! Vi seu site e gostaria de um orçamento para o meu projeto.",
  )}`;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        <FadeIn className="flex flex-col gap-6" direction="right">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" className="gap-1.5 py-1">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
                {t("availableBadge")}
              </Badge>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                <TfiLocationPin className="text-primary" aria-hidden="true" /> {tc("location")}
              </span>
            </div>

            <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {t("role")}
            </h1>
            <p className="text-sm font-semibold text-primary sm:text-base">
              {t("greeting")} {t("name")}
            </p>
          </div>

          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("bio")}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              size="md"
              asChild
              className="min-h-[44px] gap-2 bg-emerald-600 font-semibold text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20"
            >
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("whatsappCta")}
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                {t("whatsappCta")}
              </a>
            </Button>

            <Button variant="outline" size="md" asChild className="min-h-[44px]">
              <Link href="/projects" className="gap-2">
                {tc("viewProjects")}
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            {/* Social icons with 44px+ touch targets */}
            <div className="ml-1 flex items-center gap-2">
              <a
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/pierresouza"
                aria-label="Perfil do GitHub de Pierre Souza"
              >
                <FiGithub size={18} aria-hidden="true" />
              </a>
              <a
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
                href="mailto:pierre.s3@hotmail.com"
                aria-label="Enviar e-mail para pierre.s3@hotmail.com"
              >
                <SiMicrosoftoutlook size={18} aria-hidden="true" />
              </a>
              <a
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/pierre-souza/"
                aria-label="Perfil do LinkedIn de Pierre Souza"
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Profile Image with subtle glow */}
        <FadeIn className="flex items-center justify-center" direction="left">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-emerald-500/30 opacity-70 blur-xl"></div>
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 overflow-hidden rounded-full border-4 border-background shadow-2xl">
              <Image
                src={Profilephoto}
                alt="Foto de perfil de Pierre Souza, Desenvolvedor Front-End e Especialista em Criação de Sites"
                fill
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Business Metrics Highlights */}
      <FadeIn
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
        delay={0.2}
      >
        <Card className="border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-md">
          <CardContent className="p-6">
            <p className="text-2xl font-black text-primary md:text-3xl">
              {t("metricsYears")}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {t("metricsYearsLabel")}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-md">
          <CardContent className="p-6">
            <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 md:text-3xl">
              {t("metricsSpeed")}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {t("metricsSpeedLabel")}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-md">
          <CardContent className="p-6">
            <p className="text-2xl font-black text-foreground md:text-3xl">
              {t("metricsProjects")}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {t("metricsProjectsLabel")}
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Services Section */}
      <section className="mt-20">
        <FadeIn className="text-center" delay={0.25}>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            {t("servicesTitle")}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("servicesDescription")}
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Service 1 */}
          <FadeIn
            delay={0.3}
            className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <FiTrendingUp className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold sm:text-lg">
                {t("serviceLandingTitle")}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {t("serviceLandingDesc")}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
              <FiCheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>Mobile-First & Conversão</span>
            </div>
          </FadeIn>

          {/* Service 2 */}
          <FadeIn
            delay={0.35}
            className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <FiLayout className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold sm:text-lg">
                {t("serviceInstitutionalTitle")}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {t("serviceInstitutionalDesc")}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
              <FiCheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>Autoridade & Design Único</span>
            </div>
          </FadeIn>

          {/* Service 3 */}
          <FadeIn
            delay={0.4}
            className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                <FiZap className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold sm:text-lg">
                {t("servicePerformanceTitle")}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {t("servicePerformanceDesc")}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
              <FiCheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>PageSpeed 90+ & Google SEO</span>
            </div>
          </FadeIn>

          {/* Service 4 */}
          <FadeIn
            delay={0.45}
            className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-400 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                <FiCode className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold sm:text-lg">
                {t("serviceCustomTitle")}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {t("serviceCustomDesc")}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
              <FiCheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>Next.js & Integrações</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Creation Process Section */}
      <section className="mt-20 rounded-3xl border border-border/60 bg-muted/20 p-6 sm:p-10 lg:p-12">
        <FadeIn className="text-center" delay={0.2}>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            {t("processTitle")}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("processDescription")}
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/80 p-5 shadow-sm">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              {tc("step")} 1
            </span>
            <h3 className="text-base font-bold">
              {t("processStep1Title")}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {t("processStep1Desc")}
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/80 p-5 shadow-sm">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              {tc("step")} 2
            </span>
            <h3 className="text-base font-bold">
              {t("processStep2Title")}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {t("processStep2Desc")}
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/80 p-5 shadow-sm">
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              {tc("step")} 3
            </span>
            <h3 className="text-base font-bold">
              {t("processStep3Title")}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {t("processStep3Desc")}
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-background/80 p-5 shadow-sm">
            <span className="text-xs font-bold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
              {tc("step")} 4
            </span>
            <h3 className="text-base font-bold">
              {t("processStep4Title")}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {t("processStep4Desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Client Projects */}
      <section className="mt-20">
        <FadeIn className="mb-8" delay={0.2}>
          <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                {t("featuredProjectsTitle")}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                {t("featuredProjectsDescription")}
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="self-start sm:self-auto min-h-[40px]">
              <Link href="/projects" className="gap-1.5">
                {tc("viewAllProjects")}
                <FiArrowRight size={14} aria-hidden="true" />
              </Link>
            </Button>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <FadeIn
              key={project.name}
              delay={0.3 + index * 0.1}
              className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-video overflow-hidden border-b bg-muted/40">
                  <Image
                    src={project.image}
                    alt={`Captura da tela do site ${tp(`${project.translationKey}.name`)}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary" className="text-xs font-semibold shadow-sm">
                      {t("clientBadge")}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-base font-bold md:text-lg">
                    {tp(`${project.translationKey}.name`)}
                  </h3>
                  {project.description && (
                    <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {tp(`${project.translationKey}.description`)}
                    </p>
                  )}

                  <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                    {project.Techs.slice(0, 3).map((tech) => (
                      <Badge
                        key={`${project.name}-${tech}`}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 border-t pt-3">
                    {project.deployURL && (
                      <a
                        href={project.deployURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar site do projeto ${tp(`${project.translationKey}.name`)}`}
                        className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 hover:bg-muted"
                      >
                        <FaGlobeEurope aria-hidden="true" />
                        <span>{tc("visitSite")}</span>
                      </a>
                    )}
                    {project.repoURL && (
                      <a
                        href={project.repoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Acessar código do repositório ${tp(`${project.translationKey}.name`)}`}
                        className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 hover:bg-muted"
                      >
                        <FaGithub aria-hidden="true" />
                        <span>{tc("repository")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="mt-20">
        <FadeIn
          delay={0.2}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 p-8 sm:p-12 text-center shadow-xl"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              {t("ctaBannerTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("ctaBannerDescription")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="md"
                asChild
                className="min-h-[48px] gap-2 bg-emerald-600 px-6 font-bold text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30"
              >
                <a
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("ctaWhatsAppButton")}
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  {t("ctaWhatsAppButton")}
                </a>
              </Button>

              <Button size="md" variant="outline" asChild className="min-h-[48px] px-6 font-semibold">
                <Link href="/contact">{t("ctaContactButton")}</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
