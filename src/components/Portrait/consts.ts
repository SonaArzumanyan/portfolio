import portraitAbout from "../../assets/portraits/portrait-about.png";
import portraitHome from "../../assets/portraits/portrait-home.png";

export type PortraitVariant = "home" | "about";

export type PortraitConfig = {
  src: string;
  alt: string;
};

export const PORTRAITS: Record<PortraitVariant, PortraitConfig> = {
  home: {
    src: portraitHome,
    alt: "Sona Arzumanyan, professional portrait in a black blazer",
  },
  about: {
    src: portraitAbout,
    alt: "Sona Arzumanyan, professional headshot in business attire",
  },
};
