import React from "react";
import Image from "next/image";
import { ProjectsMock } from "../app/projects/mockProjects";
import { FaGithub, FaGlobeEurope } from "react-icons/fa";

function CardProject() {
  return (
    <main className="flex h-full w-4/5 flex-col items-center gap-4">
      <p className="text-lg lg:text-2xl">Projetos:</p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {ProjectsMock.Project.map((project, index) => {
          return (
            <section
              key={index}
              className="group grid h-full max-w-screen-sm flex-col rounded-xl border border-black transition-all duration-300 hover:shadow-lg dark:border-white"
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
              <div className="flex flex-col gap-8 p-4">
                <p className="text-base font-bold md:text-lg lg:text-xl">
                  {project.name}
                </p>
                <p className="max-w-screen-sm text-sm font-normal md:text-base lg:text-lg">
                  {project.description}
                </p>
                {project.Techs && (
                  <div className="flex items-center lg:gap-2">
                    <span className="text-sm dark:text-white md:text-base lg:text-lg">
                      Techs:
                    </span>
                    {project.Techs.map((tech, index) => (
                      <span
                        className="flex rounded-lg whitespace-nowrap bg-slate-300 p-1 text-xs dark:bg-stone-50 dark:text-black md:text-sm lg:text-base mr-1 "
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4">
                  <a
                    href={project.repoURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-300 p-3 text-xs transition-all duration-500 ease-in-out hover:bg-slate-200 dark:border-white md:text-sm lg:text-base"
                  >
                    <FaGithub />
                    <span className="font-medium">Repositório</span>
                  </a>
                  <a
                    href={project.deployURL === "Indisponível" ? "Em andamento" : project.deployURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-200 p-3 text-xs transition-all duration-500 ease-in-out hover:bg-slate-200 dark:border-white md:text-sm lg:text-base"
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
