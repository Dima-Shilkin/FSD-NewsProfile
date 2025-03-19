import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { setActive } from "@/shared/helpers/setActive";

export const Footer = () => {
  return (
    <footer className={styles.header}>
      <div className={styles.container}>
        <Link to="/">News Profile</Link>
        <nav className={styles.nav}>
          <NavLink to="/profile" className={setActive}>
            Профиль
          </NavLink>
          <NavLink to="/news" className={setActive}>
            Новости
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};
