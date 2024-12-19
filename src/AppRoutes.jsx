import React from "react";
import { Route, Routes } from "react-router-dom";

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
      <Route index element={<Home />} />
      <Route path="/formations" element={<Trainings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/mentions-legales" element={<LegalNotices />} />
      <Route
        path="/politiques-de-confidentialite"
        element={<PrivacyPolicy />}
      />
      <Route path="/conditions-generales" element={<TermsOfUse />} />
    </Routes>
  );
};

export default AppRoutes;
