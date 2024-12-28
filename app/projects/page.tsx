"use client";
import React from "react";
import CardProject from "../../components/CardProject";

function Projects() {
  return (
    <div className="flex w-screen items-center">
      <div className="flex w-full flex-col items-center justify-center gap-14">
        <CardProject />
      </div>
    </div>
  );
}

export default Projects;
