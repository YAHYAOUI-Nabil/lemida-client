import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { imageUrl, title, description } = props;
  return (
    <section className="relative group flex flex-col w-[266px] max-w-[266px] min-w-[266px] h-[380px] bg-white overflow-hidden">
      <NavLink
        to="/categories/tech"
        className="w-full h-full px-5 absolute top-0 translate-y-full group-hover:translate-y-0 ease-in-out duration-1000 bg-gradient-to-r from-footer_background_color to-footer_background_color z-50 rounded-2xl cursor-pointer"
      >
        <div className="relative flex flex-col justify-end-end">
          <div className="absolute top-10 right-0 z-20">
            <div>
              <svg
                width="43"
                height="45"
                viewBox="0 0 43 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2028_2320)">
                  <rect
                    x="0.833008"
                    y="0.5"
                    width="41"
                    height="42"
                    rx="20.5"
                    stroke="white"
                  />
                  <g clipPath="url(#clip0_2028_2320)">
                    <path
                      d="M28.1779 18.0051L17.4562 15.9297C17.3741 15.9141 17.2889 15.928 17.2151 15.9706L15.542 16.9366C15.4021 17.0174 15.4382 17.2284 15.5965 17.258L25.5355 19.1829L14.4719 25.5704C14.3887 25.6185 14.3599 25.7258 14.408 25.809L15.0629 26.9433C15.1109 27.0265 15.2183 27.0553 15.3014 27.0073L26.3631 20.6208L23.0606 30.1906C23.0082 30.3444 23.1718 30.4793 23.3117 30.3985L25.0416 29.3998C25.0775 29.379 25.1058 29.3451 25.1181 29.3052L28.7062 18.9202C28.7388 18.8255 28.7507 18.7249 28.741 18.6252C28.7314 18.5255 28.7006 18.429 28.6505 18.3423C28.6004 18.2556 28.5323 18.1806 28.4508 18.1224C28.3692 18.0643 28.2762 18.0243 28.1779 18.0051V18.0051Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_2028_2320"
                    x="0.333008"
                    y="0"
                    width="42"
                    height="45"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.043 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2028_2320"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2028_2320"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_2028_2320">
                    <rect
                      width="19.56"
                      height="19.56"
                      fill="white"
                      transform="translate(8.33301 18.78) rotate(-30)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="h-[72px] mt-10 flex items-end -translate-y-full group-hover:translate-y-0 ease-in-out duration-1000">
            <p className="text-[#E8E8E8] text-sm font-semibold">{title}</p>
          </div>
          <div className="">
            <p className="text-white text-[26px] font-semibold">
              {description}
            </p>
          </div>
        </div>
      </NavLink>
      <div className="flex flex-col w-[266px] max-w-[266px] min-w-[266px] h-[380px] bg-white rounded-2xl border-[3px] border-[#F6F6F6] overflow-hidden">
        <div className="w-full h-[277px] relative">
          <img
            className="w-full h-[277px] object-cover"
            src={imageUrl}
            alt="Example product"
          />
        </div>
        <div className="p-4 bg-[#F6F6F6] flex-grow translate-y-0 group-hover:-translate-y-[277px] transition-all ease-in-out duration-[950ms]">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-footer_background_color to-footer_background_color font-semibold text-xs uppercase">
            {title}
          </p>
          <div className="w-5 border border-[#D1827B]" />
          <p className="h-16 font-medium text-sm leading-[18px] overflow-ellipsis">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
