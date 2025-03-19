import { selectPopularCurrency } from "@/entities/currency/api/selector";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Status } from "@/shared/interfaces";
import Loader from "@/shared/ui/Loader/Loader";

export const CurrencyRate = () => {
  const { currencyData, statusLoading, statusError, baseCurrency } =
    useSelector(selectPopularCurrency);

  return (
    <div className={styles.currencyRate}>
      {statusLoading === Status.LOADING && <Loader />}
      {statusError && <span>{statusError}</span>}
      {statusLoading === Status.SUCCESS &&
        !statusError &&
        currencyData?.RUB && (
          <span className={styles.val}>
            1 {baseCurrency} = {currencyData.RUB.toFixed(2) + " RUB"}
          </span>
        )}
    </div>
  );
};
