import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Formik, Field, Form } from "formik";

export default function CreateProject() {
   const [domain, setDomain] = useState(["WEB", "APP", "AI", "ML"]);
   const [skill, setSkill] = useState(["js", "MERN", "node", "React"]);

   return (
      <>
         <Formik
            initialValues={{
               projectName: "",
               description: "Leave a short ",
               teamLength: 1,
            }}
         >
            <div className="w-full m-5 p-5">
               <div className="w-80 mb-6">
                  <label
                     htmlFor="base-input"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                     Project Name
                  </label>
                  <input
                     type="text"
                     id="projectName"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label
                     htmlFor="description"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                     Description
                  </label>
                  <textarea
                     id="description"
                     rows="4"
                     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Leave a short description..."
                  ></textarea>
                  <div>
                     <label
                        htmlFor="teamLength"
                        className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                     >
                        Team Length
                     </label>
                     <input
                        type="number"
                        id="teamLength"
                        min="1"
                        max="5"
                        defaultValue={1}
                        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />

                     <select
                        id="githubRepo"
                        className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     >
                        <option selected>Select github repo</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                     </select>

                     <div className="flex justify-start m-4 gap-1">
                        <h2 className="font-bold mr-5">Urgency </h2>
                        <div className="flex items-center mb-4">
                           <input
                              id="country-option-1"
                              type="radio"
                              name="countries"
                              value="USA"
                              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                              aria-labelledby="country-option-1"
                              aria-describedby="country-option-1"
                              checked
                           />
                           <label
                              htmlFor="country-option-1"
                              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              High
                           </label>
                        </div>
                        <div className="flex items-center mb-4">
                           <input
                              id="country-option-1"
                              type="radio"
                              name="countries"
                              value="USA"
                              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                              aria-labelledby="country-option-1"
                              aria-describedby="country-option-1"
                              checked
                           />
                           <label
                              htmlFor="country-option-1"
                              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Medium
                           </label>
                        </div>
                        <div className="flex items-center mb-4">
                           <input
                              id="country-option-1"
                              type="radio"
                              name="countries"
                              value="USA"
                              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                              aria-labelledby="country-option-1"
                              aria-describedby="country-option-1"
                              checked
                           />
                           <label
                              htmlFor="country-option-1"
                              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                           >
                              Low
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-1/4 bg-gray-50 text-gray-900 dark:text-gray-300 dark:bg-gray-600 ">
                  <Multiselect
                     className="mt-5"
                     isObject={false}
                     placeholder="Select Domains"
                     onRemove={(event) => {
                        console.log(event);
                     }}
                     onSelect={(event) => {
                        console.log(event);
                     }}
                     options={domain}
                     showCheckbox
                  />
                  <Multiselect
                     isObject={false}
                     placeholder="Select Skills"
                     onRemove={(event) => {
                        console.log(event);
                     }}
                     onSelect={(event) => {
                        console.log(event);
                     }}
                     options={skill}
                     showCheckbox
                  />
               </div>
            </div>
         </Formik>
      </>
   );
}
