import { AUTH_CREDENTIALS } from "@/shared/config/authConfig";
import AuthService from "@/shared/helpers/authHelpers";
import { formValidationAuth } from "@/shared/helpers/formValidationAuth";
import { FormData } from "@/shared/interfaces";
import toast from "react-hot-toast";

export const validateAuth = (formData: FormData): string | null => {
  const errorMessage = formValidationAuth(formData, (login, password) =>
    AuthService.isLoginUserValid(login, password, AUTH_CREDENTIALS)
  );
  if (errorMessage) {
    toast.error(errorMessage);
    return errorMessage;
  }
  return null;
};