import React from "react";
import Hero from "./components/Hero";
import MostSeenTrainings from "./components/MostSeenTrainings";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import TopCategories from "./components/TopCategories";
import NextTrainings from "./components/NextTrainings";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      <Hero />
      <NextTrainings />
      <TopCategories />
      <WhyChooseUs />
      <MostSeenTrainings />
      <HowItWorks />
      <Testimonial />
    </section>
  );
};

export default Home;
