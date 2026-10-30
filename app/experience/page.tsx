"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiChevronRight,
  FiLayers,
} from "react-icons/fi";
import { ExperienceMock } from "./mock";
import { EducationMock } from "./education.mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import { useTranslations } from "@/lib/i18n";

export default function Experience() {
  const [mode, setMode] = React.useState<"work" | "freelance" | "study">(
    "work",
  );
  const t = useTranslations("experience");
  const tc = useTranslations("common");
  const te = useTranslations("experienceItems");
  const ted = useTranslations("educationItems");

  const groupedWorkItems = React.useMemo(() => {
    const filtered = ExperienceMock.Job.filter((item) => {
      if (mode === "freelance") {
        return item.type === "freelance_startup";
      }
      return item.type !== "freelance_startup";
    });

    const sorted = [...filtered].sort(
      (a, b) => parseInt(a.id) - parseInt(b.id),
    );

    const grouped: { company: string; items: typeof ExperienceMock.Job }[] = [];

    sorted.forEach((item) => {
      const lastGroup = grouped[grouped.length - 1];
      if (lastGroup && lastGroup.company === item.Company) {
        lastGroup.items.push(item);
      } else {
        grouped.push({
          company: item.Company,
          items: [item],
        });
      }
    });

    return grouped;
  }, [mode]);

  const studyItems = React.useMemo(() => {
    return [...EducationMock.Studies].sort(
      (a, b) => parseInt(a.id) - parseInt(b.id),
    );
  }, []);

  const currentHeading =
    mode === "work"
      ? t("title")
      : mode === "freelance"
        ? t("freelanceTitle")
        : t("studentTitle");

  return (
    <main
      aria-labelledby="experiencia-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Page Header */}
      <FadeIn direction="down" className="mb-8">
        <Badge variant="outline" className="mb-3">
          {t("badge")}
        </Badge>
        <h1
          id="experiencia-heading"
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
        >
          {currentHeading}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t("subtitle")}
        </p>
      </FadeIn>

      {/* Segmented Mode Switcher */}
      <div className="mb-10 inline-flex w-full flex-wrap rounded-2xl border border-border/70 bg-muted/40 p-1.5 sm:w-auto">
        <button
          onClick={() => setMode("work")}
          aria-pressed={mode === "work"}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:flex-none ${
            mode === "work"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FiBriefcase className="h-4 w-4 text-primary" />
          <span>{t("work")}</span>
        </button>

        <button
          onClick={() => setMode("freelance")}
          aria-pressed={mode === "freelance"}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:flex-none ${
            mode === "freelance"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FiLayers className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
          <span>{t("freelance")}</span>
        </button>

        <button
          onClick={() => setMode("study")}
          aria-pressed={mode === "study"}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:flex-none ${
            mode === "study"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FiBookOpen className="h-4 w-4 text-amber-700 dark:text-amber-400" />
          <span>{t("studies")}</span>
        </button>
      </div>

      {/* Timeline */}
      {mode === "work" || mode === "freelance" ? (
        <ol className="relative border-s-2 border-border/60 pl-6 sm:pl-8">
          {groupedWorkItems.map((group, groupIndex) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
              key={`${mode}-group-${groupIndex}`}
              className="mb-8 last:mb-0"
            >
              <span className="absolute -start-[11px] mt-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background ring-4 ring-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                <h2 className="mb-5 text-lg font-extrabold leading-snug md:text-xl">
                  {te(`${group.items[0].translationKey}.company`)}
                </h2>

                <div className="flex flex-col gap-6">
                  {group.items.map((item, index) => {
                    const isCurrent = item.Period.toLowerCase().includes("atual");
                    return (
                      <div
                        key={item.id}
                        className={`relative ${
                          index !== group.items.length - 1
                            ? "ml-1 border-l-2 border-border/50 pb-6 pl-5"
                            : group.items.length > 1
                              ? "ml-1 pl-5"
                              : ""
                        }`}
                      >
                        {group.items.length > 1 && (
                          <span className="absolute -left-[6px] top-2 h-2.5 w-2.5 rounded-full border bg-muted-foreground/40" />
                        )}

                        <header className="mb-3 flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base font-bold leading-snug text-foreground">
                            {te(`${item.translationKey}.role`)}
                          </h3>

                          <div className="flex items-center gap-2">
                            {isCurrent && (
                              <Badge variant="primary" className="text-xs">
                                {t("currentBadge")}
                              </Badge>
                            )}
                            <time
                              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                              dateTime={item.Period.replace(/\s|\//g, "-")}
                            >
                              <FiCalendar className="h-3.5 w-3.5" />
                              {item.Period}
                            </time>
                          </div>
                        </header>

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {te(`${item.translationKey}.description`)}
                        </p>

                        {item.Description2 && (
                          <details className="group/details mt-3 rounded-xl border border-border/50 bg-muted/20 p-3">
                            <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-semibold text-primary select-none">
                              <FiChevronRight className="h-4 w-4 transition-transform group-open/details:rotate-90" />
                              {tc("seeMore")}
                            </summary>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {te(`${item.translationKey}.description2`)}
                            </p>
                          </details>
                        )}

                        {item.Technologies?.length ? (
                          <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-border/50 pt-3">
                            {item.Technologies.map((tech) => (
                              <Badge
                                key={`${item.id}-${tech}`}
                                variant="secondary"
                                aria-label={`Tecnologia: ${tech}`}
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      ) : (
        <div>
          <ol className="relative border-s-2 border-border/60 pl-6 sm:pl-8">
            {studyItems.map((study, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                key={study.id}
                className="mb-8 last:mb-0"
              >
                <span className="absolute -start-[11px] mt-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-amber-500 bg-background ring-4 ring-background">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                </span>

                <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                  <header className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {ted(`${study.translationKey}.level`)}
                      </Badge>
                      <h2 className="text-lg font-extrabold leading-snug md:text-xl">
                        {ted(`${study.translationKey}.course`)}
                      </h2>
                      <p className="mt-0.5 text-sm font-medium text-primary">
                        {study.Institution}
                      </p>
                    </div>

                    {study.Period ? (
                      <time
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                        dateTime={study.Period.replace(/\s|\//g, "-")}
                      >
                        <FiCalendar className="h-3.5 w-3.5" />
                        {study.Period}
                      </time>
                    ) : null}
                  </header>

                  {study.Description ? (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {ted(`${study.translationKey}.description`)}
                    </p>
                  ) : null}

                  {study.Technologies?.length ? (
                    <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-border/50 pt-3">
                      {study.Technologies.map((tech) => (
                        <Badge
                          key={`${study.id}-${tech}`}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </article>
              </motion.li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/certificates">
                <FiAward className="h-4 w-4 text-primary" />
                {t("viewCertificatesCta")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
