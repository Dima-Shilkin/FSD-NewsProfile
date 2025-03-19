import styles from "./styles.module.css";
import { getIconForWeather } from "@/shared/helpers/getIconForWeather";
import { TempIcon } from "@/shared/ui/Icons/TempIcon";
import { WeatherData } from "../../model/types";

export const WeatherCard = ({
  name,
  img,
  description,
  temperature,
}: WeatherData) => {
  return (
    <div className={styles.cardWeather}>
      <div className={styles.cardWeather_left}>
        <img
          className={styles.weatherImg}
          src={getIconForWeather(img)}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <span>{description}</span>
        </div>
      </div>
      <div className={styles.cardWeather_right}>
        <TempIcon className={styles.tempImg} />
        <span> {temperature.toFixed(0)} ℃</span>
      </div>
    </div>
  );
};
