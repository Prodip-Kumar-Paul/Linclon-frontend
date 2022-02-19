import React from "react";
import { ErrorMessage } from "formik";

export default function ErrorMsg() {
   return (
      <div className="text-red-600 text-right">
         <ErrorMessage />
      </div>
   );
}
