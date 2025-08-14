export interface NavItem {
  id: number;
  label: string;
  href: string;
  icon?: string;
}

export interface NavSection {
  id: number;
  title?: string;
  items: NavItem[];
}

export interface IMobileHeaderBarProps {
  onMenuToggle: () => void;
}

export interface ISidebarCloseProps {
  onSidebarClose?: () => void;
}
