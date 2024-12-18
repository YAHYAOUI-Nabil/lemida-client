import React from "react";
import { NavLink } from "react-router-dom";
import { FaEuroSign, FaChalkboardTeacher } from "react-icons/fa";
import { MdTimer, MdOutlineSupportAgent } from "react-icons/md";

const NextTrainings = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <video
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover outline-none"
        autoPlay
        loop
        muted
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        data-aos="fade-left"
        className="absolute md:right-10 max-sm:mx-auto bottom-[25%] px-6 lg:px-8 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full"
      >
        <div className="mx-auto md:max-w-96 max-w-80 flex flex-col gap-20">
          <div className="group flex flex-col gap-4 p-4 cursor-pointer transition-transform ease-in-out duration-300 transform hover:scale-[1.03]">
            <NavLink
              to="/"
              className="text-2xl font-semibold mb-2 text-white text-left"
            >
              Formation Facteurs de risques cardiovasculaires
            </NavLink>
            <div className="flex flex-col gap-4 justify-between mb-3 text-white">
              <div className="flex flex-row gap-2 items-center">
                <FaEuroSign className="w-5 h-5 text-white" />
                <span className="font-medium">100% financé par DPC</span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdTimer className="w-5 h-5 text-white" />
                <span className="font-medium">
                  Durée : <span>15h</span>
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineSupportAgent className="w-5 h-5 text-white" />
                <p className="font-medium">En ligne</p>
              </div>
              <div className="flex flex-row gap-2">
                <FaChalkboardTeacher className="w-5 h-5 text-white" />
                <p className="font-medium">
                  Formateur : <span>Jean-François Renucci</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <button className="w-full rounded-full py-3 px-10 sm:text-sm text-xs bg-main_color group-hover:bg-[#fff] text-white group-hover:text-main_color hover:font-medium transition duration-800 cursor-pointer">
                En savoir +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextTrainings;
