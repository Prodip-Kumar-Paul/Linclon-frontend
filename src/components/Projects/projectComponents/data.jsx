import React, { useContext } from "react";
import { ProjectContext } from "../contextApiProject/contextProject";
import tagData from "./tagData";
export default function Data() {
  const [tag, setTag] = useContext(ProjectContext);

  const showTag = (e) => {
    const newTag = tag.filter((data) => data !== e.target.value);
    if (newTag.length === tag.length) {
      setTag([...tag, e.target.value]);
    } else {
      setTag([...newTag]);
    }
  };
  return (
    <div>
      <figure className="border-2 px-2 py-2">
        {tagData.map((data, index) => {
          return (
            <article key={data} className="border-b-2 border-violet-600 px-1 py-1">
              <input type="checkbox" value={data} onChange={showTag} />
              <span className="px-2 cursor-default hover:scale-[1.01] transition-all inline-block">{data}</span>
            </article>
          );
        })}
      </figure>
    </div>
  );
}
