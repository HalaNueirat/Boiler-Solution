import type {NavItem} from "../Header/Header.types";

export interface INavListProps {
  items: NavItem[];
  onItemClick?: () => void;
}

export interface ISectionProps {
  id?: string;
  title?: string;
  className?: string;
  withSpacing?: boolean;
  withContainer?: boolean;
  headerInsideContainer?: boolean;
  headerClassName?: string;
  beforeHeader?: React.ReactNode;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}
