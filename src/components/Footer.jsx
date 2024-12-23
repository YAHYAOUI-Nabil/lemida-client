import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Lemida.png";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear().toLocaleString();
  return (
    <footer className="w-full px-mobile_padding sm:px-tablet_padding md:px-desktop_padding bg-footer_background_color text-footer_text_color">
      <div className="grid gap-16 md:py-16 py-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2 flex flex-col gap-4">
          <NavLink to="/">
            <img
              className="w-40 bg-white"
              src="/images/logo_lemida.png"
              alt="Lemida"
            />
          </NavLink>

          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm font-medium">
              Découvrez nos formations et développez vos compétences dès
              aujourd'hui.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-40">
              <img
                src="/images/qualiopi.png"
                alt="qualiopi"
                className="object-fill h-auto w-full bg-white"
              />
            </div>
            <p className="text-[10px]">
              La certification qualité a été délivrée au titre de la catégorie
              d'action suivante :{" "}
              <span className="font-semibold text-gray-200">
                Actions de formation
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-bold">Formations</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Toutes nos formations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Offres spécials
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-bold">Notre Société</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Contactez-nous
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-bold">Juridique</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/politiques-de-confidentialite"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Politique de confidentialité
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/conditions-generales"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Conditions générales
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mentions-legales"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-bold">Contact</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li className="flex flex-row gap-2 items-start">
                <GoHome className="w-6 h-6" />
                <span className="">25 rue Bangui Tunis 1102</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <MdOutlinePhone className="w-6 h-6" />
                <span className="">11 111 111</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <MdOutlineMail className="w-6 h-6" />
                <span className="">lemida@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:justify-between items-center py-2 border-t">
        <p className="text-sm font-medium pl-1">
          &copy; {currentDate} LNR Finance.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0 pl-1 sm:pl-0 sm:pr-1">
          <a
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/edenMed.tn.it/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/edenMed.tn.it"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
