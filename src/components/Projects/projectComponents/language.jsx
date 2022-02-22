import React, { useState,useEffect } from "react";
import Data from "./data";

export default function Language() {
const [toggleSlide, setToggleSlide] = useState(false);
useEffect(() => {
  if(window.screen.width<=678) setToggleSlide(true);
}, []);
  return (
    <>
      <div className="mx-auto rounded-lg max-w-[90%] border-2 my-2 dark:text-neutral-100">
        <section className="flex ">
          <div className="grow mx-3 my-2">Language</div>
          <span
            onClick={() => setToggleSlide(!toggleSlide)}
            className="cursor-pointer text-center"
          >
            🔽
          </span>
        </section>
        <section className="max-h-[15rem] overflow-auto">{toggleSlide || <Data />}</section>
      </div>
    </>
  );
}
