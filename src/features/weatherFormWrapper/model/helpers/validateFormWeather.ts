import { FormData } from "@/shared/interfaces";
import toast from "react-hot-toast";

 export const validateFormWeather = (formData: FormData) => {
    if (!formData.city) {
      toast.error("Название города не может быть пустым");
      return "Название города не может быть пустым";
    }
    return null;
  };