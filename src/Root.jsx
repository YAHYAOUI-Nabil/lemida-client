import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import { AppContextProvider } from "./app/context/AppContext";
import App from "./App";

function Root() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <React.Suspense fallback={null}>
          <App />
        </React.Suspense>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default Root;
