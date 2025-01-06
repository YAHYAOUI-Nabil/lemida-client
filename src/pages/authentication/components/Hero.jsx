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
      <div className="absolute bottom-5 left-5 z-20 pointer-events-none w-1/2 h-1/2 shadow-xl">
        <img
          src="/images/login-hero-2.jpg"
          alt="contact-us"
          className="w-full h-full object-cover shadow-xl"
        />
      </div>
      <div className="absolute top-5 right-5 z-20 pointer-events-none w-1/2 h-1/2 shadow-lg">
        <img
          src="/images/login-hero-1.jpg"
          alt="contact-us"
          className="w-full h-full object-cover shadow-lg"
        />
      </div>
      <div className="relative z-30 text-left p-6 bg-black/50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenue !</h1>
        <p className="text-left text-base font-medium">
          Des formations claires et intuitives, spécialement conçues pour les
          professionnels de la santé et du bâtiment. Rejoignez-nous dès
          aujourd'hui pour enrichir vos compétences !
        </p>
      </div>
    </div>
  );
};

export default Hero;
