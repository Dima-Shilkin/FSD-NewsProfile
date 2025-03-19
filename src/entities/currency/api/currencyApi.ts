import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExchangeRateResponse, FetchPairParams, PopularCurrencies } from "../model/types";

const KEYexchange: string = import.meta.env.VITE_EXCHANGE_API_KEY;


export const fetchPopularCurrencies = createAsyncThunk<PopularCurrencies, string>(
  'currency/fetchPopularCurrencies',
  async (base) => {
    const { data } = await axios.get<ExchangeRateResponse>(
      `https://v6.exchangerate-api.com/v6/${KEYexchange}/latest/${base}`
    );
    const { conversion_rates } = data;
    return {
      EUR: conversion_rates.EUR,
      CNY: conversion_rates.CNY,
      RUB: conversion_rates.RUB,
    };
  },
)

export const fetchPairConversion = createAsyncThunk<number, FetchPairParams>(
  'currency/fetchPairConversion',
  async ({from, to}) => {
    const { data } = await axios.get<{ conversion_rate: number }>(
      `https://v6.exchangerate-api.com/v6/${KEYexchange}/pair/${from}/${to}`
    );

    return data.conversion_rate
  },
)


interface ApiResponse {
  supported_codes: [string, string][];
}

export const fetchCurrenciesList = createAsyncThunk<[string, string][]>(
  'currency/fetchCurrenciesList',
  async () => {
    const { data }: {data: ApiResponse} = await axios.get(
      `https://v6.exchangerate-api.com/v6/${KEYexchange}/codes`
    );

    return data.supported_codes
  },
)