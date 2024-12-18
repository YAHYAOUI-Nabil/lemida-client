import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <section className="sm:px[282px] px-mobile_padding py-[34px] max-lg:pb-[32px] bg-[#F6F6F6] relative">
      <div className="flex flex-col gap-4 items-center py-5">
        <div className="flex flex-col items-center">
          <p className="md:text-2xl text-lg md:leading-[46px] leading-[37px] font-semibold text-center">
            Inscrivez-vous à notre newsletter
          </p>
          <p className="md:w-[518px] md:text-base text-sm leading-7 font-normal text-center">
            Et tenez-vous au courant de nos actualités, nos dernières formations
            et des meilleurs astuces pour vous former !
          </p>
        </div>
        <div className="md:w-[682px] w-[350px]">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full h-[50px] px-4 py-2 rounded-[30px] bg-white"
              placeholder="Entrez votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full h-[58px] px-[15px] py-1.5 rounded-full bg-footer_background_color hover:bg-[#20C997] transition-all duration-500 ease-in-out font-medium text-white"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
