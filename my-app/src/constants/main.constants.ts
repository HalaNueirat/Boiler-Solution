import rental from "/images/rental-boiler.png";
import emission from "/images/emission-boiler.png";
import product from "/images/products-pattern.png";
import cleaver from "/images/cleaver-brooks-group.png";
import type {SolutionItem} from "../types/solutions.types";
import type {RecentNewsItem} from "../types/news.types";
import type {DiscoverItem} from "../types/discover.types";

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "rental",
    titleEmphasis: "Ren",
    titleRest: "tals",
    subtitle: "We Provide. Nationwide.",
    description:
      "More than 1,500 CBRA representatives worldwide provide comprehensive, ongoing support—from commissioning your system, to providing parts and service after the sale, to product training.",
    image: rental,
    imageAlt: "Cleaver Brooks Truck providing rental solutions",
  },
  {
    id: "custom",
    titleEmphasis: "Cus",
    titleRest: "tom Solutions",
    subtitle: "Lower Emissions.",
    description:
      "Cleaver-Brooks works with customers to custom tailor solutions that help them be more environmentally friendly, decrease fuel costs, increase efficiency, and meet ever stringent guidelines.",
    image: emission,
    imageAlt: "Worker inspecting equipment for emission control",
    reverse: true,
  },
];

export const RECENT_NEWS: RecentNewsItem[] = [
  {
    id: 0,
    title: "Boiler Technology Innovation",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Curabitur convallis justo a purus varius, ut congue metus facilisis.",
    image: "https://picsum.photos/seed/news1/400/250",
  },
  {
    id: 1,
    title: "Commitment During the Pandemic",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    image: "https://picsum.photos/seed/news2/400/250",
  },
  {
    id: 2,
    title: "Product of the Year 2024",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    image: "https://picsum.photos/seed/news3/400/250",
  },
  {
    id: 3,
    title: "Sustainability in Focus",
    body: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.",
    image: "https://picsum.photos/seed/news4/400/250",
  },
  {
    id: 4,
    title: "AI and Automation in Boilers",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    image: "https://picsum.photos/seed/news5/400/250",
  },
  {
    id: 5,
    title: "Global Expansion Strategy",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "https://picsum.photos/seed/news6/400/250",
  },
];

export const DISCOVER_ITEMS: DiscoverItem[] = [
  {
    id: 1,
    palette: "purple",
    image: product,
    imageAlt: "Various Cleaver Brooks boiler system components",
    subtitle: "Product Index",
    title: "Have Something\nin Mind?",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit enam nonummy lorem ipsum dolor sit amet consectetur adipiscing elit enam.",
  },
  {
    id: 2,
    palette: "green",
    image: cleaver,
    imageAlt: "Cleaver Brooks Boiler House team",
    subtitle: "Find a Rep",
    title: "Over 1,500\nReps Worldwide",
    text: "The Cleaver-Brooks Representative Association (CBRA) is the first and only dedicated sales and service rep network in the industry.",
  },
];
