import { Link } from "react-router-dom";

const Error = () => {
   return (
      <>
      <div className="flex justify-center dark:text-white">
         <h1>404 not Found!</h1>
         <Link className=" bg-green-600 m-5 p-2 rounded-full" to={"/"}>
            Go Back
         </Link>
      </div>
      </>
   );
};
export default Error;
