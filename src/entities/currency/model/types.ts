import { Status } from "@/shared/interfaces";

export interface PopularCurrencies {
  [currency: string]: number;
}

export interface ExchangeRateResponse {
  conversion_rates: PopularCurrencies;
}

export interface FetchPairParams {
  from: string;
  to: string;
}

export interface CurrencySliceState {
  popularCurrency: {
    baseCurrency: string;
    currencyData: PopularCurrencies;
    statusLoading: Status;
    statusError: string;
  };
  currencyList: {
    currencyListData: [string, string][];
    statusLoading: Status;
    statusError: string;
  };
  currencyRate: {
    rate: number;
    statusLoading: Status;
    statusError: string;
  };
}