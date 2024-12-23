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
      <Advisors />
      <Timeline />
      <Testimonial />
    </section>
  );
};

export default Home;
