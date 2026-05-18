export type NavItem = {
  path: string;
  label: string;
  end?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Home", end: true },
  { path: "/projects", label: "Projects" },
  { path: "/journey", label: "Journey" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/cv", label: "CV" },
  { path: "/cv-generator", label: "CV AI" },
];

export const BRAND_LABEL = "sona/arzumanyan";
