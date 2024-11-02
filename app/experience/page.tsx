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
              <h3 className="text-xs font-semibold sm:text-sm md:text-base lg:text-xl">
                Empresa: {item.Company}
              </h3>
              <span className="flex justify-between">
                <p className="lg:text text-xs font-bold sm:text-sm md:text-base">
                  Cargo: {item.Role}
                </p>
                <p className="lg:text text-nowrap text-xs text-gray-500 sm:text-sm md:text-base">
                  {item.Period}
                </p>
              </span>
              <p className="lg:text text-justify text-xs sm:text-sm md:text-base">
                {item.Description}
              </p>
              <p className="lg:text text-justify text-xs sm:text-sm md:text-base">
                {item.Description2}
              </p>
              {item.Technologies && (
                <div className="flex flex-wrap gap-2">
                  <span className="lg:text text-xs sm:text-sm md:text-base">
                    Techs:
                  </span>
                  {item.Technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="dark: rounded-md bg-gray-200 p-1 text-xs text-black md:px-2 md:py-1"
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
