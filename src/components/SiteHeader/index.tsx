import { NavLink } from "react-router-dom";
import { BRAND_NAME, HEADER_NAV_ITEMS, RESUME_PATH } from "./consts";
import { getHeaderLinkClassName } from "./utils";
import styles from "./styles.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand} end>
        {BRAND_NAME}
      </NavLink>

      <nav aria-label="Main">
        <ul className={styles.nav}>
          {HEADER_NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  getHeaderLinkClassName(isActive, styles.navLink, styles.navLinkActive)
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <NavLink to={RESUME_PATH} className={styles.resumeLink}>
          Resume
        </NavLink>
      </div>
    </header>
  );
}
