import { Input } from "@/shared/ui/Input/Input";
import { SelectS } from "@/shared/ui/SelectS/SelectS";
import styles from "./styles.module.css";

interface CurrencyFormProps {
  currencyState: { amount: string; from: string; to: string };
  setCurrencyState: (state: any) => void; // разобраться с ани
  currencyOptions: string[];
  onCalculate: () => void;
}

export const CurrencyForm = ({
  currencyState,
  setCurrencyState,
  currencyOptions,
  onCalculate,
}: CurrencyFormProps) => {
  return (
    <div className={styles.calculateBlock}>
      <div className={styles.inpBlock}>
        <Input
          className={styles.inp}
          type="number"
          label="Сумма"
          placeholder="Введите сумму"
          value={currencyState.amount}
          onChange={(e) =>
            setCurrencyState((prev: any) => ({
              ...prev,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <div className={styles.inpBlock}>
        <SelectS
          id="from"
          label="Из"
          value={currencyState.from}
          onChange={(e) =>
            setCurrencyState((prev: any) => ({ ...prev, from: e.target.value }))
          }
          currencies={currencyOptions}
        />
      </div>
      <div className={styles.inpBlock}>
        <SelectS
          id="to"
          label="В"
          value={currencyState.to}
          onChange={(e) =>
            setCurrencyState((prev: any) => ({ ...prev, to: e.target.value }))
          }
          currencies={currencyOptions}
        />
      </div>
      <button className={styles.buttonCalculate} onClick={onCalculate}>
        Рассчитать
      </button>
    </div>
  );
};
