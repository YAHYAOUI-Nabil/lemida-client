import React, { useRef, useState } from "react";
import { categories } from "../../../assets/data/categories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopCategories = () => {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    setTimeout(() => {
      checkScrollPosition(container);
    }, 300);
  };

  const checkScrollPosition = (container) => {
    const { scrollLeft, scrollWidth, clientWidth } = container;

    setIsAtStart(scrollLeft === 0);

    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  };
  return (
    <div className="my-8 px-mobile_padding bg-gray-100 py-4">
      <div className="p-4 bg-white">
        <h1 className="font-bold md:text-3xl text-xl text-center lg:mb-8 mb-6">
          Catégories de formations
        </h1>
        <div className="flex items-center justify-center relative group">
          <button
            onClick={() => scroll("left")}
            disabled={isAtStart}
            className={`${
              isAtStart ? "bg-white/50" : "bg-white"
            } sm:flex hidden opacity-0 translate-x-[-50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500  absolute left-0 z-10 w-10 h-20 items-center justify-center rounded-tr rounded-br`}
          >
            <FaChevronLeft className="text-black w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={isAtEnd}
            className={`${
              isAtEnd ? "bg-white/50" : "bg-white"
            } sm:flex hidden opacity-0 translate-x-[50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500  absolute right-0 z-10 w-10 h-20 items-center justify-center rounded-tl rounded-bl`}
          >
            <FaChevronRight className="text-black w-5 h-5" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-5 justify-between sm:overflow-x-hidden overflow-x-auto scrollbar-hide"
          >
            {categories.map((category) => {
              return (
                <div
                  key={category.name}
                  className="relative flex items-center justify-center w-52 min-w-52 h-52 rounded-full bg-[#20C997] cursor-pointer"
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
    </div>
  );
};

export default TopCategories;
