import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={styles.welcomePage_container}>
      <h1 className={styles.title}>Добро пожаловать на сайт News Profile</h1>
      <nav className={styles.nav}>
        <NavLink to="/news" className="navLink">
          Новости
        </NavLink>
        <NavLink to="/profile" className="navLink">
          Профиль
        </NavLink>
        <NavLink to="/weather" className="navLink">
          Погода
        </NavLink>
        <NavLink to="/currency" className="navLink">
          Курс валют
        </NavLink>
      </nav>
    </div>
  );
};
