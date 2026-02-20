"use client";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Profilephoto from "../public/profile_photo.jpeg";
import { Badge } from "../components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ProjectsMock, freelanceProject } from "./projects/mockProjects";
import { SiMicrosoftoutlook } from "react-icons/si";
import FadeIn from "@/components/fade-in";
import { useTranslations } from "@/lib/i18n";

export default function Home() {
  const featured = ProjectsMock.Project.slice(0, 3);
  const totalProjects = ProjectsMock.Project.length + freelanceProject.length;
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const tp = useTranslations("projectItems");

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        <FadeIn className="flex flex-col gap-6" direction="right">
          <div>
            <p className="text-xs font-medium text-muted-foreground sm:text-sm">
              {t("greeting")}
            </p>
            <h1 className="mt-1 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {t("name")}
            </h1>
            <p className="mt-2 text-base font-semibold text-foreground/90 sm:text-lg md:text-xl">
              {t("role")}
            </p>
          </div>

          <p className="max-w-prose text-sm leading-relaxed text-foreground/90 sm:text-base">
            {t("bio")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
              <TfiLocationPin /> {tc("location")}
            </span>
            <Badge variant="primary">{tc("availableBadge")}</Badge>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="md" asChild>
              <Link href="/projects">{tc("viewProjects")}</Link>
            </Button>
            <div className="ml-1 flex items-center gap-3">
              <Link
                className="rounded-xl border border-gray-500 p-2 transition-all duration-300 ease-in-out hover:scale-110 dark:border-white"
                target="_blank"
                href="https://github.com/pierresouza"
                aria-label="Github"
              >
                <FiGithub size={20} />
              </Link>
              <Link
                className="rounded-xl border border-gray-500 p-2 transition-all duration-300 ease-in-out hover:scale-110 dark:border-white"
                href="mailto:pierre.s3@hotmail.com"
                aria-label="Outlook Email"
              >
                <SiMicrosoftoutlook size={20} />
              </Link>
              <Link
                className="rounded-xl border border-gray-500 p-2 transition-all duration-300 ease-in-out hover:scale-110 dark:border-white"
                target="_blank"
                href="https://www.linkedin.com/in/pierre-souza/"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="flex items-center justify-center" direction="left">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
            <Image
              src={Profilephoto}
              alt="Foto de perfil de Pierre Souza"
              fill
              priority
              className="rounded-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Highlights */}
      <FadeIn
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        delay={0.2}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">
              {t("experienceTitle")}
            </CardTitle>
            <CardDescription>{t("experienceDescription")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold md:text-3xl">
              {t("experienceYears")}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">
              {t("projectsTitle")}
            </CardTitle>
            <CardDescription>{t("projectsDescription")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold md:text-3xl">{totalProjects}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">
              {t("stackTitle")}
            </CardTitle>
            <CardDescription>{t("stackDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="outline">kotlin</Badge>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Featured Projects */}
      <section className="mt-14">
        <FadeIn className="mb-6" delay={0.3}>
          <header>
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              {t("featuredProjectsTitle")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {t("featuredProjectsDescription")}
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <FadeIn
              key={project.name}
              delay={0.4 + index * 0.1}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <h3 className="text-base font-semibold md:text-lg">
                    {tp(`${project.translationKey}.name`)}
                  </h3>
                  {project.description && (
                    <p className="line-clamp-3 text-sm text-foreground/90 md:text-base">
                      {tp(`${project.translationKey}.description`)}
                    </p>
                  )}
                  <div className="mt-1 flex flex-wrap gap-2">
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
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={project.repoURL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs underline-offset-4 hover:underline"
                    >
                      {tc("repository")}
                    </a>
                    {project.deployURL ? (
                      <a
                        href={project.deployURL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs underline-offset-4 hover:underline"
                      >
                        {tc("demo")}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/projects">{tc("viewAllProjects")}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
