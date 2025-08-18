export type DiscoverPalette = "purple" | "green";

export interface DiscoverItem {
  id: number | string;
  palette: DiscoverPalette;
  image: string;
  imageAlt: string;
  subtitle: string;
  title: string;
  text: string;
}

export interface IDiscoverCardProps {
  item: DiscoverItem;
}

export interface IDiscoverProps {
  items: DiscoverItem[];
}
