import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { BRAND_LABEL, NAV_ITEMS, RESUME_PATH } from "./consts";
import { getNavLinkClassName } from "./utils";
import styles from "./styles.module.css";

type SideNavProps = {
  children: ReactNode;
};

export function SideNav({ children }: SideNavProps) {

  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Primary navigation">
        <div className={styles.railInner}>
          <NavLink to="/" className={styles.brand} end>
            {BRAND_LABEL}
          </NavLink>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    getNavLinkClassName(isActive, styles.navLink, styles.navLinkActive)
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to={RESUME_PATH} className={styles.resumeLink}>
            CV
          </NavLink>
        </div>
      </aside>

      <header className={styles.mobileHeader}>
        <div className={styles.mobileTop}>
          <NavLink to="/" className={styles.brandHorizontal} end>
            {BRAND_LABEL}
          </NavLink>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                getNavLinkClassName(isActive, styles.mobileNavLink, styles.mobileNavLinkActive)
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
