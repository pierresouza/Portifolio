"use client";
import React, { useState, useEffect } from "react";
import { ProjectsMock } from "./mock";
import Image from "next/image";
import Link from "next/link";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = (e: MediaQueryListEvent) => {
      setTargetReached(e.matches);
    };

    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width]);

  return targetReached;
};

export default function Projects() {
  const isSmallScreen = useMediaQuery(1024);

  return (
    <div className="flex h-full justify-center">
      <div className="flex w-4/5 flex-col items-center justify-center gap-4">
        {ProjectsMock.Project.map((project, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center gap-8 md:flex-row"
          >
            {isSmallScreen || index % 2 === 0 ? (
              <>
                <div className="flex flex-col gap-4 p-2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="h-auto w-full max-w-[500px] border border-black"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <p className="flex justify-center text-xl font-bold">
                    {project.name}
                  </p>
                  <p className="max-w-screen-md text-justify text-sm sm:text-base md:text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-col">
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
                    <span className="text-sm sm:text-base md:text-lg">
                      Deploy: &nbsp;
                      <Link
                        href={project.deployURL || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 transition-transform duration-500 ease-in-out hover:scale-110"
                      >
                        {project.deployURL}
                      </Link>
                    </span>
                  </div>
                  <hr className="border border-black dark:border-white" />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center gap-2">
                  <p className="flex justify-center text-xl font-bold">
                    {project.name}
                  </p>
                  <p className="max-w-screen-md text-justify text-sm sm:text-base md:text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-col">
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
                    <span className="text-sm sm:text-base md:text-lg">
                      Deploy: &nbsp;
                      <Link
                        href={project.deployURL || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 transition-transform duration-500 ease-in-out hover:scale-110"
                      >
                        {project.deployURL}
                      </Link>
                    </span>
                  </div>
                  <hr className="border border-black dark:border-white" />
                </div>
                <div className="flex flex-col gap-4 p-2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="h-auto max-h-[500px] w-full max-w-[500px]"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
