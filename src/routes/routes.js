import React, { Suspense, useContext } from "react";
import { Routes, Route, useRoutes, Navigate } from "react-router-dom";

//modules
import Nav from "../components/nav";
import Home from "../pages/home";
import Error from "../utils/error";
import Profile from "../pages/profile";
import Project from "../pages/Project";
import LogIn from "../pages/login";
import LogOut from "../pages/logOut";
// import CreateProject from "./components/Projects/CreateProject";
import VideoUploader from "../components/Projects/VideoUploader";
import AuthContext from "../store/auth-context";
import Loading from "../utils/loading";

const CreateProjectForm = React.lazy(() =>
   import("../components/Projects/CreateProjectForm")
);

const authorized = [
   {
      path: "/",
      element: <Nav />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/projects",
            element: <Project />,
         },
         {
            path: "/create-project",
            element: <Suspense fallback={<Loading/>} ><CreateProjectForm /></Suspense>,
         },
         {
            path: "/Profile",
            element: <Profile />,
         },
         {
            path: "/linclonauth",
            element: <LogOut />,
         },
         {
            path: "*",
            element: <Error />,
         },
      ],
   },
];

const unAuthorized = [
   {
      path: "/",
      element: <Nav />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/projects",
            element: <Project />,
         },
         {
            path: "/create-project",
            element: <Suspense fallback={<Loading/>} ><CreateProjectForm /></Suspense>,
         },
         {
            path: "/upload-project-video",
            element: <VideoUploader />,
         },
         {
            path: "/linclonauth",
            element: <LogIn />,
         },
         {
            path: "*",
            element: <Error />,
         },
      ],
   },
];

const PageRoutes = () => {
   return (
      <>
      <Routes>
         <Route path="/" element={<Nav/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<Project/>}/>
            <Route path="linclonauth" element={<LogIn/>}/>
            <Route path="linclonauth" element={<LogOut/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="create-project" element={<Suspense fallback={<Loading/>} ><CreateProjectForm /></Suspense>}/>
            <Route path="*" element={<Error/>}/>
         </Route>
      </Routes>
      </>
   )
   // const authCtx = useContext(AuthContext);
   // const routes = authCtx.isLoggedIn ? authorized : unAuthorized;
   // return useRoutes(routes);
};

export default PageRoutes;
