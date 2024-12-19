import "./App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AuthenticationApp from "./AuthenticationApp";
import MainApp from "./MainApp";

const App = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      {location.pathname.includes("connexion") ? (
        <AuthenticationApp />
      ) : (
        <MainApp />
      )}
    </React.Fragment>
  );
};

export default App;
