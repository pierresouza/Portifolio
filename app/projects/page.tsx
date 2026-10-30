"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaGlobeEurope, FaWhatsapp } from "react-icons/fa";
import { FiBriefcase, FiCode, FiSearch, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { ProjectsMock, freelanceProject } from "./mockProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import { useTranslations } from "@/lib/i18n";

type TabType = "freelance" | "estudos";

export default function Projects() {
  const [query, setQuery] = React.useState("");
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<TabType>("freelance");

  const t = useTranslations("projects");
  const tc = useTranslations("common");
  const tp = useTranslations("projectItems");

  const currentProjects = React.useMemo(() => {
    return activeTab === "freelance" ? freelanceProject : ProjectsMock.Project;
  }, [activeTab]);

  const allTechs = React.useMemo(() => {
    const set = new Set<string>();
    currentProjects.forEach((p) => p.Techs.forEach((tech) => set.add(tech)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [currentProjects]);

  const projects = React.useMemo(() => {
    return currentProjects.filter((p) => {
      const translatedName = tp(`${p.translationKey}.name`);
      const translatedDesc = tp(`${p.translationKey}.description`);
      const matchesQuery =
        `${p.name} ${p.description ?? ""} ${translatedName} ${translatedDesc} ${p.Techs.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());
      const matchesTech = selectedTech ? p.Techs.includes(selectedTech) : true;
      return matchesQuery && matchesTech;
    });
  }, [query, selectedTech, currentProjects, tp]);

  React.useEffect(() => {
    setSelectedTech(null);
  }, [activeTab]);

  const whatsappUrl = `https://wa.me/5511975310001?text=${encodeURIComponent(
    "Olá Pierre! Vi seus projetos no portfólio e gostaria de solicitar um orçamento.",
  )}`;

  return (
    <main
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Page Header */}
      <FadeIn direction="down" className="mb-8">
        <Badge variant="outline" className="mb-3">
          {t("badge")}
        </Badge>
        <h1
          id="projects-heading"
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
        >
          {t("title")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t("description")}
        </p>
      </FadeIn>

      {/* Segmented Tabs */}
      <div className="mb-6 inline-flex w-full rounded-2xl border border-border/70 bg-muted/40 p-1.5 sm:w-auto">
        <button
          onClick={() => setActiveTab("freelance")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all sm:flex-none ${
            activeTab === "freelance"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FiBriefcase className="h-4 w-4 text-emerald-500" />
          <span>
            {t("freelance")} ({freelanceProject.length})
          </span>
        </button>

        <button
          onClick={() => setActiveTab("estudos")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all sm:flex-none ${
            activeTab === "estudos"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FiCode className="h-4 w-4 text-primary" />
          <span>
            {t("studies")} ({ProjectsMock.Project.length})
          </span>
        </button>
      </div>

      {/* Search & Tech Filters */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/50 p-4 sm:p-5">
        <div className="relative w-full">
          <FiSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-10 text-sm outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={t("searchLabel")}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={tc("clearFilter")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={selectedTech === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTech(null)}
            className="h-8 rounded-full text-xs"
          >
            {tc("all")}
          </Button>
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? "default" : "outline"}
              size="sm"
              onClick={() =>
                setSelectedTech((prev) => (prev === tech ? null : tech))
              }
              className="h-8 rounded-full text-xs"
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b bg-muted/40">
                <Image
                  src={project.image}
                  alt={`Captura do projeto ${tp(`${project.translationKey}.name`)}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3">
                  <Badge
                    variant={activeTab === "freelance" ? "primary" : "outline"}
                    className="bg-background/90 text-xs font-semibold backdrop-blur-sm"
                  >
                    {activeTab === "freelance"
                      ? t("clientBadge")
                      : t("studyBadge")}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h2 className="text-base font-bold md:text-lg">
                  {tp(`${project.translationKey}.name`)}
                </h2>

                {project.description && (
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {tp(`${project.translationKey}.description`)}
                  </p>
                )}

                {project.Techs?.length ? (
                  <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                    {project.Techs.map((tech) => (
                      <Badge
                        key={`${project.name}-${tech}`}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                <div className="mt-3 flex flex-wrap gap-2.5 border-t pt-3">
                  {project.deployURL ? (
                    <a
                      href={project.deployURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <FaGlobeEurope />
                      <span>{tc("visitSite")}</span>
                    </a>
                  ) : (
                    <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-3 py-2 text-xs text-muted-foreground">
                      <FaGlobeEurope />
                      <span>{tc("unavailable")}</span>
                    </span>
                  )}

                  {project.repoURL && (
                    <a
                      href={project.repoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted"
                    >
                      <FaGithub />
                      <span>{tc("repository")}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed p-10 text-center">
          <p className="text-sm text-muted-foreground">
            {t("noProjectsFound")}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery("");
              setSelectedTech(null);
            }}
            className="mt-4"
          >
            {tc("clearFilter")}
          </Button>
        </div>
      )}

      {/* Commercial CTA Banner */}
      <FadeIn
        delay={0.2}
        className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 p-8 text-center shadow-lg sm:p-10"
      >
        <h2 className="text-xl font-extrabold sm:text-2xl md:text-3xl">
          {t("ctaTitle")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          {t("ctaDescription")}
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            size="md"
            asChild
            className="gap-2 bg-emerald-600 px-6 font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-500"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5" />
              {t("ctaButton")}
            </a>
          </Button>
        </div>
      </FadeIn>
    </main>
  );
}
