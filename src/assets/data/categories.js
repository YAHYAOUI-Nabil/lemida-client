import {
  MdLocalPharmacy,
  MdOutlineBabyChangingStation,
  MdPregnantWoman,
  MdElectricBolt,
  MdAccountBalanceWallet,
} from "react-icons/md";
import {
  FaBaby,
  FaUserNurse,
  FaHandHoldingMedical,
  FaEnvira,
} from "react-icons/fa";
import {
  GiFootprint,
  GiDiscussion,
  GiJoint,
  GiBrain,
  GiMedicinePills,
  GiHospital,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { FaHeartPulse, FaHelmetSafety } from "react-icons/fa6";
import { RiPsychotherapyLine } from "react-icons/ri";
import { LiaStethoscopeSolid } from "react-icons/lia";
import {
  TbMassage,
  TbDentalBroken,
  TbOld,
  TbBackhoe,
  TbForklift,
  TbCarCrane,
  TbCar4WdFilled,
  TbContract,
  TbBriefcaseFilled,
} from "react-icons/tb";
import { PiLadderSimpleLight, PiMicrosoftWordLogoFill } from "react-icons/pi";
import { LuCable } from "react-icons/lu";
import { SiPaloaltosoftware } from "react-icons/si";
import { AiFillPrinter } from "react-icons/ai";

export const medicalCategories = [
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
    icon: GiFootprint,
  },

  {
    name: "Cardiologues",
    icon: FaHeartPulse,
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
    name: "Psychiatres",
    icon: RiPsychotherapyLine,
  },
  {
    name: "Masseurs kinésithérapeutes",
    icon: TbMassage,
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
    name: "Médecins généralistes",
    icon: LiaStethoscopeSolid,
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

export const btpCategories = [
  {
    name: "CACES R482",
    icon: TbBackhoe,
  },
  {
    name: "CACES R486",
    icon: TbCarCrane,
  },
  {
    name: "CACES R489",
    icon: TbForklift,
  },
  {
    name: "SST",
    icon: FaUserNurse,
  },
  {
    name: "Echafaudage",
    icon: TbCar4WdFilled,
  },
  {
    name: "R408",
    icon: PiLadderSimpleLight,
  },
  {
    name: "Habilitations électriques",
    icon: LuCable,
  },
  {
    name: "Préparation aux HÉ",
    icon: MdElectricBolt,
  },
  {
    name: "Travail en hauteur",
    icon: FaHelmetSafety,
  },

  {
    name: "Développement durable",
    icon: FaEnvira,
  },
];

export const administrativeCategories = [
  {
    name: "Secrétariat",
    icon: TbBriefcaseFilled,
  },
  {
    name: "Bureautique",
    icon: PiMicrosoftWordLogoFill,
  },
  {
    name: "Comptabilité",
    icon: MdAccountBalanceWallet,
  },
  {
    name: "Administration",
    icon: AiFillPrinter,
  },
  {
    name: "Logiciels Pro",
    icon: SiPaloaltosoftware,
  },
  {
    name: "Rédaction",
    icon: TbContract,
  },
  {
    name: "Formations en Langues (avec Leveltel et Voltaire)",
    icon: MdElectricBolt,
  },
];
