import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import GitHub from "../assets/images/GitHub-Mark.png";
import Footer from "../components/footer";
import Loading from "../utils/loading";

//Apis
import apis from "../apis/apis";
import AuthContext from "../store/auth-context";

const LogIn = () => {
   const [loading, setLoading] = useState(false);
   const [e_mail, setE_mail] = useState("");
   const [userType, setUserType] = useState("");
   const navigate = useNavigate();
   const [getCode, setGetCode] = useSearchParams("");
   const code = getCode.get("code");

   const authCtx = useContext(AuthContext);
   const afterClickLogin = async () => {
      setLoading(true);
      const code = getCode.get("code");
      const res = await axios.post(`${apis.baseURL}${apis.LOGIN}`, {
         userType: userType,
         email: e_mail,
         githubCode: code,
      });
      if (res.data.status) {
         console.log(res.data);
         authCtx.login(res.data.data);
         navigate("/", { replace: true });
      } else {
         setLoading(false);
         Swal.fire("Error Occured", `${res.data.message}`, "error");
      }
   };

   return (
      <>
         {loading && <Loading />}
         <section className=" rounded-[.5rem] max-w-[25rem] mx-auto my-[5rem] bg-white dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)] dark:text-white text-lg">
            <section className="flex flex-col gap-2 mx-auto max-w-[15rem] my-5">
               <br />
               <div>
                  <img
                     className="mx-auto rounded-full"
                     src={GitHub}
                     alt="GitHub"
                     height="90px"
                     width="90px"
                  />
                  <section className="flex">
                     <a
                        href={apis.GITHUB_AUTH_API}
                        className="dark:bg-zinc-900 block hover:text-green-900 rounded-lg bg-black text-white text-center ml-3 mb-2 px-4 min-w-fit font-bold"
                     >
                        Continue with GitHub
                     </a>
                     <div className="self-start relative left-3">
                        {code ? "✔" : ""}
                     </div>
                  </section>
               </div>
               <select
                  onChange={(e) => {
                     setUserType(e.target.selectedOptions[0].text);
                  }}
                  className="rounded-full px-3 text-black border-2"
               >
                  <option value="0">User Type ?</option>
                  <option value="1">User</option>
                  <option value="2">Admin</option>
               </select>
               <label className="mx-auto">Email :</label>
               <input
                  type="email"
                  placeholder="eg: email@gmail.com"
                  className="rounded-[.5rem] text-black border-2 px-2"
                  onChange={(e) => {
                     setE_mail(e.target.value);
                  }}
                  required
               />
               <a href="/" className="mr-32 hover:text-green-900">
                  forget email?
               </a>
               <button
                  onClick={afterClickLogin}
                  className="mx-auto bg-cyan-500 py-1 px-2 hover:text-black cursor-pointer text-white rounded-md"
               >
                  Log In
               </button>
            </section>
            <p className="font-thin text-center mx-[3rem] dark:text-white text-slate-500 mt-10">
               *by continuing this you can also create a new account with GitHub
            </p>
         </section>
         <Footer />
      </>
   );
};

export default LogIn;
