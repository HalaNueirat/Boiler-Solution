import type {FooterData} from "../components/Footer/Footer.types";
import logo from "/images/white-logo.svg";

export const FOOTER_DATA: FooterData = {
  logoSrc: logo,
  logoAlt: "Xngage Logo",
  addressLines: ["221 Law St Thomasville,", "Georgia 31792"],

  primaryLinks: [
    {id: 1, label: "Find a Rep", href: "#"},
    {id: 2, label: "Subscribe for Updates", href: "#"},
  ],

  groups: [
    {
      id: 1,
      title: "Company Info",
      ariaLabel: "Company information",
      links: [
        {id: 1, label: "About", href: "#"},
        {id: 2, label: "Community Outreach", href: "#"},
        {id: 3, label: "Careers", href: "#"},
        {id: 4, label: "Trade Shows", href: "#"},
        {id: 5, label: "News", href: "#"},
      ],
    },
    {
      id: 2,
      title: "Solutions",
      ariaLabel: "Solutions",
      links: [
        {id: 1, label: "Boiler Exhaust", href: "#"},
        {id: 2, label: "Heat Recovery", href: "#"},
        {id: 3, label: "Lorem Ipsum", href: "#"},
        {id: 4, label: "Reduce Emissions", href: "#"},
        {id: 5, label: "Reduce Fuel Costs", href: "#"},
        {id: 6, label: "Rentals", href: "#"},
      ],
    },
    {
      id: 3,
      title: "Featured Products",
      ariaLabel: "Featured products",
      links: [
        {id: 1, label: "ClearFire-CE", href: "#"},
        {id: 2, label: "Flextube", href: "#"},
        {id: 3, label: "Hawk 4000", href: "#"},
        {id: 4, label: "ProFire SBR-30", href: "#"},
        {id: 5, label: "ProFire XL", href: "#"},
        {id: 6, label: "Prometha", href: "#"},
      ],
    },
    {
      id: 4,
      title: "Connect With Us",
      ariaLabel: "Connect with us",
      links: [
        {id: 1, label: "Contact Us", href: "#"},
        {id: 2, label: "Location & Hours", href: "#"},
        {id: 3, label: "Events", href: "#"},
      ],
    },
  ],

  social: [
    {id: 1, label: "Facebook", href: "#", iconClass: "fab fa-facebook-f"},
    {id: 2, label: "Twitter", href: "#", iconClass: "fab fa-twitter"},
    {id: 3, label: "LinkedIn", href: "#", iconClass: "fab fa-linkedin-in"},
    {id: 4, label: "Instagram", href: "#", iconClass: "fab fa-instagram"},
    {id: 5, label: "YouTube", href: "#", iconClass: "fab fa-youtube"},
  ],

  legal: {
    yearText: "©2020 All Rights Reserved.",
    termsHref: "#",
    privacyHref: "#",
  },
};
