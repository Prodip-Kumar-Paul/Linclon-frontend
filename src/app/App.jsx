import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

//modules
import Nav from "../modules/nav";
import Home from "../modules/landing";
import Error from "../modules/error";
import Profile from "../modules/profile";
import Project from "../pages/Project";
import LogIn from "../modules/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/linclonauth" element={<LogIn/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
