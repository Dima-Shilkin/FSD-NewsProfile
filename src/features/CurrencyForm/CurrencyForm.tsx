import { Input } from "@/shared/ui/Input/Input";
import { SelectS } from "@/shared/ui/SelectS/SelectS";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrencyList } from "@/entities/currency/api/selector";
import toast from "react-hot-toast";
import {
  fetchCurrenciesList,
  fetchPairConversion,
} from "@/entities/currency/api/currencyApi";
import { useEffect } from "react";
import { AppDispatch } from "@/app/appStore";
import Loader from "@/shared/ui/Loader/Loader";
import { Status } from "@/shared/interfaces";

interface CurrencyState {
  amount: string;
  from: string;
  to: string;
}
interface CurrencyFormProps {
  setCurrencyState: (state: any) => void; // разобраться с ани
  currencyState: CurrencyState;
}

export const CurrencyForm = ({
  currencyState,
  setCurrencyState,
}: CurrencyFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { currencyListData, statusLoading, statusError } =
    useSelector(selectCurrencyList);

  useEffect(() => {
    dispatch(fetchCurrenciesList());
  }, []);

  const currencyOptions = currencyListData
    ? currencyListData.map(([code]) => code)
    : [];

  const handleCalculate = () => {
    const { amount, from, to } = currencyState;
    if (!amount || !from || !to) {
      toast.error("Пожалуйста, заполините все поля");
      return;
    }

    dispatch(fetchPairConversion({ from, to }));
  };

  if (statusLoading === Status.LOADING) {
    return <Loader />;
  }
  if (statusError) {
    return <p>{statusError}</p>;
  }

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
      <button className={styles.buttonCalculate} onClick={handleCalculate}>
        Рассчитать
      </button>
    </div>
  );
};
