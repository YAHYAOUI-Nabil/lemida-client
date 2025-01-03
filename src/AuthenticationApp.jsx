import React from "react";
import { Route, Routes } from "react-router-dom";

const Authentication = React.lazy(() => import("./pages/authentication"));
const Login = React.lazy(() =>
  import("./pages/authentication/components/Login")
);
const Register = React.lazy(() =>
  import("./pages/authentication/components/Register")
);
const ForgotPassword = React.lazy(() =>
  import("./pages/authentication/components/ForgotPassword")
);

const AuthenticationApp = () => {
  return (
    <Routes>
      <Route path="/connexion" element={<Authentication />}>
        <Route index element={<Login />} />
        <Route path="inscrire" element={<Register />} />
        <Route path="mot-de-passe-oublie" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default AuthenticationApp;
