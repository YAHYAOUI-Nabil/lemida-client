import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = React.lazy(() => import("./pages/home"));
const Trainings = React.lazy(() => import("./pages/trainings"));
const Contact = React.lazy(() => import("./pages/contact"));
const About = React.lazy(() => import("./pages/about"));
const LegalNotices = React.lazy(() => import("./pages/legalNotices"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy"));
const TermsOfUse = React.lazy(() => import("./pages/termsAndConditionsOfUse"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/formations"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Trainings />
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route
        path="/a-propos"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path="/mentions-legales"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <LegalNotices />
          </React.Suspense>
        }
      />
      <Route
        path="/politiques-de-confidentialite"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </React.Suspense>
        }
      />
      <Route
        path="/conditions-generales"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TermsOfUse />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
