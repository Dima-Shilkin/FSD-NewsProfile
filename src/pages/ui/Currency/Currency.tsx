import { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/appStore";
import { selectPopularCurrency } from "@/entities/currency/api/selector";
import { setBaseCurrency } from "@/entities/currency/api/slice";
import {
  getBaseCurrencyFromLS,
  saveBaseCurrencyToLS,
} from "@/shared/helpers/LSforCurrencyPage";
import { fetchPopularCurrencies } from "@/entities/currency/api/currencyApi";
import { Status } from "@/shared/interfaces";
import Loader from "@/shared/ui/Loader/Loader";
import { BaseCurrencySelect } from "@/features/BaseCurrencySelect/BaseCurrencySelect";
import { CurrencyCalculate, RatesList } from "@/widgets/ui/currency";

export const Currency = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { currencyData, statusLoading, statusError, baseCurrency } =
    useSelector(selectPopularCurrency);

  useEffect(() => {
    if (baseCurrency) {
      dispatch(fetchPopularCurrencies(baseCurrency));
    }
  }, [baseCurrency, dispatch]);

  //РАЗОБРАТЬСЯ С ЗАВИСИМОСТЯМИ!!!

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    dispatch(setBaseCurrency(selectedCurrency));
    saveBaseCurrencyToLS(selectedCurrency);
  };

  if (statusError) return <div>{statusError}</div>;

  return (
    <>
      <div className={styles.popularConteiner}>
        {statusLoading === Status.LOADING && <Loader />}
        {statusLoading === Status.SUCCESS && (
          <>
            <BaseCurrencySelect
              baseCurrency={baseCurrency}
              handleCurrencyChange={handleCurrencyChange}
            />
            <RatesList baseCurrency={baseCurrency} rates={currencyData} />
          </>
        )}
      </div>
      <CurrencyCalculate />
    </>
  );
};
