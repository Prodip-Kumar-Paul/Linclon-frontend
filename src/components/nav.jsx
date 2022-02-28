import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

//icons :
import moon from "../assets/images/110827_moon_icon.png";
import sun from "../assets/images/icons8-sun-48.png";
import search from "../assets/images/314807_search_icon.png";
import Linclon from "../assets/images/Capture.JPG";
import AuthContext from "../store/auth-context";
import { Button } from "@mui/material";

const Nav = () => {
   const [theme, setTheme] = useState(false);
   const authCtx = useContext(AuthContext);
   let themeChange = () => {
      if (theme) {
         setTheme(false);
         document.documentElement.classList.remove("dark");
         document.body.style.backgroundColor = "rgb(192,192,192)";
      } else {
         setTheme(true);
         document.documentElement.classList.add("dark");
         document.body.style.backgroundColor = "rgb(0,0,0)";
      }
   };

   const navigation = [
      ["/", "Home"],
      ["/about", "About"],
      ["/projects", "Projects"],
   ];

   return (
      <>
         <nav
            id="navTop"
            className="text-white rounded-full bg-gradient-to-r from-cyan-500 via-violet-900 to-violet-900 py-2 xs:overflow-auto "
         >
            <section className="flex flex-row gap-6 text-xl ">
               <img
                  src={Linclon}
                  alt=""
                  className="rounded-full block xs:w-[100px] md:w-[150px] animate-pulse"
                  height="50px"
               ></img>
               {navigation.map(([path, name], index) => {
                  return (
                     <Link
                        key={index}
                        className="dark:hover:text-slate-900 px-3 py-1"
                        to={path}
                     >
                        {name}
                     </Link>
                  );
               })}
               <section className="grow-[2] shrink"></section>
               <article className="flex animate-pulse grow rounded-full min-w-[4rem] bg-white px-1 border-2 border-slate-400 text-black">
                  <img src={search} width="25px" alt="" />
                  <input
                     className=" grow placeholder:italic focus:outline-none rounded-full pl-1 min-w-[2rem]"
                     type="text"
                     placeholder="Search..."
                  />
               </article>
               {!authCtx.isLoggedIn ? (
                  <Link
                     to={"/linclonauth"}
                     className="cursor-pointer py-1 px-2 rounded-[.2em] bg-cyan-500 text-[1rem]"
                  >
                     LogIn
                  </Link>
               ) : (
                  <Button
                     className=" px-2 bg-red-500 text-[1rem] text-black"
                     onClick={authCtx.logout}
                  >
                     LogOut
                  </Button>
               )}

               <article
                  onClick={themeChange}
                  className="cursor-pointer shrink-0"
               >
                  <img
                     src={theme ? sun : moon}
                     alt=""
                     height="25px"
                     width="30px"
                     className="animate-bounce"
                  />
               </article>
               <Link className=" dark:hover:text-black py-1 px-3" to="/profile">
                  Profile
               </Link>
               <article></article>
            </section>
         </nav>
         <Outlet />
      </>
   );
};
export default Nav;
