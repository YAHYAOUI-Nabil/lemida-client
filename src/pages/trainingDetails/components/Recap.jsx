import React from "react";

const Recap = () => {
  return (
    <div className="grid grid-cols-4 gap-4 divide-x w-fit h-24 px-6 lg:px-8 z-10 md:-mt-12 mx-auto rounded-md bg-white shadow-2xl">
      <div className="flex flex-col gap-2 px-4 justify-center items-center text-center text-gray-600">
        <p className="text-lg font-bold">Contenus</p>
        <p>4 sections</p>
      </div>
      <div className="flex flex-col gap-2 px-4 justify-center text-center text-gray-600">
        <p className="text-lg font-bold">Référence action DPC</p>
        <p>93292325124</p>
      </div>
      <div className="flex flex-col gap-2 px-4 justify-center text-center text-gray-600">
        <p className="text-lg font-bold">Durée</p>
        <p>15 heures</p>
      </div>
      <div className="flex flex-col gap-2 px-4 justify-center text-center text-gray-600">
        <p className="text-lg font-bold">Financements</p>
        <p>DPC, FIF PL</p>
      </div>
    </div>
  );
};

export default Recap;
