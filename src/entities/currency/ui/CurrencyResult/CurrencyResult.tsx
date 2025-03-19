import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectRate } from "@/entities/currency/api/selector";

interface CurrencyResultProps {
  amount: string;
  from: string;
  to: string;
}

export const CurrencyResult = ({ amount, from, to }: CurrencyResultProps) => {
  const { rate } = useSelector(selectRate);

  if (!rate || Number(amount) <= 0) return null;

  const result = (rate * Number(amount)).toFixed(2);

  return (
    <div className={styles.result}>{`${amount} ${from} = ${result} ${to}`}</div>
  );
};
