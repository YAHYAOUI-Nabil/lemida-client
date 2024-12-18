import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center w-full md:w-1/2 p-8 text-black">
      <div className="absolute inset-0 opacity-20 pointer-events-none w-full h-full">
        <img
          src="/images/contact-us.jpg"
          alt="contact-us"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full h-fit">
        <h1 className="md:text-3xl text-xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg mb-6">
          Nous serions ravis de vous entendre ! Que vous ayez une question, un
          retour d'expérience ou besoin d'assistance, notre équipe est là pour
          vous aider.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <HiPhone className="w-6 h-6 mr-4" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center">
            <HiMail className="w-6 h-6 mr-4" />
            <span>contact@mededucation.com</span>
          </div>
          <div className="flex items-center">
            <HiLocationMarker className="w-6 h-6 mr-4" />
            <span>123 Medical St, Health City, HC 12345</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
