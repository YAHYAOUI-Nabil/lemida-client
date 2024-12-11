import React from "react";
import Main from "./Main";
import Aside from "./Aside";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-row md:px-desktop_padding sm:px-tablet_padding px-mobile_padding my-14">
      <Helmet>
        <title>Politique de confidentialité</title>
      </Helmet>
      <Main />
      <Aside />
    </div>
  );
};

export default PrivacyPolicy;
