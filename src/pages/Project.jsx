import FilterProject from "../components/Projects/FilterProject";
import ProjectInfo from "../components/Projects/ProjectInfo";

const Project = () => {
   return (
      <>
         <div className="text-center text-3xl flex justify-center dark:text-white">
            <ProjectInfo />
            <FilterProject />
         </div>
      </>
   );
};

export default Project;
