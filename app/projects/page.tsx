import React from "react";
import { ProjectsMock } from "./mock";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex max-h-fit justify-center">
      <div className="flex h-screen w-4/5 flex-col justify-center gap-4">
        {ProjectsMock.Project.map((project, index) => (
          <div key={index} className="flex w-full justify-center gap-2">
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
              <p className="max-w-screen-md text-justify text-sm">
                {project.description}
              </p>
              <span>
                Repositório:{" "}
                <Link
                  href={project.repoURL}
                  target="_blank"
                  rel="noreferrer"
                  className="scale-110 text-blue-600 transition-all duration-500 ease-in-out"
                >
                  {project.repoURL}
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
