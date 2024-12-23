import Card from "../../../components/Card";
import { trainings } from "../../../assets/data/trainings";

const MostSeenTrainings = () => {
  return (
    <section className="flex flex-col gap-10 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding mb-16">
      <div className="flex justify-center gap-1 items-center shrink-0 self-stretch">
        <div className="">
          <p className="font-bold md:text-3xl text-xl text-center">
            Nos formations les plus demandées !
          </p>
          <p className="mt-6 md:max-w-4xl text-lg text-gray-600 text-center">
            Découvrez une sélection de formations incontournables pour
            développer vos compétences et atteindre vos objectifs.
          </p>
        </div>
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
    </section>
  );
};

export default MostSeenTrainings;
