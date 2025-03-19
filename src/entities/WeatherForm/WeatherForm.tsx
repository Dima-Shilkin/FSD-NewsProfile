import { Input } from "@/shared/ui/Input/Input";
import styles from "./styles.module.css";
import { FormData } from "@/shared/interfaces";

interface WeatherSearch {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const WeatherForm = ({
  formData,
  handleChange,
  onSubmit,
}: WeatherSearch) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        className={styles.weatherInput}
        placeholder={"Введите город"}
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
    </form>
  );
};
