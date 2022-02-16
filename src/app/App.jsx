import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// //modules
// import Nav from "../modules/nav";
// import Home from "../modules/landing";
// import Error from "../modules/error";
// import Profile from "../modules/profile";
// import Project from "../pages/Project";
// import LogIn from "../modules/login";

import PageRoutes from "../routes";
const App = () => {
   return (
      <Router>
         <PageRoutes />
      </Router>
   );
};

export default App;
