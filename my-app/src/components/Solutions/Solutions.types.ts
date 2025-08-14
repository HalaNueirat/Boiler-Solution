export interface SolutionItem {
  id: string;
  titleEmphasis: string;
  titleRest: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface ISolutionCardProps {
  solution: SolutionItem;
}

export interface ISolutionsProps {
  solutions: SolutionItem[];
}
