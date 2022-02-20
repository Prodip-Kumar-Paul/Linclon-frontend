import React, { useState, useContext } from "react";
import { ProjectContext } from "../contextApiProject/contextProject";
export default function Tags() {
  const [value,setValue]=useContext(ProjectContext);
  const [tag, setTag] = useState(["tag", "data1"]);
  return (
    <>
      <section>
        {value.map((data) => {
          return (
              <span key={data} className="bg-slate-200 rounded-lg py-1 px-2 mx-1">
                {data}
                <span className="text-green-600 mx-1">x</span>
              </span>
          );
        })}
      </section>
    </>
  );
}
