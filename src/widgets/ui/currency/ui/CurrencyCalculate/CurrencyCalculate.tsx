import { CurrencyForm } from "@/features/CurrencyForm/CurrencyForm";
import styles from "./styles.module.css";
import { useState } from "react";
import { CurrencyResult } from "@/entities/currency";

interface CurrencyState {
  amount: string;
  from: string;
  to: string;
}

export const CurrencyCalculate = () => {
  const [currencyState, setCurrencyState] = useState<CurrencyState>({
    amount: "",
    from: "USD",
    to: "RUB",
  });

  return (
    <div className={styles.calculateContainer}>
      <h2>Калькулятор валют</h2>
      <CurrencyForm
        currencyState={currencyState}
        setCurrencyState={setCurrencyState}
      />
      <CurrencyResult {...currencyState} />
    </div>
  );
};
