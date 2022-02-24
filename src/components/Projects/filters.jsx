import React, { useContext, useState } from "react";
import Language from "./projectComponents/language";
import { ProjectContext } from "./contextApiProject/contextProject";
const Filter = () => {
  const [tag, setTag] = useContext(ProjectContext);
  const clearTagsSelected = () => {
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((e) => (e.checked = false));
    setTag([]);
  };
  return (
    <>
      <div className="flex flex-col min-w-[25%] h-fit mx-4 bg-white rounded-lg">
        <section className="flex ">
          <p className="text-[1.5rem] grow pl-4">Filters</p>
          <button
            className="text-white bg-cyan-500 my-1 mr-2 px-2 rounded-md"
            onClick={clearTagsSelected}
          >
            Clear All
          </button>
        </section>
        <section className="mx-2 my-2 dark:bg-black rounded-lg">
          <Language />
          <Language />
          <Language />
        </section>
      </div>
    </>
  );
};

export default Filter;
