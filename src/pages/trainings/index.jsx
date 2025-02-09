import React, { useEffect, useState } from "react";
import TopRated from "./components/TopRated";
import Featured from "./components/Featured";
import AllTrainings from "./components/AllTrainings";
import { useLocation } from "react-router-dom";
import { btpTrainings, trainings } from "../../assets/data/trainings";

const Trainings = () => {
  const location = useLocation();
  const [trainingsList, setTrainingsList] = useState([]);

  useEffect(() => {
    if (location.pathname === "/formations/categorie/sante") {
      setTrainingsList(trainings);
    } else {
      setTrainingsList(btpTrainings);
    }
  }, [location]);
  return (
    <div className="md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-16 flex flex-col gap-14">
      {location.pathname === "/formations/categorie/sante" ? (
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-3xl text-xl text-left max-w-2xl">
            Nos programmes de formation pour les professionnels de santé
          </p>
          <p className="font-normal md:text-base text-sm text-left max-w-5xl">
            Adaptées aux besoins du secteur médical, elles visent à renforcer
            vos compétences tout en répondant aux exigences des évolutions
            professionnelles et technologiques.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-3xl text-xl text-left max-w-2xl">
            Nos programmes de formation pour les professionnels du bâtiment
          </p>
          <p className="font-normal md:text-base text-sm text-left max-w-5xl">
            Adaptées aux besoins du secteur du bâtiment, elles visent à
            renforcer vos compétences tout en répondant aux exigences des
            évolutions professionnelles et technologiques.
          </p>
        </div>
      )}

      <TopRated trainings={trainingsList} />
      <Featured training={trainingsList[0]} />
      <AllTrainings trainings={trainingsList} />
    </div>
  );
};

export default Trainings;
