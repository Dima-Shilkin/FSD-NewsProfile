import { Input } from "@/shared/ui/Input/Input";
import styles from "./styles.module.css";
import { FormData } from "@/shared/interfaces";

interface LoginFormProps {
  formData: FormData;
  formError: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = ({
  formData,
  formError,
  handleChange,
  handlerBlur,
  onSubmit,
}: LoginFormProps) => {
  return (
    <form className={styles.login_form} onSubmit={onSubmit}>
      <div className={styles.input_conteiner}>
        <Input
          label="Введите логин"
          value={formData.login}
          onChange={handleChange}
          onBlur={handlerBlur}
          name="login"
          placeholder="Login"
          error={formError}
        />
      </div>
      <div className={styles.input_conteiner}>
        <Input
          label="Введите пароль"
          value={formData.password}
          onChange={handleChange}
          onBlur={handlerBlur}
          name="password"
          type="password"
          placeholder="Password"
          error={formError}
        />
      </div>
      <button className={styles.button} type="submit">
        Вход
      </button>
    </form>
  );
};
