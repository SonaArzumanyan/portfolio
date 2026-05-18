import type { PortraitVariant } from "./consts";
import { PORTRAITS } from "./consts";

export function getPortraitConfig(variant: PortraitVariant) {
  return PORTRAITS[variant];
}
