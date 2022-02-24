import React, { useState } from "react";
import image from "../../../assets/images/GitHub-Octobat.png";
export default function ProjectCard() {
  // const [projectData, setprojectData] = useState([[{"Project Name"}]]);
  return (
    <>
      <fieldset className="flex hover:scale-[1.01] transition-all max-h-[10rem] border-2 bg-white dark:bg-black dark:text-stone-50 grow mx-4 my-2 rounded-lg px-4 py-4">
          <legend className="text-[1.25rem] px-1">Project Name Project</legend>
        <img src={image} alt="" className="h-[5rem] w-[5rem]" />
        <section className="mx-4">
          <div>
            <span>javascript </span>
            <span>javascript </span>
            <span>javascript </span>
          </div>
        </section>
      </fieldset>
    </>
  );
}
