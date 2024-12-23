import React from "react";
import TopRated from "./components/TopRated";
import Featured from "./components/Featured";
import AllTrainings from "./components/AllTrainings";

const Trainings = () => {
  return (
    <div className="md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-16 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <p className="font-semibold md:text-3xl text-xl text-left max-w-2xl">
          Nos programmes de formation pour les professionnels de santé
        </p>
        <p className="font-normal md:text-base text-sm text-left max-w-5xl">
          Adaptées aux besoins du secteur médical, elles visent à renforcer vos
          compétences tout en répondant aux exigences des évolutions
          professionnelles et technologiques.
        </p>
      </div>

      <TopRated />
      <Featured />
      <AllTrainings />
    </div>
  );
};

export default Trainings;
