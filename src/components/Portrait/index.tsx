import type { PortraitVariant } from "./consts";
import { getPortraitConfig } from "./utils";
import styles from "./styles.module.css";

type PortraitProps = {
  variant: PortraitVariant;
  className?: string;
};

export function Portrait({ variant, className }: PortraitProps) {
  const { src, alt } = getPortraitConfig(variant);
  const imageClassName = className ? `${styles.image} ${className}` : styles.image;

  return <img src={src} alt={alt} className={imageClassName} />;
}
