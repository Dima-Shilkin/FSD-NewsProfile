import { RootState } from "@/app/appStore"

export const selectPopularCurrency = (state: RootState) => state.currency.popularCurrency
export const selectCurrencyList = (state: RootState) => state.currency.currencyList
export const selectRate = (state: RootState) => state.currency.currencyRate