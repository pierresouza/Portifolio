import React from "react";
import { ProjectsMock } from "./mock";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex justify-center">
      <div className="flex h-full w-4/5 flex-col items-center justify-center gap-4">
        {ProjectsMock.Project.map((project, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center gap-2 md:flex-row"
          >
            <div className="flex flex-col gap-2 p-2">
              <a href={project.repoURL} target="_blank" rel="noreferrer">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="h-40 w-40 rounded-lg"
                  objectFit="cover"
                  quality={100}
                />
              </a>
              <p className="flex justify-center text-lg font-semibold">
                {project.name}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="max-w-screen-sm text-justify text-sm sm:text-base md:text-lg">
                {project.description}
              </p>
              <span className="text-sm sm:text-base md:text-lg">
                Repositório: &nbsp;
                <Link
                  href={project.repoURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 transition-transform duration-500 ease-in-out hover:scale-110"
                >
                  {project.repoURL}
                </Link>
              </span>
              <hr className="border border-black dark:border-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
