import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

//modules
import Nav from "./utils/nav";
import Home from "./pages/landing";
import Error from "./pages/error";
import Profile from "./pages/profile";
import Project from "./pages/Project";
import LogIn from "./pages/login";
import LogOut from "./utils/logOut";

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
      // {
      //   path: "/About",
      //   element: <About />,
      // },
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
      // {
      //   path: "/About",
      //   element: <About />,
      // },

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
  const token = sessionStorage.getItem("token");
  const routes = token ? authorized : unAuthorized;
  return useRoutes(routes);
};

export default PageRoutes;
