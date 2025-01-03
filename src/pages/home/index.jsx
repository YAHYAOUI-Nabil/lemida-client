import React from "react";
import Hero from "./components/Hero";
import MostSeenTrainings from "./components/MostSeenTrainings";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Advisors from "./components/Advisors";
import TopCategories from "./components/TopCategories";
import NextTrainings from "./components/NextTrainings";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import { btpAdvisors, medicalAdvisors } from "../../assets/data/advisors";
import { trainings } from "../../assets/data/trainings";
import Slider from "./components/Slider";

AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      {/* <Hero /> */}
      <Slider />
      {/* <NextTrainings /> */}
      <TopCategories />
      <WhyChooseUs />
      <MostSeenTrainings
        title="Nos formations incontournables pour les professionnels de santé !"
        description="Découvrez une sélection de formations essentielles pour perfectionner vos compétences et atteindre vos objectifs professionnels."
        trainings={trainings}
      />
      <Advisors
        label="Un apprentissage d’excellence grâce à nos formateurs spécialisés"
        description="Ils sont au cœur du progrès médical et partagent leur vision pour
            inspirer et guider ceux qui sauvent des vies. Découvrez les
            témoignages de trois figures clés du domaine de la santé."
        advisorsList={medicalAdvisors}
      />
      <MostSeenTrainings
        title="Nos formations essentielles pour les professionnels du bâtiment !"
        description="Explorez notre sélection de formations clés pour développer vos compétences techniques et mener à bien vos projets dans le secteur de la construction."
        trainings={trainings}
      />
      <Advisors
        label="Profitez de l’expertise de professionnels aguerris"
        description="Ils sont au cœur des grandes réalisations du secteur et partagent leur vision pour inspirer et guider ceux qui bâtissent le monde de demain. Découvrez les témoignages de trois figures clés de la construction et de l'architecture."
        advisorsList={btpAdvisors}
      />
      <Timeline />
      <Testimonial />
    </section>
  );
};

export default Home;
