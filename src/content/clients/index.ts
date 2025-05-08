import Client from "@/types/client";
//logos

import microsoftLogo from "./logos/microsoft-logo.svg";
import herkeyLogo from "./logos/herkey-logo.svg";
import dbsBankLogo from "./logos/dbs-logo.svg";
import naukriLogo from "./logos/naukri-logo.svg";
import swiggyLogo from "./logos/swiggy-logo.svg";
import studeyoLogo from "./logos/studeyo-logo.svg";
import omiLogo from "./logos/omi-logo.svg";
import vqLogo from "./logos/vq-logo.svg";

const clients: Client[] = [
  {
    name: "Microsoft",
    iconSrc: microsoftLogo,
  },
  {
    name: "Herkey",
    iconSrc: herkeyLogo,
  },

  {
    name: "DBS Bank",
    iconSrc: dbsBankLogo,
  },
  {
    name: "Naukri",
    iconSrc: naukriLogo,
  },
  {
    name: "Swiggy",
    iconSrc: swiggyLogo,
  },
  {
    name: "Studeyo Technologies",
    iconSrc: studeyoLogo,
  },
  {
    name: "OMI Foundation",
    iconSrc: omiLogo,
  },
  {
    name: "ValueQuest",
    iconSrc: vqLogo,
  },
];

export default clients;
