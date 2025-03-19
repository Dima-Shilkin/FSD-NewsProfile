import { LoginForm } from "@/entities/LoginForm/LoginForm";
import { AUTH_CREDENTIALS } from "@/shared/config/authConfig";
import AuthService from "@/shared/helpers/authHelpers";
import { useForm } from "@/shared/hooks/useForm";
import { FormData } from "@/shared/interfaces";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { validateAuth } from "../../model/helpers/validateAuth";

const initialValues = {
  login: "",
  password: "",
};

export const LoginFormWrapper = () => {
  const { formData, formError, handleChange, handlerSubmit, handlerBlur } =
    useForm<FormData>(initialValues, validateAuth);

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
    <LoginForm
      formData={formData}
      formError={formError}
      handleChange={handleChange}
      handlerBlur={handlerBlur}
      onSubmit={onSubmit}
    />
  );
};
