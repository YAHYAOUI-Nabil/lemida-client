import {
  MdLocalPharmacy,
  MdOutlineBabyChangingStation,
  MdPregnantWoman,
} from "react-icons/md";
import { FaBaby, FaUserNurse, FaHandHoldingMedical } from "react-icons/fa";
import {
  GiMorgueFeet,
  GiDiscussion,
  GiJoint,
  GiBrain,
  GiMedicinePills,
  GiHospital,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { RiPsychotherapyLine } from "react-icons/ri";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { TbMassage, TbDentalBroken, TbOld } from "react-icons/tb";

export const categories = [
  {
    name: "Pharmaciens",
    icon: MdLocalPharmacy,
  },
  {
    name: "Pédiatres",
    icon: FaBaby,
  },
  {
    name: "Podologues",
    icon: GiMorgueFeet,
  },
  {
    name: "Médeciens généralistes",
    icon: LiaStethoscopeSolid,
  },
  {
    name: "Cardiologues",
    icon: FaHeartPulse,
  },
  {
    name: "Masseurs kinésithérapeutes",
    icon: TbMassage,
  },
  {
    name: "Psychiatres",
    icon: RiPsychotherapyLine,
  },
  {
    name: "Infirmiers/ères",
    icon: FaUserNurse,
  },
  {
    name: "Aides-soignants",
    icon: FaHandHoldingMedical,
  },
  {
    name: "Chirurgiens dentistes",
    icon: TbDentalBroken,
  },
  {
    name: "Sages femmes",
    icon: MdOutlineBabyChangingStation,
  },
  {
    name: "OrthoPhonistes",
    icon: GiDiscussion,
  },
  {
    name: "Gynécologues",
    icon: MdPregnantWoman,
  },
  {
    name: "Dermatologues",
    icon: GiMagnifyingGlass,
  },
  {
    name: "Gériatres",
    icon: TbOld,
  },
  {
    name: "Préparateurs en pharmacie",
    icon: GiMedicinePills,
  },
  {
    name: "Neurologues",
    icon: GiBrain,
  },
  {
    name: "Rhumatologues",
    icon: GiJoint,
  },
  {
    name: "Établissements de santé",
    icon: GiHospital,
  },
];
