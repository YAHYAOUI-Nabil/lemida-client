import React from "react";
import { FaEuroSign, FaChalkboardTeacher } from "react-icons/fa";
import { MdTimer, MdOutlineSupportAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ListItem = () => {
  return (
    <div className="group w-full h-44 grid grid-cols-3 md:gap-4 gap-2 cursor-pointer">
      <div className="col-span-1 w-full h-full flex overflow-hidden group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
        <img
          src="https://www.roswellpark.org/sites/default/files/2024-04/adobestock_591820473.jpeg"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 h-full overflow-hidden">
        <div className="flex flex-col gap-2 md:p-2 p-1">
          <NavLink
            to="/"
            className="md:text-base text-sm font-semibold text-gray-600 text-left"
          >
            Formation Facteurs de risques cardiovasculaires
          </NavLink>
          <div className="flex flex-col md:gap-2 gap-1 justify-between text-gray-600 md:text-sm text-xs font-normal">
            <div className="flex flex-row gap-2 items-center">
              <FaEuroSign className="w-5 h-5 text-gray-600" />
              <span className="">100% financé par DPC</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdTimer className="w-5 h-5 text-gray-600" />
              <span className="">
                Durée : <span>15h</span>
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdOutlineSupportAgent className="w-5 h-5 text-gray-600" />
              <p className="">En ligne</p>
            </div>
            <div className="flex flex-row gap-2">
              <FaChalkboardTeacher className="w-5 h-5 text-gray-600" />
              <p className="">
                Formateur : <span>Jean-François Renucci</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
