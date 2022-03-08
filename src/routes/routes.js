import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//modules
import Nav from "../components/nav";
import Home from "../pages/home";
import Error from "../utils/error";
import Profile from "../pages/profile";
import Project from "../pages/Project";
import LogIn from "../pages/login";
import LogOut from "../pages/logOut";
import VideoUploader from "../components/Projects/VideoUploader";
import Loading from "../utils/loading";
import Unauthorized from "../utils/Unauthorized.jsx";
import RequireAuth from "./RequireAuth";

const CreateProjectForm = React.lazy(() =>
   import("../components/Projects/CreateProjectForm")
);

const ROLES = {
   USER: "User",
   ADMIN: "Admin",
};

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
            element: (
               <Suspense fallback={<Loading />}>
                  <CreateProjectForm />
               </Suspense>
            ),
         },
         {
            path: "/Profile",
            element: <Profile />,
         },
         {
            path: "/logout",
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
            element: (
               <Suspense fallback={<Loading />}>
                  <CreateProjectForm />
               </Suspense>
            ),
         },
         {
            path: "/upload-project-video",
            element: <VideoUploader />,
         },
         {
            path: "/login",
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
            <Route path="/" element={<Nav />}>
               <Route path="/" element={<Home />} />
               <Route path="projects" element={<Project />} />
               <Route path="login" element={<LogIn />} />
               <Route path="logout" element={<LogOut />} />
               <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
                  <Route path="profile" element={<Profile />} />
               </Route>
               <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                  <Route
                     path="create-project"
                     element={
                        <Suspense fallback={<Loading />}>
                           <CreateProjectForm />
                        </Suspense>
                     }
                  />
               </Route>
               <Route path="unauthorized" element={<Unauthorized />} />
               <Route path="*" element={<Error />} />
            </Route>
         </Routes>
      </>
   );
};

export default PageRoutes;
