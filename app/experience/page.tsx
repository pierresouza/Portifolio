import React from "react";
import { ExperenceMock } from "./mock";

export default function Experience() {
  return (
    <div className="flex h-[90vh] items-center justify-center gap-4 px-12">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold">Experience</h1>
        {ExperenceMock.Job.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">{item.Company}</h3>
            <span className="flex justify-between">
              <p className="font-bold">{item.Role}</p>
              <p className="text-gray-500">{item.Period}</p>
            </span>
            <p>{item.Description}</p>
            <p>{item.Description2}</p>
            {item.Technologies && (
              <div className="flex flex-wrap gap-2">
                {item.Technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-gray-200 px-2 py-1"
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
  );
}
