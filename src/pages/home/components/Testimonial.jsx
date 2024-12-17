import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../../assets/data/testimonial";

const Testimonial = () => {
  return (
    <div className="w-full flex flex-col gap-16 py-16 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding bg-gray-100">
      <div className="">
        <h2 className="font-bold md:text-3xl text-xl text-center">
          Ils nous font confiance : leurs témoignages
        </h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full bg-gray-100"
        breakpoints={{
          1000: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        <>
          {testimonials.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="grid grid-cols-5 gap-4 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding sm:pb-16 pb-6">
                <div className="flex flex-col items-center col-span-5 md:col-span-2">
                  <img
                    className="object-cover w-72 h-60 mb-2 rounded-md shadow"
                    src={item.avatarUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold">{item.name}</p>
                    <p className="text-sm text-gray-800">{item.position}</p>
                  </div>
                </div>
                <div className="w-full h-full col-span-5 md:col-span-3 flex flex-col gap-4">
                  <div className="flex items-start justify-start">
                    <FaQuoteLeft className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="lg:px-6 md:px-8 px-0 font-medium flex lg:flex-row flex-col lg:gap-8 gap-2 h-1/2">
                    <p className="flex items-center text-center text-sm lg:px-0 px-8">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-end justify-end">
                    <FaQuoteRight className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Testimonial;
