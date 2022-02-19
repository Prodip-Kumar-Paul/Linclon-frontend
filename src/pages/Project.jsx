import Filter from "../components/Projects/filters";
import ProjectCard from "../components/Projects/projectComponents/projectCard";
import Tags from "../components/Projects/projectComponents/tags";
import { ProjectProvider } from "../components/Projects/contextApiProject/contextProject";
const Project = () => {
  return (
    <ProjectProvider>
      <div className="flex bg-white dark:bg-black my-10 py-5 mx-auto">
        <Filter />
        <div className="flex flex-col grow mx-4">
        <p className="bg-white rounded-lg px-4 py-2 text-[1.5rem]">All Projects</p>
        <Tags/>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
     </ProjectProvider>
  );
};

export default Project;
