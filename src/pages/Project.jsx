import React, { useState, useEffect } from "react";
import Filter from "../components/Projects/filters";
import ProjectCard from "../components/Projects/projectComponents/projectCard";
import Tags from "../components/Projects/projectComponents/tags";
import { ProjectProvider } from "../components/Projects/contextApiProject/contextProject";
import Footer from "../components/footer";
import api from "../apis/apis";
import httpUrl from "../apis/interceptor";

const Project = () => {
   console.log("Project pg RUNNING");
   useEffect(() => {
      const serverReq = async () => {
         const res = await httpUrl.get(api.GET_ALL_PROJECTS);
         console.log(res.data);
      };
      serverReq();
   }, []);
   return (
      <ProjectProvider>
         <div className="flex xs:flex-col md:flex-row bg-neutral-100 dark:bg-black mb-[5rem] py-2 mx-auto">
            <Filter />
            <div className="flex flex-col grow mx-4">
               <p className="xs:mt-[2rem] md:mt-0 bg-white rounded-lg px-4 py-2 text-[1.5rem]">
                  All Projects
               </p>
               <Tags />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
               <ProjectCard />
            </div>
         </div>
         <Footer />
      </ProjectProvider>
   );
};

export default React.memo(Project);
