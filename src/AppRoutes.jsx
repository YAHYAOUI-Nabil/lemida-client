import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = React.lazy(() => import("./pages/home"));
const Trainings = React.lazy(() => import("./pages/trainings"));
const SearchTrainings = React.lazy(() => import("./pages/searchTrainings"));
const TrainingDetails = React.lazy(() => import("./pages/trainingDetails"));
const Contact = React.lazy(() => import("./pages/contact"));
const About = React.lazy(() => import("./pages/about"));
const LegalNotices = React.lazy(() => import("./pages/legalNotices"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy"));
const TermsOfUse = React.lazy(() => import("./pages/termsAndConditionsOfUse"));
const CandidateDashboard = React.lazy(() =>
  import("./pages/candidateDashboard")
);
const CandidateProfile = React.lazy(() =>
  import("./pages/candidateDashboard/profile")
);
const CandidateEnrolledTrainings = React.lazy(() =>
  import("./pages/candidateDashboard/enrolledTrainings")
);
const CandidateUpdatePassword = React.lazy(() =>
  import("./pages/candidateDashboard/updatePassword")
);

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
        path="/formations/categorie/:categorie"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Trainings />
          </React.Suspense>
        }
      />
      <Route
        path="/formations/recherches"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <SearchTrainings />
          </React.Suspense>
        }
      />
      <Route
        path="/formations/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TrainingDetails />
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
      <Route
        path="/compte/profil"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <CandidateDashboard />
          </React.Suspense>
        }
      >
        <Route index element={<CandidateProfile />} />
        <Route path="mes-formations" element={<CandidateEnrolledTrainings />} />
        <Route
          path="modifier-mot-de-passe"
          element={<CandidateUpdatePassword />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
