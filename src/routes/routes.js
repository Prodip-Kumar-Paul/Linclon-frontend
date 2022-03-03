import React, { useContext } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";

//modules
import Nav from "../components/nav";
import Home from "../pages/landing";
import Error from "../utils/error";
import Profile from "../pages/profile";
import Project from "../pages/Project";
import LogIn from "../pages/login";
import LogOut from "../pages/logOut";
// import CreateProject from "./components/Projects/CreateProject";
import VideoUploader from "../components/Projects/VideoUploader";
import AuthContext from "../store/auth-context";

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
            element: <CreateProjectForm />,
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
            element: <CreateProjectForm />,
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
   const authCtx = useContext(AuthContext);
   const routes = authCtx.isLoggedIn ? authorized : unAuthorized;
   return useRoutes(routes);
};

export default PageRoutes;
