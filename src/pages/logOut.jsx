import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  let navigate = useNavigate();
  const onLogOut = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("email");
      navigate("/linclonauth", { replace: true });
    }
  };
  return (
    <>
      <section className="rounded-[.5rem] px-3 py-5 max-w-[25rem] mx-auto my-[5rem] bg-white dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)] dark:text-white text-lg text-center">
        <div>
          <p className="font-bold ">✔You Are Logged In !</p>
          <p className="font-thin text-gray-500">
            *If you are trying to change the user Type then first Log Out and
            Login again with selecting preferred user Type.
          </p>
          <button
            onClick={onLogOut}
            className="bg-cyan-500 text-white my-2 px-2 py-1 rounded-md"
          >
            Log Out
          </button>
        </div>
      </section>
    </>
  );
};

export default LogOut;
