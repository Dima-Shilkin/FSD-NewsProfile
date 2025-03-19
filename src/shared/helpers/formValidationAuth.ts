interface FormData {
  [key: string]: string;
}

type ValidationFunction = (login: string, password: string) => boolean

export const formValidationAuth = (formData: FormData, isLoginUserValid: ValidationFunction): string | void => {
  if (!formData.login || !formData.password) {
    return "Пожалуйста заполните все поля";
  }

  if (!isLoginUserValid(formData.login, formData.password)) {
    return "Неверный логин или пароль";
  }
};
