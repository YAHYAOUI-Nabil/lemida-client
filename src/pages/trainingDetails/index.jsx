import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import Recap from "./components/Recap";

const TrainingDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="flex flex-row gap-2 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding">
        <NavLink
          to="/"
          className="max-sm:hidden text-base font-normal text-gray-700"
        >
          Accueil
        </NavLink>{" "}
        <p className="sm:hidden text-base font-normal text-gray-700">...</p>
        <span className="text-base font-normal text-gray-700">|</span>
        <p className="max-sm:hidden text-base font-normal text-gray-700">
          Infirmiers
        </p>
        <p className="sm:hidden text-base font-normal text-gray-700">...</p>
        <span className="text-base font-normal text-gray-700">|</span>
        <p className="text-base font-normal text-gray-700 line-clamp-1">
          Formation Plaies et cicatrisation
        </p>
      </div>
      <Hero />
      <Recap />
      <div className="md:px-desktop_padding sm:px-tablet_padding px-mobile_padding"></div>
    </div>
  );
};

export default TrainingDetails;
