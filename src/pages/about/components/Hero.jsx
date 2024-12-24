import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-200 to-main_color md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-16">
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div className="max-w-xl flex flex-col gap-10 py-16">
          <p className="text-3xl font-bold text-gray-700">Découvrez LEMIDA</p>
          <p className="text-xl font-medium text-gray-900">
            Parcourez les options disponibles et trouvez celle qui correspond
            parfaitement à vos attentes.
          </p>
          <div className="flex xl:flex-row flex-col gap-6">
            <NavLink
              to="/contact"
              className="bg-black px-6 py-3 rounded-full text-white hover:opacity-90 w-fit"
            >
              Demander une information
            </NavLink>
            <NavLink
              to="/formations"
              className="bg-white px-6 py-3 rounded-full hover:opacity-90 flex items-center w-fit gap-2"
            >
              <span>Toutes les formations</span> <FaLongArrowAltRight />
            </NavLink>
          </div>
        </div>
        <div className="relative max-md:hidden">
          <div className="absolute xl:right-[calc(50%-300px)] right-[5%] top-[5%]">
            <img
              src="/images/about-2.jpg"
              alt="about hero"
              className="w-auto h-56 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute xl:left-[calc(50%-256px)] left-[5%] top-[35%]">
            <img
              src="/images/about-3.jpg"
              alt="about hero"
              className="w-64 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
