import React from "react";
import {
  TbRosetteNumber1,
  TbRosetteNumber2,
  TbRosetteNumber3,
} from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="flex items-center justify-center md:px-desktop_padding sm:px-tablet_padding px-mobile_padding mb-16">
      <div className="flex flex-col gap-10 max-w-[1635px] max-lg:gap-6">
        <div className="flex flex-col items-center md:px-[80px] px-5 gap-[14px]">
          <p className="text-center font-bold md:text-3xl text-xl flex items-center">
            Comment Ça Marche ?
          </p>
          <p className="text-center text-base font-normal max-w-2xl">
            Suivez ces étapes simples pour commencer votre parcours
            d'apprentissage avec nous et atteindre vos objectifs en un rien de
            temps.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="px-4 py-8 flex flex-col gap-4 bg-[#F8F8F8] rounded-[14px] text-center transition-transform ease-in-out duration-300 transform hover:scale-[1.03] shadow-lg cursor-default">
            <div className="flex flex-col items-center gap-8">
              <TbRosetteNumber1 className="h-8 w-8 text-main_color" />
              <p className="text-xl font-medium">Explorez nos Cours</p>
            </div>

            <p className="text-base font-normal text-[#575757]">
              Parcourez notre large catalogue de cours dans des domaines variés
              comme la gestion, la finance, et la sécurité. Trouvez celui qui
              correspond à vos besoins et à vos objectifs de carrière.
            </p>
          </div>
          <div className="px-4 py-8 flex flex-col gap-4 bg-[#F8F8F8] rounded-[14px] text-center transition-transform ease-in-out duration-300 transform hover:scale-[1.03] shadow-lg cursor-default">
            <div className="flex flex-col items-center gap-8">
              <TbRosetteNumber2 className="h-8 w-8 text-main_color" />
              <p className="text-xl font-medium">
                Inscrivez-vous et Apprenez à Votre Rythme
              </p>
            </div>

            <p className="text-base font-normal text-[#575757]">
              Inscrivez-vous facilement à un cours et commencez immédiatement.
              Suivez les modules à votre rythme, où que vous soyez, grâce à
              notre plateforme flexible.
            </p>
          </div>
          <div className="px-4 py-8 flex flex-col gap-4 bg-[#F8F8F8] rounded-[14px] text-center transition-transform ease-in-out duration-300 transform hover:scale-[1.03] shadow-lg cursor-default">
            <div className="flex flex-col items-center gap-8">
              <TbRosetteNumber3 className="h-8 w-8 text-main_color" />
              <p className="text-xl font-medium">Recevez Votre Certificat</p>
            </div>

            <p className="text-base font-normal text-[#575757]">
              Une fois le cours terminé, obtenez un certificat de réussite qui
              attestera de vos nouvelles compétences, prêt à être ajouté à votre
              CV ou partagé avec des employeurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
