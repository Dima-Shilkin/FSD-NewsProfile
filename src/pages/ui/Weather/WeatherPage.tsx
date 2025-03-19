import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { AppDispatch } from "@/app/appStore";
import { selectWeather } from "@/entities/weather/api/selector";
import { fetchWeather } from "@/entities/weather/api/weatherApi";
import Loader from "@/shared/ui/Loader/Loader";
import { IncorrectData } from "@/shared/ui/IncorrectData/IncorrectData";
import { WeatherCard } from "@/entities/weather";
import { LastRequestCards } from "@/widgets/ui/LastRequestCards/LastRequestCards";
import { WeatherFormWrapper } from "@/features/weatherFormWrapper/ui/WeatherFormWrapper/weatherFormWrapper";
import { Status } from "@/shared/interfaces";

export const Weather = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { weatherData, statusLoading, statusError } =
    useSelector(selectWeather);

  const fetchWeatherData = (city: string) => {
    dispatch(fetchWeather(city));
  };

  const handleCityClick = async (city: string) => {
    fetchWeatherData(city);
  };

  return (
    <>
      <div className={styles.weatherContainer}>
        <WeatherFormWrapper />
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
