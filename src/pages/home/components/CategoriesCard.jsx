import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesCard = ({ categories, label, route }) => {
  return (
    <div className="bg-white p-8 flex flex-col justify-between items-center gap-8">
      <div className="w-full">
        <p className="text-left text-base font-semibold">{label}</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {categories.slice(0, 6).map((category) => (
          <NavLink
            to={`/formations/recherches?categorie=${category.name}`}
            key={category.name}
            className={`relative flex items-center justify-center w-28 min-w-28 h-28 bg-primary hover:bg-primary/80 cursor-pointer`}
          >
            <div className="">
              <category.icon className="text-white w-7 h-7" />
            </div>
            <div className="absolute bottom-0 w-full">
              <p className="w-full h-full flex items-center justify-center text-center text-white text-xs font-semibold p-2">
                {category.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="w-full">
        <NavLink
          to={`/formations/categorie/${route}`}
          className="text-left text-sm font-medium hover:underline text-primary"
        >
          Voir plus
        </NavLink>
      </div>
    </div>
  );
};

export default CategoriesCard;
