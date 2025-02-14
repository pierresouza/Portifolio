import React from "react";
import { ExperienceMock } from "./mock";

export default function Experience() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-4/5 justify-center gap-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-sm font-bold md:text-base lg:text-lg xl:text-2xl">
            Experiencia
          </h1>
          {ExperienceMock.Job.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-md items-center sm:text-sm md:text-base lg:text-xl">
                <b>Empresa:</b> {item.Company}
              </h3>
              <p className="lg:text text-md items-center sm:text-sm md:text-base">
                <b>Cargo:</b> {item.Role}
              </p>
              <p className="lg:text text-md items-center sm:text-sm md:text-base">
                <b>Período:</b> {item.Period}
              </p>
              <p className="lg:text text-md max-w-screen-lg items-center text-justify sm:text-sm md:text-base">
                <b>Descrição:</b> {item.Description}
              </p>
              {item.Description2 && (
                <p className="lg:text text-md max-w-screen-lg items-center text-justify sm:text-sm md:text-base">
                  {item.Description2}
                </p>
              )}
              {item.Technologies && (
                <div className="flex max-w-screen-lg flex-wrap items-center gap-3">
                  <span className="lg:text text-md font-bold sm:text-sm md:text-base">
                    Techs:
                  </span>
                  {item.Technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="dark: flex items-center justify-center rounded-md bg-gray-200 p-1 text-sm text-black shadow-sm shadow-black md:px-2 md:py-1 dark:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <hr className="max-w-screen-lg border-black dark:border-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
