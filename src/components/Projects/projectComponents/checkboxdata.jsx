import React, { useState } from 'react';
export default function Checkboxdata({props}) {
    const [val, setVal] = useState(false);
  return (
      
    <figure className="border-2 px-1" key={props}>
      <input type="checkbox" checked={val} onChange={() => setVal(!val)} />
      <span>{props}</span>
    </figure>
  );
}
