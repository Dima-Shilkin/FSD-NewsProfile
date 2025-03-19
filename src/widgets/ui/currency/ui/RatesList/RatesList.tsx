import styles from "./styles.module.css";
import { PopularCurrencies } from "@/entities/currency/model/types";

interface RatesListProps {
  baseCurrency: string;
  rates: PopularCurrencies;
}

export const RatesList = ({ baseCurrency, rates }: RatesListProps) => {
  return (
    <ul className={styles.listRates}>
      {Object.entries(rates).map(([currency, rate]) => (
        <li className={styles.rateItem} key={currency}>
          1 {baseCurrency} = {rate} {currency}
        </li>
      ))}
    </ul>
  );
};
