"use client";
import React from "react";
import { ExperienceMock } from "./mock";
import { EducationMock } from "./education.mock";
import { Badge } from "../../components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const [mode, setMode] = React.useState<"work" | "study">("work");

  const workItems = React.useMemo(() => {
    return [...ExperienceMock.Job].sort((a, b) => {
      return parseInt(a.id) - parseInt(b.id);
    });
  }, []);

  const studyItems = React.useMemo(() => {
    return [...EducationMock.Studies].sort((a, b) => {
      return parseInt(a.id) - parseInt(b.id);
    });
  }, []);

  return (
    <section
      aria-labelledby="experiencia-heading"
      className="mx-auto flex w-full max-w-5xl justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full py-8">
        <div className="flex items-start justify-between gap-4">
          <h1
            id="experiencia-heading"
            className="text-xl font-bold md:text-2xl lg:text-3xl"
          >
            {mode === "work" ? "Experiência" : "Experiência Estudantil"}
          </h1>
          <div className="flex gap-2">
            <Button
              variant={mode === "work" ? "default" : "outline"}
              size="sm"
              aria-pressed={mode === "work"}
              onClick={() => setMode("work")}
            >
              Trabalho
            </Button>
            <Button
              variant={mode === "study" ? "default" : "outline"}
              size="sm"
              aria-pressed={mode === "study"}
              onClick={() => setMode("study")}
            >
              Estudos
            </Button>
          </div>
        </div>

        {/* Timeline */}
        {mode === "work" ? (
          <ol className="relative mt-8 border-s border-border/40 pl-6 dark:border-border">
            {workItems.map((item) => (
              <li key={item.id} className="mb-10 ms-6">
                <span className="absolute -start-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border bg-background ring-4 ring-background dark:border-neutral-700" />

                <article className="rounded-lg border bg-card p-4 shadow-sm transition-colors">
                  <header className="mb-2">
                    <h2 className="text-lg font-semibold leading-snug md:text-xl">
                      {item.Company}
                    </h2>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {item.Role}
                    </p>
                    <time
                      className="block text-xs text-muted-foreground"
                      dateTime={item.Period.replace(/\s|\//g, "-")}
                    >
                      {item.Period}
                    </time>
                  </header>

                  <p className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                    <strong>Descrição: </strong>
                    {item.Description}
                  </p>

                  {item.Description2 && (
                    <details className="mt-2">
                      <summary className="cursor-pointer select-none text-sm text-primary hover:underline">
                        Ver mais
                      </summary>
                      <p className="prose prose-sm dark:prose-invert mt-2 max-w-none text-foreground">
                        {item.Description2}
                      </p>
                    </details>
                  )}

                  {item.Technologies?.length ? (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold">Techs:</span>
                      <ul className="flex flex-wrap gap-2">
                        {item.Technologies.map((tech) => (
                          <li key={`${item.id}-${tech}`}>
                            <Badge
                              variant="secondary"
                              aria-label={`Tecnologia: ${tech}`}
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="relative mt-8 border-s border-border/40 pl-6 dark:border-border">
            {studyItems.map((study) => (
              <li key={study.id} className="mb-10 ms-6">
                <span className="absolute -start-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border bg-background ring-4 ring-background dark:border-neutral-700" />

                <article className="rounded-lg border bg-card p-4 shadow-sm transition-colors">
                  <header className="mb-2">
                    <h2 className="text-lg font-semibold leading-snug md:text-xl">
                      {study.Level} - {study.Course}
                    </h2>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {study.Institution}
                    </p>
                    {study.Period ? (
                      <time
                        className="block text-xs text-muted-foreground"
                        dateTime={study.Period.replace(/\s|\//g, "-")}
                      >
                        {study.Period}
                      </time>
                    ) : null}
                  </header>

                  {study.Description ? (
                    <p className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                      {study.Description}
                    </p>
                  ) : null}

                  {study.Technologies?.length ? (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold">Foco:</span>
                      <ul className="flex flex-wrap gap-2">
                        {study.Technologies.map((tech) => (
                          <li key={`${study.id}-${tech}`}>
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
