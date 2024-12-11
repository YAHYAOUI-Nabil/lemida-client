import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import React from "react";
import { AppContextProvider } from "./app/context/AppContext";
import App from "./App";

function Root() {
  return (
    <AppContextProvider>
      <HelmetProvider>
        <BrowserRouter>
          <React.Suspense fallback={null}>
            <App />
          </React.Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </AppContextProvider>
  );
}

export default Root;
