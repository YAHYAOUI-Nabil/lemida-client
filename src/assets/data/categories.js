import {
  MdLocalPharmacy,
  MdOutlineBabyChangingStation,
  MdPregnantWoman,
  MdElectricBolt,
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
} from "react-icons/tb";
import { PiLadderSimpleLight } from "react-icons/pi";
import { LuCable } from "react-icons/lu";

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
    name: "Médecins généralistes",
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
    name: "Echafaudage roulant",
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
    name: "SST",
    icon: FaUserNurse,
  },
  {
    name: "Développement durable",
    icon: FaEnvira,
  },
];
