import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "../store/auth-context";
import PageRoutes from "../routes/routes";

const App = () => {
   return (
      <AuthContextProvider>
         <Router>
            <PageRoutes />
         </Router>
      </AuthContextProvider>
   );
};

export default App;
