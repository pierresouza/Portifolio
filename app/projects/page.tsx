"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaGlobeEurope } from "react-icons/fa";
import { ProjectsMock } from "./mockProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [query, setQuery] = React.useState("");
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);

  const allTechs = React.useMemo(() => {
    const set = new Set<string>();
    ProjectsMock.Project.forEach((p) => p.Techs.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const projects = React.useMemo(() => {
    return ProjectsMock.Project.filter((p) => {
      const matchesQuery = `${p.name} ${p.description ?? ""}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTech = selectedTech ? p.Techs.includes(selectedTech) : true;
      return matchesQuery && matchesTech;
    });
  }, [query, selectedTech]);

  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <header className="mb-6">
        <h1 id="projects-heading" className="text-xl font-bold md:text-2xl lg:text-3xl">
          Projetos
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Alguns projetos que desenvolvi e mantenho. Filtre por tecnologia ou pesquise pelo nome.
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar projetos..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Buscar projetos"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:justify-end">
          <Button
            variant={selectedTech === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTech(null)}
          >
            Todos
          </Button>
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech((t) => (t === tech ? null : tech))}
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group grid h-full max-w-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={360}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <h2 className="text-base font-semibold md:text-lg">{project.name}</h2>
              {project.description && (
                <p className="text-sm text-foreground/90 md:text-base">
                  {project.description}
                </p>
              )}

              {project.Techs?.length ? (
                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <span className="text-md font-semibold">Techs:</span>
                  {project.Techs.map((tech) => (
                    <Badge key={`${project.name}-${tech}`} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              ) : null}

              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={project.repoURL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-300 p-2 text-xs transition-all duration-200 hover:bg-slate-200 dark:border-white dark:hover:text-black dark:hover:duration-500 "
                >
                  <FaGithub />
                  <span className="font-medium">Repositório</span>
                </a>
                {project.deployURL ? (
                  <a
                    href={project.deployURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-200 p-2 text-xs transition-all duration-200 hover:bg-slate-200 dark:border-white dark:hover:text-black dark:hover:duration-500 "
                  >
                    <FaGlobeEurope />
                    <span className="font-medium">Teste agora</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-2 rounded-lg border border-slate-200 p-2 text-xs dark:border-white">
                    <FaGlobeEurope />
                    <span className="font-medium">Indisponível</span>
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Nenhum projeto encontrado.
        </p>
      )}
    </section>
  );
}
