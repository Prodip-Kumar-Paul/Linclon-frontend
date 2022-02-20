import React from "react";
import { ErrorMessage } from "formik";

export default function ErrorMsg(props) {
   return (
      <div className="text-red-600 text-right">
         <ErrorMessage name={props.name} />
      </div>
   );
}
