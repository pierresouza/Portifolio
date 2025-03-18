import React from "react";
import Image from "next/image";
import { ProjectsMock } from "../app/projects/mockProjects";
import { FaGithub, FaGlobeEurope } from "react-icons/fa";
import { Badge } from "./ui/badge";

function CardProject() {
  return (
    <main className="flex h-full w-full flex-col items-center gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProjectsMock.Project.map((project, index) => {
          return (
            <section
              key={index}
              className="group grid h-full max-w-[500px] flex-col rounded-xl border border-black transition-all duration-300 hover:shadow-lg dark:border-white"
            >
              <div className="overflow-hidden rounded-t-xl">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <p className="text-base font-bold md:text-lg lg:text-xl">
                  {project.name}
                </p>
                <p className="max-w-screen-sm text-sm font-normal md:text-base lg:text-lg">
                  {project.description}
                </p>
                {project.Techs && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm dark:text-white md:text-base lg:text-lg">
                      Techs:
                    </span>
                    {project.Techs.map((tech, index) => (
                      <Badge key={index} variant={"secondary"}>{tech}</Badge>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.repoURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border hover:dark:text-black border-slate-300 p-3 text-xs transition-all duration-500 ease-in-out hover:bg-slate-200 dark:border-white md:text-sm lg:text-base"
                  >
                    <FaGithub />
                    <span className="font-medium">Repositório</span>
                  </a>
                  <a
                    href={project.deployURL === "Indisponível" ? "Em andamento" : project.deployURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border hover:dark:text-black border-slate-200 p-3 text-xs transition-all duration-500 ease-in-out hover:bg-slate-200 dark:border-white md:text-sm lg:text-base"
                  >
                    <FaGlobeEurope />
                    <span className="font-medium">Deploy</span>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default CardProject;
