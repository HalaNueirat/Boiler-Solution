import type { NavItem, NavSection } from "../types/header.types";


export const UTILITY_ITEMS: NavItem[] = [
  {id: 0, label: "Find a Rep", href: "#", icon: "fas fa-user-tie"},
  {id: 1, label: "Parts Store", href: "#", icon: "fas fa-shopping-cart"},
];

export const MAIN_ITEMS: NavItem[] = [
  {id: 0, label: "Solutions", href: "/solutions"},
  {id: 1, label: "Products", href: "/products"},
  {id: 2, label: "Recent News", href: "/recent-news"},
  {id: 3, label: "Discover More", href: "/discover-more"},
  {id: 4, label: "Rentals", href: "/"},
  {id: 5, label: "Company Info", href: "/"},
];

export const PRODUCTS_SECTIONS: NavSection[] = [
  {
    id: 0,
    title: "Boilers",
    items: [
      {id: 0, label: "Burners", href: "#"},
      {id: 1, label: "Controls", href: "#"},
      {id: 2, label: "Heat Recovery", href: "#"},
      {id: 3, label: "Water Systems", href: "#"},
      {id: 4, label: "Exhaust Solutions", href: "#"},
      {id: 5, label: "Parts & Service", href: "#"},
      {id: 6, label: "Product Index", href: "#"},
      {id: 7, label: "Product Solutions Map", href: "#"},
      {id: 8, label: "Products by Need", href: "#"},
    ],
  },
  {
    id: 1,
    title: "Firetube",
    items: [
      {id: 0, label: "Flexible Watertube", href: "#"},
      {id: 1, label: "Industrial Watertube", href: "#"},
      {id: 2, label: "Modular Hydronic", href: "#"},
      {id: 3, label: "Modular Steam", href: "#"},
      {id: 4, label: "HRSG", href: "#"},
      {id: 5, label: "Waste Heat", href: "#"},
      {id: 6, label: "Electric", href: "#"},
      {id: 7, label: "Skid Mounted Boiler Solutions", href: "#"},
    ],
  },
  {
    id: 2,
    items: [
      {id: 0, label: "CBEX Dryback Elite", href: "#"},
      {id: 1, label: "CBEX Elite", href: "#"},
      {id: 2, label: "CBEX Elite (1,300 - 2,200 HP)", href: "#"},
      {id: 3, label: "CBEX Premium", href: "#"},
      {id: 4, label: "CBLE", href: "#"},
      {id: 5, label: "4WI", href: "#"},
      {id: 6, label: "CBR", href: "#"},
      {id: 7, label: "4WG", href: "#"},
      {id: 8, label: "ICB", href: "#"},
      {id: 9, label: "CBL", href: "#"},
      {id: 10, label: "CB", href: "#"},
      {id: 11, label: "Ohio Special", href: "#"},
    ],
  },
];
