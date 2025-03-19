import AuthService from "@/shared/helpers/authHelpers";
import styles from "./styles.module.css";
import { formValidationAuth } from "@/shared/helpers/formValidationAuth";
import toast from "react-hot-toast";
import { useForm } from "@/shared/hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent } from "react";

import { AUTH_CREDENTIALS } from "@/shared/config/authConfig";
import { Input } from "@/shared/ui/Input/Input";
import { FormData } from "@/shared/interfaces";

const initialValues = {
  login: "",
  password: "",
};

const validate = (formData: FormData): string | null => {
  const errorMessage = formValidationAuth(formData, (login, password) =>
    AuthService.isLoginUserValid(login, password, AUTH_CREDENTIALS)
  );
  if (errorMessage) {
    toast.error(errorMessage);
    return errorMessage;
  }
  return null;
};

export const Login = () => {
  const { formData, formError, handleChange, handlerSubmit, handlerBlur } =
    useForm<FormData>(initialValues, validate);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAuthSuccess = () => {
    AuthService.saveIsAuthToLs(true);
    navigate(location.state?.from || "/");
    toast.success("Вы успешно вошли");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    handlerSubmit(e);

    if (!formError) {
      if (
        AuthService.isLoginUserValid(
          formData.login,
          formData.password,
          AUTH_CREDENTIALS
        )
      ) {
        handleAuthSuccess();
      }
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>Вход на News Profile</p>
      <p className={styles.description1}>Войдите, чтобы продолжить</p>
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
    </div>
  );
};
