import React, { useState } from "react";
import Data from "./data";

export default function Language() {
  const [accordian, setAccordian] = useState("");
  return (
    <>
      <div className="mx-auto rounded-lg bg-neutral-100 max-w-[90%] border-2 my-2">
        <section className="flex ">
          <div className="grow mx-3 my-2">Language</div>
          <span
            onClick={() => setAccordian(!accordian)}
            className="cursor-pointer"
          >
            🔽
          </span>
        </section>
        <section className="max-h-[15rem] overflow-auto">{accordian || <Data />}</section>
      </div>
    </>
  );
}
