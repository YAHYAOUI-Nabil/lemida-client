import React from "react";
import CategoriesItem from "./CategoriesItem";
import {
  btpCategories,
  medicalCategories,
} from "../../../assets/data/categories";

const TopCategories = () => {
  return (
    <div className="mt-8 bg-gray-100 flex flex-col">
      <CategoriesItem
        label="Catégories de formations en santé"
        categories={medicalCategories}
        bgColor="bg-[#20C997]"
        categorie="sante"
      />
      <CategoriesItem
        label="Catégories de formations dans le domaine du bâtiment"
        categories={btpCategories}
        bgColor="bg-primary"
        categorie="btp"
      />
    </div>
  );
};

export default TopCategories;
