import styles from "./styles.module.css";

interface CurrencyResultProps {
  amount: string;
  from: string;
  to: string;
  rate: number | null;
}

export const CurrencyResult = ({
  amount,
  from,
  to,
  rate,
}: CurrencyResultProps) => {
  if (!rate || Number(amount) <= 0) return null;

  const result = (rate * Number(amount)).toFixed(2);

  return (
    <div className={styles.result}>{`${amount} ${from} = ${result} ${to}`}</div>
  );
};
