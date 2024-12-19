import React from "react";
import { useLocation } from "react-router-dom";
import { trainings } from "../../assets/data/trainings";
import Card from "../../components/Card";

const SearchTrainings = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categorieQuery = searchParams.get("categorie");
  const searchQuery = searchParams.get("search");
  console.log(categorieQuery);
  return (
    <div className="flex flex-col gap-16 py-16 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding">
      <div className="">
        <p className="sm:text-3xl text-xl font-bold text-gray-700">
          {trainings.length} résultats pour{" "}
          <span>"{categorieQuery || searchQuery}"</span>
        </p>
      </div>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {trainings.map((training) => (
          <Card
            key={training.id}
            imageUrl={training.image}
            title={training.title}
            instructors={training.instructors}
            duration={training.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchTrainings;
