import React from "react";
import { ExperienceMock } from "./mock";

export default function Experience() {
  return (
    <div className="flex max-h-fit items-center justify-center">
      <div className="flex w-4/5 justify-center gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-bold md:text-base lg:text-lg xl:text-2xl">
            Experiencia
          </h1>
          {ExperienceMock.Job.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-md items-center sm:text-sm md:text-base lg:text-xl">
                <b>Empresa:</b> {item.Company}
              </h3>
              <p className="lg:text text-md items-center sm:text-sm md:text-base">
                <b>Cargo:</b> {item.Role}
              </p>
              <p className="lg:text text-md items-center sm:text-sm md:text-base">
                <b>Período:</b> {item.Period}
              </p>
              <p className="lg:text text-md max-w-screen-xl items-center text-justify sm:text-sm md:text-base">
                <b>Descrição</b> {item.Description}
              </p>
              <p className="lg:text text-md max-w-screen-xl items-center text-justify sm:text-sm md:text-base">
                {item.Description2}
              </p>
              {item.Technologies && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="lg:text text-md font-bold sm:text-sm md:text-base">
                    Techs:
                  </span>
                  {item.Technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="dark: rounded-md bg-gray-200 p-1 text-sm text-black shadow-sm shadow-black md:px-2 md:py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
