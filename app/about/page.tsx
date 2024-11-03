import React from "react";
import { aboutData } from "./mock";

export default function About() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <main className="flex h-full w-[70%] flex-col items-center justify-center gap-6">
        <h2>Techs:</h2>
        <div className="grid grid-cols-2 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {aboutData.map((tech, index) => (
            <div
              className="flex transform cursor-pointer flex-col-reverse items-center gap-4 rounded-lg border border-black p-4 transition-all duration-300 ease-in-out hover:scale-105"
              key={index}
            >
              <h2 className="text-nowrap text-sm sm:text-lg md:text-xl lg:text-xl">
                {tech.title}
              </h2>
              {tech.aboutTechs.map((Icon, index) => (
                <Icon key={index} className="text-5xl" />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
