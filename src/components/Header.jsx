import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../app/context/AppContext";
import { MdOutlineAccountCircle, MdSearch, MdMenu } from "react-icons/md";
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
        <div className="py-[17px] w-[139px] flex items-center gap-4">
          <button
            className="lg:hidden flex"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MdMenu className="w-8 h-8 text-[#141414]" />
          </button>
          <NavLink>
            <img className="h-10 w-auto" src={logo} alt="Lemida" />
          </NavLink>
        </div>
        <div className="lg:hidden flex gap-4">
          <NavLink to="/connexion">
            <MdOutlineAccountCircle className="w-8 h-8 text-[#141414]" />
          </NavLink>
          <button
            className="cursor-pointer"
            onClick={() => setOpenSearchMenu(!openSearchMenu)}
          >
            <MdSearch className="w-8 h-8 text-[#141414]" />
          </button>
        </div>
      </div>

      <div className="lg:flex hidden justify-end items-center xl:gap-10 gap-7 w-full h-full text-base font-normal leading-[22px]">
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
        {/* <NavLink
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
        </NavLink> */}
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
          to="/connexion"
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
