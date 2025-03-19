import { getCitiesFromLocalStorage } from "@/shared/helpers/LSforWeather";
import styles from "./styles.module.css";

interface LastRequestCardProps {
  handleCityClick: (city: string) => Promise<void>;
}

export const LastRequestCards = ({ handleCityClick }: LastRequestCardProps) => {
  const cities = getCitiesFromLocalStorage();

  return (
    <div className={styles.card_last_request}>
      <h3>Последние запросы:</h3>
      {cities.length === 0 ? (
        <p>Нет сохранённых городов</p>
      ) : (
        <ul>
          {cities.map((city, index) => (
            <li
              className={`${styles.city_name} ${styles.arrow_item}`}
              key={index}
              onClick={() => handleCityClick(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
