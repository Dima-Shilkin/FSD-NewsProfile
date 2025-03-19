import { useState } from "react";
import { FormData } from "../interfaces";

type ValidateFunction = (formData: FormData) => string | null;

export const useForm = <T extends FormData>(initialValues: T, validate: ValidateFunction) => {
  const [formData, setFormData] = useState(initialValues);
  const [formError, setFormError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (formError) {
      setFormError(false);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerBlur = () => {
    setFormError(false);
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMessage = validate(formData);

    if (errorMessage) {
      setFormError(true);
      return;
    }

    resetForm();
  };

  return {
    formData,
    formError,
    handleChange,
    handlerBlur,
    resetForm,
    handlerSubmit,
  };
};
