import styles from "./styles.module.css";
import { LoginFormWrapper } from "@/features/loginFormWrapper";

export const Login = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>Вход на News Profile</p>
      <p className={styles.description1}>Войдите, чтобы продолжить</p>
      <LoginFormWrapper />
    </div>
  );
};
