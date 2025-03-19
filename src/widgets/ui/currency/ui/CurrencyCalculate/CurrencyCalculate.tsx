import { AppDispatch } from "@/app/appStore";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrencyList,
  selectRate,
} from "@/entities/currency/api/selector";
import {
  fetchCurrenciesList,
  fetchPairConversion,
} from "@/entities/currency/api/currencyApi";
import toast from "react-hot-toast";
import { Status } from "@/shared/interfaces";
import Loader from "@/shared/ui/Loader/Loader";
import { Input } from "@/shared/ui/Input/Input";
import { SelectS } from "@/shared/ui/SelectS/SelectS";

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

  const dispatch = useDispatch<AppDispatch>();

  const { currencyListData, statusLoading, statusError } =
    useSelector(selectCurrencyList);

  const { rate } = useSelector(selectRate);

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

  const displayResult: string | null = rate
    ? `${currencyState.amount} ${currencyState.from} = ${(
        rate * Number(currencyState.amount)
      ).toFixed(2)} ${currencyState.to}`
    : null;

  if (statusLoading === Status.LOADING) {
    return <Loader />;
  }
  if (statusError) {
    return <p>{statusError}</p>;
  }
  return (
    <div className={styles.calculateContainer}>
      <h2>Калькулятор валют</h2>
      <div className={styles.calculateBlock}>
        <div className={styles.inpBlock}>
          <Input
            className={styles.inp}
            type={"number"}
            label={"Сумма"}
            placeholder={"Введите сумму"}
            value={currencyState.amount}
            onChange={(e) =>
              setCurrencyState((prev) => ({ ...prev, amount: e.target.value }))
            }
          />
        </div>
        <div className={styles.inpBlock}>
          <SelectS
            id="from"
            label="Из"
            value={currencyState.from}
            onChange={(e) =>
              setCurrencyState((prev) => ({ ...prev, from: e.target.value }))
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
              setCurrencyState((prev) => ({ ...prev, to: e.target.value }))
            }
            currencies={currencyOptions}
          />
        </div>
      </div>
      <button className={styles.buttonCalculate} onClick={handleCalculate}>
        Рассчитать
      </button>
      {rate > 0 && <div className={styles.result}>{displayResult}</div>}
    </div>
  );
};
