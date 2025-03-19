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
import { CurrencyForm } from "../CurrencyForm/CurrencyForm";
import { CurrencyResult } from "../CurrencyResult/CurrencyResult";

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

  if (statusLoading === Status.LOADING) {
    return <Loader />;
  }
  if (statusError) {
    return <p>{statusError}</p>;
  }
  return (
    <div className={styles.calculateContainer}>
      <h2>Калькулятор валют</h2>
      <CurrencyForm
        currencyState={currencyState}
        setCurrencyState={setCurrencyState}
        currencyOptions={currencyOptions}
        onCalculate={handleCalculate}
      />
      <CurrencyResult
        amount={currencyState.amount}
        from={currencyState.from}
        to={currencyState.to}
        rate={rate}
      />
    </div>
  );
};
