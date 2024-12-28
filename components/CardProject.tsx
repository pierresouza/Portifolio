import React from "react";
import Image from "next/image";
import { ProjectsMock } from "../app/projects/mockProjects";
import { FaGithub, FaGlobeEurope } from "react-icons/fa";

function CardProject() {
  return (
    <>
      <p className="text-3xl font-bold">Projetos:</p>
      <div className="flex h-[80vh] w-full flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {ProjectsMock.Project.map((project, index) => (
          <div
            key={index}
            className="group flex max-h-[500px] w-full max-w-xs flex-col justify-between rounded-lg border border-black/20 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:border-white/20 dark:bg-gray-800 dark:shadow-gray-900 sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <div className="w-full overflow-hidden rounded-t-lg sm:h-56 md:h-64 lg:h-72">
              <Image
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h2 className="text-center text-lg font-bold text-black dark:text-white sm:text-xl md:text-2xl">
                {project.name}
              </h2>
              <p className="text-sm text-black dark:text-gray-300 sm:text-base md:text-lg">
                {project.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.repoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-black/20 px-4 py-2 text-xs text-black transition-all duration-500 hover:underline hover:underline-offset-4 dark:border-white/20 dark:text-white sm:text-base md:text-lg"
                >
                  <FaGithub />
                  Repositório
                </a>
                <a
                  href={project.deployURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-black/20 px-4 py-2 text-xs text-black transition-all duration-500 hover:underline hover:underline-offset-4 dark:border-white/20 dark:text-white sm:text-base md:text-lg"
                >
                  <FaGlobeEurope />
                  {project.deployURL === "Indisponível"
                    ? "Indisponível"
                    : "Acessar Projeto"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardProject;
