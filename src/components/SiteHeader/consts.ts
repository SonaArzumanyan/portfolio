export type HeaderNavItem = {
  path: string;
  label: string;
  end?: boolean;
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { path: "/", label: "Home", end: true },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/journey", label: "Journey" },
];

export const RESUME_PATH = "/cv";
export const BRAND_NAME = "Sona Arzumanyan";
