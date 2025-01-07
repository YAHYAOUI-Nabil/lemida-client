import "./App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AuthenticationApp from "./AuthenticationApp";
import MainApp from "./MainApp";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const location = useLocation();

  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <MainApp />
    </React.Suspense>
  );
};

export default App;
