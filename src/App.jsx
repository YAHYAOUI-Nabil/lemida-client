import "./App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AuthenticationApp from "./AuthenticationApp";
import MainApp from "./MainApp";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      {location.pathname.includes("connexion") ? (
        <React.Suspense fallback={<LoadingSpinner />}>
          <AuthenticationApp />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<LoadingSpinner />}>
          <MainApp />
        </React.Suspense>
      )}
    </React.Fragment>
  );
};

export default App;
