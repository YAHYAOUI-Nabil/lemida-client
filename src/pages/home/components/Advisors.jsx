import React from "react";
import {
  TbRosetteNumber1,
  TbRosetteNumber2,
  TbRosetteNumber3,
} from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="flex items-center justify-center md:px-desktop_padding sm:px-tablet_padding px-mobile_padding mb-16 bg-gray-300 py-16">
      <div className="flex flex-col gap-10 max-w-[1635px] max-lg:gap-6">
        <div className="flex flex-col items-center md:px-[80px] px-5 gap-[14px]">
          <p className="text-center font-bold md:text-3xl text-xl flex items-center">
            Nos conseillers parlent
          </p>
          <p className="text-center text-base font-normal max-w-2xl">
            Ils sont au cœur du progrès médical et partagent leur vision pour
            inspirer et guider ceux qui sauvent des vies. Découvrez les
            témoignages de trois figures clés du domaine de la santé.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col gap-3 border-2 border-white w-full rounded-lg p-4">
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                alt="formateur"
                className="sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Albert Brad</p>
                <p className="text-gray-700 text-sm">
                  Cardiologue et Visionnaire en Gestion Médicale
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-sm">
              Les formations de cette plateforme redéfinissent la manière dont
              nous, professionnels de santé, abordons notre métier. J’ai trouvé
              une opportunité unique de transmettre des approches modernes qui
              allient efficacité clinique et gestion optimale des soins. Chaque
              session est une occasion de transformer la pratique médicale.
            </p>
          </div>
          <div className="flex flex-col gap-2 border-2 border-white w-full rounded-lg p-4">
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor.jpg?v=1684314843"
                alt="formateur"
                className="sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Eric Barbara</p>
                <p className="text-gray-700 text-sm">
                  Spécialiste en Santé Publique et Défenseure de l'Éducation
                  Médicale
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-sm">
              Contribuer à ces formations est une chance de soutenir des
              professionnels motivés à relever les grands défis sanitaires de
              notre époque. Ces programmes apportent des solutions concrètes et
              directement applicables dans des contextes variés, tout en
              stimulant une réflexion profonde sur l’avenir de la santé."Je suis
              plutôt satisfait de cette formation, qui propose de bons rappels
              de l'essentiel"
            </p>
          </div>

          <div className="flex flex-col gap-2 border-2 border-white w-full rounded-lg p-4">
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://img.freepik.com/premium-photo/portrait-young-woman-doctor-blue-background_307890-2166.jpg?"
                alt="formateur"
                className="sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Alene Doe</p>
                <p className="text-gray-700 text-sm">
                  Chirurgien et Explorateur des Technologies Médicales
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-sm">
              Avec l’évolution rapide des innovations médicales, il est crucial
              de rester à jour. À travers cette plateforme, j’ai pu partager des
              techniques de pointe et renforcer l’expertise des professionnels
              qui souhaitent avoir un impact durable dans leurs domaines
              respectifs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
