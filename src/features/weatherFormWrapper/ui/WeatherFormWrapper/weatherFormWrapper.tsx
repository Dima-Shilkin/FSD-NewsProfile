import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/appStore";
import { useForm } from "@/shared/hooks/useForm";
import { fetchWeather } from "@/entities/weather/api/weatherApi";
import { FormEvent } from "react";
import { WeatherForm } from "@/entities/WeatherForm/WeatherForm";
import { validateFormWeather } from "../../model/helpers/validateFormWeather";

export const WeatherFormWrapper = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialValues = { city: "" };

  const { formData, formError, handleChange, handlerSubmit, resetForm } =
    useForm(initialValues, validateFormWeather);

  const fetchWeatherData = (city: string) => {
    dispatch(fetchWeather(city));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handlerSubmit(e);

    if (!formError) {
      fetchWeatherData(formData.city);
      resetForm();
    }
  };

  return (
    <WeatherForm
      formData={formData}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};
