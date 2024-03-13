import { NavLink } from "@remix-run/react";
import styles from "./layout.module.css";

export function LayoutHeader() {
  return (
    <header className={styles.header}>
      <ul className={styles.header__menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.current : undefined
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export function LayoutContent({ children }: React.PropsWithChildren) {
  return <div className={styles.content}>{children}</div>;
}
