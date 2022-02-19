import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../ErrorMsg";

const ProjectCreateSchema = Yup.object().shape({
   projectName: Yup.string().required("Required"),
   email: Yup.string().email("Invalid email").required("Required"),
});

export default function CreateProjectForm() {
   const repoDetails = [
      {
         name: "test",
      },
      {
         name: "bbbbbbb",
      },
   ];

   return (
      <>
         <Formik
            initialValues={{
               projectName: "",
               description: "",
               teamLength: 1,
               githubRepo: "",
            }}
            validationSchema={ProjectCreateSchema}
            onSubmit={async (values) => {
               await new Promise((r) => setTimeout(r, 500));
               alert(JSON.stringify(values, null, 2));
            }}
         >
            <Form>
               <div className="w-full m-5 p-5">
                  <div className="w-80 mb-6">
                     <label
                        htmlFor="projectName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                     >
                        Project Name
                     </label>
                     <Field
                        id="projectName"
                        name="projectName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     <ErrorMsg name="projectName" />
                     <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                     >
                        Description
                     </label>
                     <Field
                        id="description"
                        rows="4"
                        name="description"
                        as="textarea"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a short description..."
                     />

                     <label
                        htmlFor="teamLength"
                        className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                     >
                        Team Length
                     </label>
                     <Field
                        type="number"
                        id="teamLength"
                        name="teamLength"
                        min="1"
                        max="5"
                        defaultValue="1"
                        className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />

                     <Field
                        id="githubRepo"
                        name="githubRepo"
                        as="select"
                        className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     >
                        <option defaultValue>Select Github Repo</option>
                        {repoDetails.map((repo) => {
                           return (
                              <option value={repo.name}>{repo.name}</option>
                           );
                        })}
                     </Field>

                     <div className="flex justify-start m-4 gap-1 text-gray-900 dark:text-gray-200">
                        <h2 className="font-bold mr-5">Requirement</h2>
                        <div
                           role="group"
                           className="flex items-center mb-4"
                           aria-labelledby="my-radio-group"
                        >
                           <label>
                              <Field
                                 type="radio"
                                 name="requirement"
                                 value="High"
                              />
                              High
                           </label>
                           <label>
                              <Field
                                 type="radio"
                                 name="requirement"
                                 value="Medium"
                              />
                              Medium
                           </label>
                           <label>
                              <Field
                                 type="radio"
                                 name="requirement"
                                 value="Low"
                              />
                              Low
                           </label>
                        </div>
                     </div>
                     <div className="text-center">
                        <button
                           type="submit"
                           className="bg-cyan-400 rounded-full px-2 dark:text-white"
                        >
                           Submit
                        </button>
                     </div>
                  </div>
               </div>
            </Form>
         </Formik>
      </>
   );
}
