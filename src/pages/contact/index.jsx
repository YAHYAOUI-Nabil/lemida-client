import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Hero from "./components/Hero";
import Faq from "./components/Faq";

const Contact = () => {
  return (
    <div className="flex flex-col gap-16 w-full h-full md:px-desktop_padding sm:px-tablet_padding px-mobile_padding my-16">
      <div className="flex flex-col md:flex-row gap-8 w-full h-full">
        <Hero />
        <ContactUsForm />
      </div>
      <Faq />
    </div>
  );
};

export default Contact;
