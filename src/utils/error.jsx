import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="rounded-[.5rem] px-3 py-5 max-w-[25rem] mx-auto my-[5rem] bg-white dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)] dark:text-white text-lg text-center">
          <div className="my-4 text-violet-900 dark:text-white">404 Error: Page Not Found !</div>
          <Link className=" bg-cyan-600 px-4 py-2 rounded-full text-white" to={"/"}>
            Go Home
          </Link>
      </section>
    </>
  );
};
export default Error;
