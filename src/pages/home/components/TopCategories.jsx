import React, { useRef } from "react";
import { categories } from "../../../assets/data/categories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopCategories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="my-20 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding">
      <h1 className="font-bold md:text-3xl text-xl text-center mb-16">
        Catégories de formations
      </h1>
      <div className="flex items-center justify-center relative group">
        <button
          onClick={() => scroll("left")}
          className="sm:flex hidden opacity-0 translate-x-[-50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 absolute left-0 z-10 w-10 h-20 items-center justify-center bg-white rounded-tr rounded-br"
        >
          <FaChevronLeft className="text-black w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="sm:flex hidden opacity-0 translate-x-[50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500  absolute right-0 z-10 w-10 h-20 items-center justify-center bg-white rounded-tl rounded-bl"
        >
          <FaChevronRight className="text-black w-5 h-5" />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row gap-5 justify-between sm:overflow-x-hidden overflow-x-auto scrollbar-hide"
        >
          {categories.map((category) => {
            return (
              <div
                key={category.name}
                className="relative flex items-center justify-center w-52 min-w-52 h-52 rounded-full bg-[#5b6cdb] cursor-pointer"
              >
                <div className="">
                  <category.icon className="text-white w-28 h-28" />
                </div>
                <div className="absolute bottom-0 h-10 w-full">
                  <p className="w-full h-full whitespace-nowrap bg-white flex items-center justify-center text-center text-black/90 text-base font-semibold">
                    {category.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
