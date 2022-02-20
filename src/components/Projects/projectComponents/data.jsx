import React, { useContext, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../contextApiProject/contextProject";
import tagData from "./tagData";
export default function Data() {
  const checkbox=useRef();
  const [tag, setTag] = useContext(ProjectContext);
  const [checkBox, setCheckBox] = useState(false);
  const navigate = useNavigate();

  const clearTagsSelected = () => {
    navigate("/projects", { replace: true });
  };
  const showTag = (e) => {
    const newTag = tag.filter((data) => data !== e.target.innerHTML);
    if (newTag.length === tag.length)
    {

      setTag([...tag, e.target.innerHTML]);
    } 
    else setTag([...newTag]);
  };
  return (
    <div>
      <button onClick={clearTagsSelected}>s</button>
      <figure className="border-2 px-1">
        {tagData.map((data, index) => {
          return (
            <figure className="border-2 px-1" key={index}>
              <input type="checkbox"  />
              <span className="cursor-pointer" onClick={showTag}>{data}</span>
            </figure>
          );
        })}
      </figure>
    </div>
  );
}
