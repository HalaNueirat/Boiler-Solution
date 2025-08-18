export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export interface FooterGroup {
  id: number;
  title: string;
  links: FooterLink[];
  ariaLabel?: string;
}

export interface SocialLink {
  id: number;
  label: string;
  href: string;
  iconClass: string;
}

export interface FooterData {
  logoSrc: string;
  logoAlt: string;
  addressLines: string[];
  primaryLinks: FooterLink[];
  groups: FooterGroup[];
  social: SocialLink[];
  legal: {
    yearText: string;
    termsHref: string;
    privacyHref: string;
  };
}

export interface IFooterProps {
  data: FooterData;
}

export interface IFooterColumnProps {
  group: FooterGroup;
}
