import type { ReactNode } from "react";
import type { PageShellVariant } from "./consts";
import { getPanelClassName } from "./utils";
import styles from "./styles.module.css";

type PageShellProps = {
  children: ReactNode;
  variant?: PageShellVariant;
};

export function PageShell({ children, variant = "default" }: PageShellProps) {
  return (
    <div className={styles.shell}>
      <div className={getPanelClassName(variant)}>{children}</div>
    </div>
  );
}
