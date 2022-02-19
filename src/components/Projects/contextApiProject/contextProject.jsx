import React, {useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
    const [tag, setTag] = useState([]);
  return (
    <>
      <ProjectContext.Provider value={[tag,setTag]}>{props.children}</ProjectContext.Provider>
    </>
  );
};
