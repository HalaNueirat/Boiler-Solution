export interface RecentNewsItem {
  id: number;
  title: string;
  body: string;
  image: string;
}

export interface INewsCardProps {
  item: RecentNewsItem;
}

export interface IRecentNewsProps {
  items: RecentNewsItem[];
}
