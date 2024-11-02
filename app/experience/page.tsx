import React from "react";
import { ExperenceMock } from "./mock";

export default function Experience() {
  return (
    <div className="flex justify-center">
      <div className="flex h-[90vh] w-[70%] items-center gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-bold md:text-base lg:text-lg xl:text-2xl">
            Experience
          </h1>
          {ExperenceMock.Job.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-xs sm:text-sm md:text-base lg:text-xl">
                <b>Empresa:</b> {item.Company}
              </h3>
              <p className="lg:text text-xs sm:text-sm md:text-base">
                <b>Cargo:</b> {item.Role}
              </p>
              <p className="lg:text text-nowrap text-xs text-gray-500 sm:text-sm md:text-base">
                <b>Período:</b> {item.Period}
              </p>
              <p className="lg:text text-justify text-xs sm:text-sm md:text-base">
                <b>Descrição</b> {item.Description}
              </p>
              <p className="lg:text text-justify text-xs sm:text-sm md:text-base">
                {item.Description2}
              </p>
              {item.Technologies && (
                <div className="flex flex-wrap gap-2">
                  <span className="lg:text text-xs font-bold sm:text-sm md:text-base">
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
