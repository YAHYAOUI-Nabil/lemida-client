import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import MostSeenTrainings from "./components/MostSeenTrainings";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lemida</title>
        <meta name="description" content="Welcome to the home page of lemida" />
        <meta name="keywords" content="formation, gestion, finance" />
      </Helmet>
      <section className="flex flex-col gap-10 mb-10">
        <Hero />
        <MostSeenTrainings />
      </section>
    </>
  );
};

export default Home;
