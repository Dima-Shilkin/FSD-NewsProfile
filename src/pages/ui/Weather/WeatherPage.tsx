import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { AppDispatch } from "@/app/appStore";
import { selectWeather } from "@/entities/weather/api/selector";
import toast from "react-hot-toast";
import { useForm } from "@/shared/hooks/useForm";
import { fetchWeather } from "@/entities/weather/api/weatherApi";
import { FormEvent } from "react";
import { Input } from "@/shared/ui/Input/Input";
import { FormData, Status } from "@/shared/interfaces";
import Loader from "@/shared/ui/Loader/Loader";
import { IncorrectData } from "@/shared/ui/IncorrectData/IncorrectData";
import { WeatherCard } from "@/entities/weather";
import { LastRequestCards } from "@/widgets/ui/LastRequestCards/LastRequestCards";

export const Weather = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialValues = { city: "" };

  const { weatherData, statusLoading, statusError } =
    useSelector(selectWeather);

  const validate = (formData: FormData) => {
    if (!formData.city) {
      toast.error("Название города не может быть пустым");
      return "Название города не может быть пустым";
    }
    return null;
  };

  const { formData, formError, handleChange, handlerSubmit, resetForm } =
    useForm(initialValues, validate);

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

  const handleCityClick = async (city: string) => {
    fetchWeatherData(city);
  };

  console.log(weatherData);

  return (
    <>
      <div className={styles.weatherContainer}>
        <form onSubmit={onSubmit}>
          <Input
            className={styles.weatherInput}
            placeholder={"Введите город"}
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </form>
        {statusLoading === Status.LOADING && <Loader />}
        {statusError && <IncorrectData />}
        {statusLoading === Status.SUCCESS &&
          Object.keys(weatherData).length > 0 && (
            <WeatherCard
              name={weatherData.name}
              img={weatherData.img}
              description={weatherData.description}
              temperature={weatherData.temperature}
            />
          )}
      </div>
      <LastRequestCards handleCityClick={handleCityClick} />
    </>
  );
};
