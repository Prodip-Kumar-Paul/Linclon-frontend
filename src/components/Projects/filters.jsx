import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Language from "./projectComponents/language";
import { ProjectContext } from "./contextApiProject/contextProject";
const Filter = () => {
  const navigate = useNavigate();

  const clearTagsSelected = () => {
    navigate("/projects", { replace: true });
  };
  return (
    <>
      <div className="flex flex-col min-w-[25%] h-[2rem] mx-4 bg-white rounded-lg">
        <p className="text-[1.5rem] mx-auto">Filters</p>
        <button className="bg-cyan-500 max-w-fit mx-auto px-1" onClick={clearTagsSelected}>Clear All</button>
        <section className="mx-4 ">
          <Language />
          <Language />
          <Language />
        </section>
      </div>
    </>
  );
};

export default Filter;
