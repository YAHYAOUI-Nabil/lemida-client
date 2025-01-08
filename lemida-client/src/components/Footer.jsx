import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,

} from "react-icons/fa";
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
              Lemida est un organisme de formation dédié à la montée en
              compétences des professionnels et des entreprises. En combinant
              expertise et pédagogie innovante, nous proposons des formations
              adaptées aux exigences actuelles du marché et aux besoins
              spécifiques de chaque apprenant.
              <br /> <br /> Nos formations, reconnues et éligibles aux
              principaux dispositifs de financement (CPF, OPCO, Pôle Emploi,
              AGEFIPH, FIPHFP), permettent à chacun de progresser et de
              transformer ses ambitions en réussite concrète. <br />
              <br /> Avec Lemida, développez vos compétences pour relever les
              défis d'aujourd'hui et de demain.
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
        <div className="grid grid-cols-1 gap-5 lg:col-span-4 md:grid-cols-3">
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-medium">Découvrir Lemida</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/formations/categorie/sante"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  Santé
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formations/categorie/btp"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  Bâtiment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/a-propos"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  Contactez-nous
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-2.5">
            <p className="text-xl font-bold">Notre Société</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/a-propos"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="transition-opacity duration-100 hover:opacity-80"
                >
                  Contactez-nous
                </NavLink>
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-medium">Informations légales</p>
            <ul className="mt-2 space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/politiques-de-confidentialite"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  Politique de confidentialité
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/conditions-generales"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  Conditions générales
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mentions-legales"
                  className="transition-opacity duration-100 hover:opacity-80 hover:underline"
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-medium">Contact</p>
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
      <div className="flex sm:flex-row flex-col sm:justify-between items-center py-5 border-t">
        <p className="text-sm font-medium pl-1">&copy; {currentDate} Lemida.</p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0 pl-1 sm:pl-0 sm:pr-1">
          <a
            href="https://www.facebook.com/@lemida"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300 ease-in-out"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/@lemida"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300 ease-in-out"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/@lemida"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border border-white hover:text-primary hover:border-primary hover:bg-white transition-all duration-300 ease-in-out"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
