"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiAward,
  FiBriefcase,
  FiMessageSquare,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { knowledge, studying } from "./mock";
import FadeIn from "@/components/fade-in";
import { useTranslations } from "@/lib/i18n";

const DARK_ICON_COLORS = new Set(["#000000", "#181717"]);

export default function About() {
  const t = useTranslations("about");
  const tc = useTranslations("common");

  const whatsappUrl = `https://wa.me/5511975310001?text=${encodeURIComponent(
    "Olá Pierre! Vi sua página Sobre e gostaria de conversar sobre um projeto.",
  )}`;

  const pillars = [
    {
      icon: FiTrendingUp,
      title: t("pillar1Title"),
      desc: t("pillar1Desc"),
      colorClass: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: FiZap,
      title: t("pillar2Title"),
      desc: t("pillar2Desc"),
      colorClass: "bg-amber-500/10 text-amber-500",
    },
    {
      icon: FiSmartphone,
      title: t("pillar3Title"),
      desc: t("pillar3Desc"),
      colorClass: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: FiMessageSquare,
      title: t("pillar4Title"),
      desc: t("pillar4Desc"),
      colorClass: "bg-violet-500/10 text-violet-500",
    },
  ];

  return (
    <main
      aria-labelledby="sobre-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Hero */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        <FadeIn direction="right" className="flex flex-col gap-4">
          <div>
            <Badge variant="outline" className="mb-3">
              {t("badge")}
            </Badge>
            <h1
              id="sobre-heading"
              className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
            >
              {t("title")}
            </h1>
            <p className="mt-2 text-base font-semibold text-primary md:text-lg">
              {t("role")}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("description")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("description2")}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button
              asChild
              className="gap-2 bg-emerald-600 font-semibold text-white hover:bg-emerald-500"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-4 w-4" />
                {tc("requestQuote")}
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/experience">
                <FiBriefcase className="h-4 w-4" />
                {t("viewExperience")}
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/certificates">
                <FiAward className="h-4 w-4" />
                {t("viewCertificates")}
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="flex justify-center md:justify-end" direction="left">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-emerald-500/30 opacity-70 blur-xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-background shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80">
              <Image
                src="/profile_photo.jpeg"
                alt="Foto de perfil de Pierre Souza, desenvolvedor front-end"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Work Pillars */}
      <section className="mt-16">
        <FadeIn delay={0.15}>
          <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
            {t("pillarsTitle")}
          </h2>
        </FadeIn>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeIn
                key={pillar.title}
                delay={0.2 + idx * 0.05}
                className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${pillar.colorClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {pillar.desc}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Core Stack Grid */}
      <section className="mt-16">
        <FadeIn delay={0.25}>
          <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
            {t("technologiesTitle")}
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground md:text-base">
            {t("technologiesDesc")}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.3}
          className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {knowledge.map((item, index) => {
            const isDarkColor = DARK_ICON_COLORS.has(item.color.toUpperCase());
            return (
              <div
                key={`know-${index}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <item.aboutTechs
                  size={40}
                  color={isDarkColor ? undefined : item.color}
                  className={`transition-transform duration-300 group-hover:scale-110 ${
                    isDarkColor ? "text-foreground" : ""
                  }`}
                />
                <span className="text-xs font-semibold sm:text-sm">
                  {item.title}
                </span>
              </div>
            );
          })}
        </FadeIn>
      </section>

      {/* Currently Studying & Expanding */}
      <section className="mt-14">
        <FadeIn delay={0.35}>
          <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
            {t("studyingTitle")}
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground md:text-base">
            {t("studyingDesc")}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.4}
          className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {studying.map((item, index) => {
            const isDarkColor = DARK_ICON_COLORS.has(item.color.toUpperCase());
            return (
              <div
                key={`study-${index}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-muted/20 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-md"
              >
                <item.aboutTechs
                  size={40}
                  color={isDarkColor ? undefined : item.color}
                  className={`transition-transform duration-300 group-hover:scale-110 ${
                    isDarkColor ? "text-foreground" : ""
                  }`}
                />
                <span className="text-xs font-semibold sm:text-sm">
                  {item.title}
                </span>
              </div>
            );
          })}
        </FadeIn>
      </section>
    </main>
  );
}
