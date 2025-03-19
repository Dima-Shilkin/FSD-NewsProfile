import { createSlice } from "@reduxjs/toolkit"
import { CurrencySliceState } from "../model/types"
import { Status } from "@/shared/interfaces"
import { fetchCurrenciesList, fetchPairConversion, fetchPopularCurrencies } from "./currencyApi"
import { getBaseCurrencyFromLS } from "@/shared/helpers/LSforCurrencyPage"

const initialState: CurrencySliceState = {
  popularCurrency: {
    baseCurrency: getBaseCurrencyFromLS() ||
    "USD",
    currencyData : {},
    statusLoading: Status.IDLE,
    statusError: '',
  },
  currencyList: {
    currencyListData : [],
    statusLoading: Status.IDLE,
    statusError: '',
  },
  currencyRate: {
    rate: 0,
    statusLoading: Status.IDLE,
    statusError: ''
  }
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setPopularCurrencies(state, action) {
      state.popularCurrency.currencyData= action.payload
    },
    setBaseCurrency(state, action) {
      state.popularCurrency.baseCurrency = action.payload
    },

    setListCurrency(state, action) {
      state.currencyList.currencyListData = action.payload
    },

    setCurrencyRate(state, action) {
      state.currencyRate.rate = action.payload
    }
  },
  
  extraReducers: (builder) => {
    builder
      // Для популярных валют
      .addCase(fetchPopularCurrencies.fulfilled, (state, action) => {
        state.popularCurrency.currencyData = action.payload
        state.popularCurrency.statusLoading = Status.SUCCESS
        state.popularCurrency.statusError = ''
      })
      .addCase(fetchPopularCurrencies.pending, (state) => {
        state.popularCurrency.statusLoading = Status.LOADING
        state.popularCurrency.currencyData = {}
        state.popularCurrency.statusError = ''
      })
      .addCase(fetchPopularCurrencies.rejected, (state) => {
        state.popularCurrency.statusLoading = Status.ERROR
        state.popularCurrency.currencyData = {}
        state.popularCurrency.statusError = "Ошибка загрузки популярных валют"
      })
      
      // Для списка валют
      .addCase(fetchCurrenciesList.fulfilled, (state, action) => {
        state.currencyList.currencyListData = action.payload
        state.currencyList.statusLoading = Status.SUCCESS
        state.currencyList.statusError = ''
      })
      .addCase(fetchCurrenciesList.pending, (state) => {
        state.currencyList.statusLoading = Status.LOADING
        state.currencyList.currencyListData = []
        state.currencyList.statusError = ''
      })
      .addCase(fetchCurrenciesList.rejected, (state) => {
        state.currencyList.statusLoading = Status.ERROR
        state.currencyList.currencyListData = []
        state.currencyList.statusError = "Ошибка загрузки списка валют"
      })

      // Для конвертации валюты
      .addCase(fetchPairConversion.fulfilled, (state, action) => {
        state.currencyRate.rate = action.payload
        state.currencyRate.statusLoading = Status.SUCCESS
        state.currencyRate.statusError = ''
      })
      .addCase(fetchPairConversion.pending, (state) => {
        state.currencyRate.rate = 0
        state.currencyRate.statusLoading = Status.LOADING
        state.currencyRate.statusError = ''
      })
      .addCase(fetchPairConversion.rejected, (state) => {
        state.currencyRate.rate = 0
        state.currencyRate.statusLoading = Status.ERROR
        state.currencyRate.statusError = 'Ошибка конвертации валюты'
      })
   }
})

export const {setPopularCurrencies, setBaseCurrency, setListCurrency, setCurrencyRate} = currencySlice.actions

export default currencySlice.reducer