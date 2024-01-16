import { Certificate, Completed, Interview, Joining, Letter, Register, Stipend } from "./images";

export const Process = [
  {
    image: Register,
    text: "Register",
    linkText: "Apply Now",
    href: "",
  },
  {
    image: Interview,
    text: "Interview",
    linkText: "Check Dates",
    href: "",
  },
  {
    image: Joining,
    text: "Joining",
    linkText: "Offer Letter",
    href: "",
  },
];

export const ApplicationDate = [
  {
    application: "Start Date",
    date: Date.now(),
  },
  {
    application: "End Date",
    date: Date.now(),
  },
];

export const Perks = [
  {
    perk: "Certificate of appreciation",
    image: Certificate,
  },
  {
    perk: "Letter of Recommendation",
    image: Letter,
  },
  {
    perk: "Project Based Incentives",
    image: Stipend,
  },
  {
    perk: "Chance to work on live Projects",
    image: Completed,
  },
];
