import logo from "../assets/images/GitHub-Mark.png";

const Project = (props) => {
   const projectDetails = [
      {
         id: 1,
         name: "Testing Project",
         owner: "Test",
         logo: logo,
         teamSize: 4,
         timeLength: "10 hr/week",
         postingTime: "2 minutes ago",
         priority: "HIGH",
      },
      {
         id: 2,
         name: "Test",
         owner: "Test",
         logo: logo,
         teamSize: 4,
         timeLength: "10 hr/week",
         postingTime: "2 minutes ago",
         priority: "LOW",
      },
      {
         id: 3,
         name: "Project",
         owner: "Test",
         logo: logo,
         teamSize: 4,
         timeLength: "10 hr/week",
         postingTime: "2 minutes ago",
         priority: "MEDIUM",
      },
   ];
   return (
      <>
         <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
               <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  All Projects
               </h3>
            </div>
            <ul className="flex flex-col">
               {projectDetails.map((eachProject) => {
                  const priorityColor =
                     eachProject.priority === "HIGH"
                        ? "green"
                        : eachProject.priority === "MEDIUM"
                        ? "yellow"
                        : eachProject.priority === "LOW"
                        ? "red"
                        : "blue";

                  return (
                     <li
                        key={eachProject.id}
                        className="border-gray-400 flex flex-row mb-2"
                     >
                        <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                           <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                              <a href="/projects" className="block relative">
                                 <img
                                    alt="..."
                                    src={eachProject.logo}
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                 />
                              </a>
                           </div>
                           <div className="flex-1 pl-1 md:mr-16">
                              <div className="font-normal dark:text-white">
                                 {eachProject.name}
                              </div>
                              <div className="text-gray-700 dark:text-gray-300 text-sm">
                                 {eachProject.owner}
                              </div>
                              <div className="text-gray-700 dark:text-gray-300 text-sm">
                                 {eachProject.owner}
                              </div>
                              <div className="text-gray-700 dark:text-gray-300 text-sm">
                                 {eachProject.owner}
                              </div>
                           </div>
                           <div className="text-gray-600 dark:text-gray-200 text-xs">
                              <span
                                 className={`bg-${priorityColor}-100 text-${priorityColor}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${priorityColor}-200 dark:text-${priorityColor}-900 mr-10`}
                              >
                                 {eachProject.priority}
                              </span>
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                 <svg
                                    className="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                       clip-rule="evenodd"
                                    ></path>
                                 </svg>
                                 {eachProject.postingTime}
                              </span>
                           </div>
                           <button className="w-24 text-right flex justify-end">
                              <svg
                                 width="12"
                                 fill="currentColor"
                                 height="12"
                                 className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                 viewBox="0 0 1792 1792"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                              </svg>
                           </button>
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
      </>
   );
};

export default Project;
