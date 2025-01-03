import React from "react";

const Hero = () => {
  return (
    <div className="lg:flex hidden relative justify-center items-center text-white p-6">
      <div className="absolute top-6 left-6 z-20">
        <img
          src="/images/logo_lemida.png"
          alt="Lemida"
          className="h-10 w-auto"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none w-full h-full">
        <img
          src="/images/authentication.jpg"
          alt="contact-us"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-left p-6 bg-black/50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenue !</h1>
        <p className="text-left text-base font-medium">
          Des formations organisées et intuitives, conçues pour les
          professionnels de santé. Rejoignez-nous dès aujourd'hui et continuez à
          développer vos compétences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
