import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../app/context/AppContext";
import logo from "../assets/images/Lemida-logo.png";

const Header = () => {
  const { activeMenu, setActiveMenu, openSearchMenu, setOpenSearchMenu } =
    useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (searchQuery.trim() !== "" && e.key === "Enter") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  return (
    <header className="sticky top-0 z-[999] md:px-desktop_padding sm:px-tablet_padding px-mobile_padding h-16 flex flex-row items-center justify-between w-full bg-header_background_color text-header_text_color shadow-headerShadow">
      <div className="max-lg:w-full max-lg:flex max-lg:justify-between max-lg:items-center">
        <div className="py-[17px] w-[139px]">
          <NavLink>
            <img className="h-10 w-auto" src={logo} alt="Lemida" />
          </NavLink>
        </div>
        <div className="lg:hidden flex gap-8">
          <button
            className="cursor-pointer"
            onClick={() => setOpenSearchMenu(!openSearchMenu)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4379 21.1015L15.7292 14.3928C16.7703 13.0469 17.3334 11.4014 17.3334 9.67062C17.3334 7.59886 16.5249 5.65626 15.0628 4.19157C13.6006 2.72687 11.6529 1.9209 9.58371 1.9209C7.51453 1.9209 5.56677 2.72945 4.10465 4.19157C2.63996 5.65368 1.83398 7.59886 1.83398 9.67062C1.83398 11.7398 2.64254 13.6876 4.10465 15.1497C5.56677 16.6144 7.51195 17.4203 9.58371 17.4203C11.3145 17.4203 12.9574 16.8572 14.3033 15.8187L21.012 22.5248C21.0316 22.5445 21.055 22.5601 21.0807 22.5708C21.1064 22.5814 21.134 22.5869 21.1618 22.5869C21.1896 22.5869 21.2172 22.5814 21.2429 22.5708C21.2686 22.5601 21.2919 22.5445 21.3116 22.5248L22.4379 21.4011C22.4576 21.3814 22.4732 21.3581 22.4839 21.3324C22.4945 21.3067 22.5 21.2791 22.5 21.2513C22.5 21.2235 22.4945 21.1959 22.4839 21.1702C22.4732 21.1445 22.4576 21.1211 22.4379 21.1015ZM13.6756 13.7625C12.5803 14.8552 11.1285 15.4571 9.58371 15.4571C8.03893 15.4571 6.58715 14.8552 5.49185 13.7625C4.39914 12.6672 3.79725 11.2154 3.79725 9.67062C3.79725 8.12584 4.39914 6.67148 5.49185 5.57877C6.58715 4.48606 8.03893 3.88416 9.58371 3.88416C11.1285 3.88416 12.5828 4.48347 13.6756 5.57877C14.7683 6.67406 15.3702 8.12584 15.3702 9.67062C15.3702 11.2154 14.7683 12.6698 13.6756 13.7625Z"
                fill="#141414"
              />
            </svg>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9994 2.56653H1.99944C1.88158 2.56653 1.78516 2.66296 1.78516 2.78081V4.4951C1.78516 4.61296 1.88158 4.70939 1.99944 4.70939H22.9994C23.1173 4.70939 23.2137 4.61296 23.2137 4.4951V2.78081C23.2137 2.66296 23.1173 2.56653 22.9994 2.56653ZM22.9994 19.2808H1.99944C1.88158 19.2808 1.78516 19.3772 1.78516 19.4951V21.2094C1.78516 21.3272 1.88158 21.4237 1.99944 21.4237H22.9994C23.1173 21.4237 23.2137 21.3272 23.2137 21.2094V19.4951C23.2137 19.3772 23.1173 19.2808 22.9994 19.2808ZM22.9994 10.9237H1.99944C1.88158 10.9237 1.78516 11.0201 1.78516 11.138V12.8522C1.78516 12.9701 1.88158 13.0665 1.99944 13.0665H22.9994C23.1173 13.0665 23.2137 12.9701 23.2137 12.8522V11.138C23.2137 11.0201 23.1173 10.9237 22.9994 10.9237Z"
                fill="black"
                fillOpacity="0.85"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:flex hidden justify-end items-center gap-10 w-full h-full text-base font-normal leading-[22px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              isActive
                ? "text-nav_focus_color border-b-2 border-nav_focus_color"
                : "text-nav_color/85 border-b-2 border-transparent",
              "w-fit h-full flex items-center",
            ].join(" ")
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/formations"
          className={({ isActive }) =>
            [
              isActive
                ? "text-nav_focus_color border-b-2 border-nav_focus_color"
                : "text-nav_color/85 border-b-2 border-transparent",
              "w-fit h-full flex items-center",
            ].join(" ")
          }
        >
          Formations
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            [
              isActive
                ? "text-nav_focus_color border-b-2 border-nav_focus_color"
                : "text-nav_color/85 border-b-2 border-transparent",
              "w-fit h-full flex items-center",
            ].join(" ")
          }
        >
          À propos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [
              isActive
                ? "text-nav_focus_color border-b-2 border-nav_focus_color"
                : "text-nav_color/85 border-b-2 border-transparent",
              "w-fit h-full flex items-center",
            ].join(" ")
          }
        >
          Contactez-nous
        </NavLink>
        <NavLink
          to="/login"
          className="flex items-center justify-center rounded-full text-white font-medium md:text-base text-xs px-4 py-2 bg-gradient-to-r from-[#5869d4] to-[#2234a8] transition-all ease-in-out duration-500"
        >
          Connexion
        </NavLink>
      </div>

      <div className="lg:flex hidden w-[264px] h-10 ml-6">
        <div className="flex flex-row justify-between items-center bg-white rounded-[20px]">
          <div className="flex items-center h-10 py-2 px-3 z-20 border border-[#E7E7E7] rounded-l-[20px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="chercher une formation..."
              className="outline-none text-sm leading-[22px] font-normal"
            />
          </div>
          <button
            className="flex items-center justify-center w-8 h-10 pt-2 pl-2 bg-[#F5F5F5] rounded-r-[20px] border border-[#E7E7E7] border-l-0 cursor-pointer"
            onClick={() => handleSearch()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1022 14.1189L10.4647 9.48141C11.1844 8.55106 11.5737 7.41356 11.5737 6.21713C11.5737 4.78499 11.0147 3.44213 10.004 2.42963C8.9933 1.41713 7.64688 0.859985 6.21652 0.859985C4.78616 0.859985 3.43973 1.41891 2.42902 2.42963C1.41652 3.44034 0.859375 4.78499 0.859375 6.21713C0.859375 7.64749 1.4183 8.99391 2.42902 10.0046C3.43973 11.0171 4.78438 11.5743 6.21652 11.5743C7.41295 11.5743 8.54866 11.185 9.47902 10.4671L14.1165 15.1028C14.1301 15.1164 14.1463 15.1272 14.164 15.1346C14.1818 15.142 14.2009 15.1458 14.2201 15.1458C14.2393 15.1458 14.2584 15.142 14.2761 15.1346C14.2939 15.1272 14.3101 15.1164 14.3237 15.1028L15.1022 14.3261C15.1158 14.3125 15.1266 14.2963 15.134 14.2785C15.1414 14.2608 15.1452 14.2417 15.1452 14.2225C15.1452 14.2032 15.1414 14.1842 15.134 14.1664C15.1266 14.1487 15.1158 14.1325 15.1022 14.1189ZM9.04509 9.0457C8.28795 9.80106 7.28438 10.2171 6.21652 10.2171C5.14866 10.2171 4.14509 9.80106 3.38795 9.0457C2.63259 8.28856 2.21652 7.28499 2.21652 6.21713C2.21652 5.14927 2.63259 4.14391 3.38795 3.38856C4.14509 2.6332 5.14866 2.21713 6.21652 2.21713C7.28438 2.21713 8.28973 2.63141 9.04509 3.38856C9.80045 4.1457 10.2165 5.14927 10.2165 6.21713C10.2165 7.28499 9.80045 8.29034 9.04509 9.0457Z"
                fill="#141414"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
