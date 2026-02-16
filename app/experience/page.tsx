"use client";
import React from "react";
import { ExperienceMock } from "./mock";
import { EducationMock } from "./education.mock";
import { Badge } from "../../components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Experience() {
  const [mode, setMode] = React.useState<"work" | "study">("work");

  // Agrupamento de itens por empresa
  const groupedWorkItems = React.useMemo(() => {
    // Primeiro ordena pelo ID para manter a ordem cronológica/lógica original
    const sorted = [...ExperienceMock.Job].sort(
      (a, b) => parseInt(a.id) - parseInt(b.id),
    );

    // Agrupa por empresa
    const grouped: { company: string; items: typeof ExperienceMock.Job }[] = [];

    sorted.forEach((item) => {
      const lastGroup = grouped[grouped.length - 1];

      // Se a última empresa adicionada for a mesma da atual, adiciona o item ao grupo existente
      if (lastGroup && lastGroup.company === item.Company) {
        lastGroup.items.push(item);
      } else {
        // Se não, cria um novo grupo
        grouped.push({
          company: item.Company,
          items: [item],
        });
      }
    });

    return grouped;
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
            {groupedWorkItems.map((group, groupIndex) => (
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                key={`group-${groupIndex}`}
                className="mb-10 ms-6"
              >
                <span className="absolute -start-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border bg-background ring-4 ring-background dark:border-neutral-700" />

                <article className="rounded-lg border bg-card p-4 shadow-sm transition-colors">
                  {/* Cabeçalho da Empresa (Aparece apenas uma vez por grupo) */}
                  <h2 className="mb-4 text-lg font-bold leading-snug md:text-xl">
                    {group.company}
                  </h2>

                  {/* Lista de Cargos dentro da Empresa */}
                  <div className="flex flex-col gap-6">
                    {group.items.map((item, index) => (
                      <div
                        key={item.id}
                        className={`relative ${index !== group.items.length - 1 ? "ml-1 border-l-2 border-border/50 pb-6 pl-4" : "pl-1"}`}
                      >
                        {/* Indicador de linha do tempo interna para múltiplos cargos */}
                        {group.items.length > 1 && (
                          <span
                            className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border bg-muted-foreground/30 ${index !== group.items.length - 1 ? "" : "-left-[1px]"}`}
                          />
                        )}

                        <header className="mb-2">
                          <h3 className="text-base font-semibold leading-snug">
                            {item.Role}
                          </h3>
                          <time
                            className="block text-xs text-muted-foreground"
                            dateTime={item.Period.replace(/\s|\//g, "-")}
                          >
                            {item.Period}
                          </time>
                        </header>

                        <div className="prose prose-sm dark:prose-invert max-w-none text-sm text-foreground">
                          <strong>Descrição: </strong>
                          {item.Description}
                        </div>

                        {item.Description2 && (
                          <details className="mt-2">
                            <summary className="cursor-pointer select-none text-sm text-primary hover:underline">
                              Ver mais
                            </summary>
                            <p className="prose prose-sm dark:prose-invert mt-2 max-w-none text-sm text-foreground">
                              {item.Description2}
                            </p>
                          </details>
                        )}

                        {item.Technologies?.length ? (
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold">
                              Techs:
                            </span>
                            <ul className="flex flex-wrap gap-1">
                              {item.Technologies.map((tech) => (
                                <li key={`${item.id}-${tech}`}>
                                  <Badge
                                    variant="secondary"
                                    aria-label={`Tecnologia: ${tech}`}
                                    className="h-5 px-1 py-0 text-[10px]"
                                  >
                                    {tech}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        ) : (
          <ol className="relative mt-8 border-s border-border/40 pl-6 dark:border-border">
            {studyItems.map((study, index) => (
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={study.id}
                className="mb-10 ms-6"
              >
                <span className="absolute -start-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border bg-background ring-4 ring-background dark:border-neutral-700" />

                <article className="rounded-lg border bg-card p-4 shadow-sm transition-colors">
                  <header className="mb-2">
                    <h2 className="text-lg font-semibold leading-snug md:text-xl">
                      {study.Level} - {study.Institution}
                    </h2>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {study.Course}
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
                motion.            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </motion.li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
