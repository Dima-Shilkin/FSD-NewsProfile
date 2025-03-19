import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { setActive } from "@/shared/helpers/setActive";
import Logout from "@/features/Logout/Logout";
import { CurrencyRate } from "../CurrencyRate/CurrencyRate";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">News Profile</Link>
        <CurrencyRate />
        <nav className={styles.nav}>
          <NavLink to="/profile" className={setActive}>
            Профиль
          </NavLink>
          <NavLink to="/news" className={setActive}>
            Новости
          </NavLink>
          <NavLink to="/weather" className={setActive}>
            Погода
          </NavLink>
          <NavLink to="/currency" className={setActive}>
            Курс валют
          </NavLink>
          <Logout />
        </nav>
      </div>
    </header>
  );
};
